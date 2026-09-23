import { useState, useEffect } from 'react';
import defaultCeoPortrait from '../assets/images/leslie_young_ceo_portrait_1790071601748.jpg';

const STORAGE_KEY = 'young_investments_ceo_custom_photo';
const EVENT_KEY = 'young_investments_ceo_photo_updated';

export const useCeoPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
    }
    return defaultCeoPortrait;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem(STORAGE_KEY);
    }
    return false;
  });

  useEffect(() => {
    const handleUpdate = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPhotoUrl(stored);
        setIsCustom(true);
      } else {
        setPhotoUrl(defaultCeoPortrait);
        setIsCustom(false);
      }
    };

    window.addEventListener(EVENT_KEY, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    // Also probe for uploaded static file in /public/
    const candidateFiles = [
      '/625839845_18348524797227682_2483927563931639941_n.jpg',
      '/ceo_leslie_young.jpg',
      '/leslie_young.jpg'
    ];

    if (!localStorage.getItem(STORAGE_KEY)) {
      candidateFiles.forEach((candidate) => {
        const testImg = new Image();
        testImg.onload = () => {
          // If naturalWidth > 0 and not HTML fallback
          if (testImg.naturalWidth > 50) {
            setPhotoUrl(candidate);
            setIsCustom(true);
          }
        };
        testImg.src = candidate;
      });
    }

    return () => {
      window.removeEventListener(EVENT_KEY, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const saveCustomPhoto = (dataUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setPhotoUrl(dataUrl);
      setIsCustom(true);
      window.dispatchEvent(new Event(EVENT_KEY));
    } catch (e) {
      console.error('Failed to save CEO photo to local storage', e);
    }
  };

  const resetPhoto = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(defaultCeoPortrait);
    setIsCustom(false);
    window.dispatchEvent(new Event(EVENT_KEY));
  };

  return { photoUrl, isCustom, saveCustomPhoto, resetPhoto };
};
