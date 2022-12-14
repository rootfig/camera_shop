import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { SimilarSliceState } from '../../types/state';
import { fetchSimilarAction } from '../api-actions';


export const initialState: SimilarSliceState = {
  similars: [],
  isLoaded: false,
  isLoadError: false,
};

export const similarSlice = createSlice({
  name: NameSpace.Similar,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similars = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })
      .addCase(fetchSimilarAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      });
  },
});
