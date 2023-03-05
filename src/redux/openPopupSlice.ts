import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type } from 'os';

type IPopup = {
  isOpen: boolean;
  tweet: {
    url: string;
  };
};

const initialState: IPopup = {
  isOpen: false,
  tweet: {
    url: '',
  }
}


export const openPopupSlice = createSlice({
  name: 'openPopup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.tweet = action.payload.tweet;
    }
  },
});

export const { openPopup } = openPopupSlice.actions;
export default openPopupSlice.reducer;



