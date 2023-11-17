// actions.js

import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase";
import { SET_IMAGE_URL } from './actionTypes';

export const setImageUrl = (url) => ({
    type: 'SET_IMAGE_URL',
    payload: url,
  });
  
  export const fetchImage = () => {
    return async (dispatch) => {
      try {
        const profileImgRef = ref(storage, "gs://hopi-3d3d5.appspot.com/bg/arkaplan12.jpg");
        const imageUrl = await getDownloadURL(profileImgRef);
        dispatch(setImageUrl(imageUrl));
      } catch (error) {
        // Hata durumunda yapılacak işlemler
      }
    };
  };


