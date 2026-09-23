import authenticPhoto from '../assets/images/leslie_young_authentic.jpg';

export const DEFAULT_CEO_PORTRAIT = authenticPhoto;

export const useCeoPhoto = () => {
  return {
    photoUrl: authenticPhoto,
    defaultPortrait: authenticPhoto
  };
};
