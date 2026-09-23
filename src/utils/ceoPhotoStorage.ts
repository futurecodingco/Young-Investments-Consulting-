import { useState, useEffect } from 'react';
import authenticPhoto from '../assets/images/leslie_young_authentic.jpg';

export const DEFAULT_CEO_PORTRAIT = authenticPhoto;
const STORAGE_KEY = 'young_investments_ceo_custom_photo';
const EVENT_KEY = 'young_investments_ceo_photo_updated';

const getStoredPhoto = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (!val || val.startsWith('blob:') || val === 'undefined' || val === 'null' || val.trim() === '') {
      return null;
    }
    return val;
  } catch {
    return null;
  }
};

export const useCeoPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return getStoredPhoto() || authenticPhoto;
  });

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    return !!getStoredPhoto();
  });

  useEffect(() => {
    const handleUpdate = () => {
      const stored = getStoredPhoto();
      if (stored) {
        setPhotoUrl(stored);
        setHasCustomPhoto(true);
      } else {
        setPhotoUrl(authenticPhoto);
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
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setPhotoUrl(dataUrl);
      setHasCustomPhoto(true);
      window.dispatchEvent(new Event(EVENT_KEY));
    } catch (e) {
      console.error('Failed to save photo', e);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setPhotoUrl(authenticPhoto);
    setHasCustomPhoto(false);
    window.dispatchEvent(new Event(EVENT_KEY));
  };

  return {
    photoUrl,
    hasCustomPhoto,
    saveCustomPhoto,
    resetPhoto,
    defaultPortrait: authenticPhoto
  };
};
