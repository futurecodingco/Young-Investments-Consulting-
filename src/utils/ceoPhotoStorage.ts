import { useState, useEffect } from 'react';

export const DEFAULT_CEO_PORTRAIT = '/625839845_18348524797227682_2483927563931639941_n.jpg';
export const FALLBACK_CEO_PORTRAIT = '/ceo_leslie_young.jpg';

const STORAGE_KEY = 'young_investments_ceo_custom_photo';
const EVENT_KEY = 'young_investments_ceo_photo_updated';

// Helper to safely get validated stored photo
export const getValidStoredPhoto = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    // Reject expired blob: URLs or corrupted values
    if (stored.startsWith('blob:') || stored === 'undefined' || stored === 'null' || stored.trim() === '') {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return stored;
  } catch {
    return null;
  }
};

export const useCeoPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    const valid = getValidStoredPhoto();
    return valid || DEFAULT_CEO_PORTRAIT;
  });

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    return !!getValidStoredPhoto();
  });

  useEffect(() => {
    const handleUpdate = () => {
      const stored = getValidStoredPhoto();
      if (stored) {
        setPhotoUrl(stored);
        setHasCustomPhoto(true);
      } else {
        setPhotoUrl(DEFAULT_CEO_PORTRAIT);
        setHasCustomPhoto(false);
      }
    };

    window.addEventListener(EVENT_KEY, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_KEY, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const saveCustomPhoto = (dataUrl: string) => {
    try {
      if (!dataUrl || dataUrl.startsWith('blob:')) {
        console.warn('Cannot save blob URL to persistent storage; please use base64 data URL.');
        return;
      }
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setPhotoUrl(dataUrl);
      setHasCustomPhoto(true);
      window.dispatchEvent(new Event(EVENT_KEY));
    } catch (e) {
      console.error('Failed to save CEO photo to local storage', e);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPhotoUrl(DEFAULT_CEO_PORTRAIT);
    setHasCustomPhoto(false);
    window.dispatchEvent(new Event(EVENT_KEY));
  };

  return {
    photoUrl,
    hasCustomPhoto,
    isCustom: hasCustomPhoto,
    saveCustomPhoto,
    resetPhoto,
    defaultPortrait: DEFAULT_CEO_PORTRAIT
  };
};
