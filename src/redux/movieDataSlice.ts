import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Result } from '../Types/MoviesType';

type IPopup = {
  isOpen: boolean;
  movie: Result;
};

type ISearchValue = {
  searchValue: string;
};

type IPageCounter = {
  pageCounter: number;
}

type IIsClickNextPage = {
  isClickNextPage: boolean;
}

type INumberOfPages = {
  numberOfPages: number | undefined;
}

type IdataState = {
  isOpen: IPopup['isOpen'];
  movie: IPopup['movie'];
  searchValue: ISearchValue['searchValue'];
  pageCounter: IPageCounter['pageCounter'];
  isClickNextPage: IIsClickNextPage['isClickNextPage'];
  numberOfPages: INumberOfPages["numberOfPages"]
}

const initialState: IdataState = {
  isOpen: false,
  movie: {
    poster_path: '',
    adult: false,
    overview: '',
    release_date: '',
    genre_ids: [],
    id: 0,
    original_title: '',
    original_language: '',
    title: '',
    backdrop_path: '',
    popularity: 0,
    vote_count: 0,
    video: false,
    vote_average: 0,
  },
  searchValue: '',
  pageCounter: 1,
  isClickNextPage: false,
  numberOfPages: 0,
}


export const movieDataSlice = createSlice({
  name: 'movieData',
  initialState,
  reducers: {
    openPopup: (state = initialState, action: PayloadAction<IPopup>) => {
      state.isOpen = action.payload.isOpen;
      state.movie = action.payload.movie;
    },
    searchValue: (state = initialState, action: PayloadAction<ISearchValue>) => {
      state.searchValue = action.payload.searchValue;
    },
    pageCounter: (state = initialState, action: PayloadAction<IPageCounter>) => {
      state.pageCounter = action.payload.pageCounter;
    },
    isClickNextPage: (state = initialState, action: PayloadAction<IIsClickNextPage>) => {
      state.isClickNextPage = action.payload.isClickNextPage;
    },
    numberOfPages: (state = initialState, action: PayloadAction<INumberOfPages>) => {
      state.numberOfPages = action.payload.numberOfPages;
    }
  },
});

export const { openPopup, searchValue, pageCounter, isClickNextPage, numberOfPages } = movieDataSlice.actions;
export default movieDataSlice.reducer;



