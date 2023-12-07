import axios from "axios";

import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
// Initializing state
const initialState = {
  news:[]
}

// Getting news from
export const getNewsAsync = createAsyncThunk("news/getNews", async (payload,thunkAPI) => {
  try {
    let url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2023-12-05&" +
    "sortBy=popularity&" +
    "apiKey=f28c6e870c8d49eaab8c32c62dd18e33";
    // Making API call

    axios(url).then((res) => {
      // console.log(res.data);
      // setNews(res.data.articles);
      thunkAPI.dispatch(getNews(res.data));
    });

  } catch (error) {
      console.error('Error fetching data:', error);
  }
});

const newsSlice = createSlice({
  name:"order",
  initialState,
  reducers : { 
    getNews : (state,action) => { 
      state.news = action.payload.articles;
    }
   }
});

// cart reducer
export const newsReducer = newsSlice.reducer;
// cart actions
export const {getNews} = newsSlice.actions;
// cart selector
export const newsSelector = (state) => state.news;