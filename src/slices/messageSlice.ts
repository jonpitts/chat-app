import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "sup buddies",
  status: "",
};

const messageThunk = createAsyncThunk(
  "message/getMessages",
  async (userId: number, thunkAPI) => {
    const response = { data: "" }; //await userAPI.fetchById(userId)
    return response.data;
  }
);

const messageSlice = createSlice({
  initialState,
  name: "message",
  reducers: {
    sendMessage: (state, action) => {
      state.value = action.payload;
    },
    clearMessage: (state) => {
      state.value = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(messageThunk.pending, (state) => {
        state.status = "loading";
        state.value = "";
      })
      .addCase(messageThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(messageThunk.rejected, (state) => {
        state.status = "failed";
        state.value = "";
      });
  },
});

const { actions, reducer: messageReducer } = messageSlice;

export const { sendMessage, clearMessage } = actions;
export default messageReducer;
