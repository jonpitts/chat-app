import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import messageReducer from "./slices/messageSlice";

const store = configureStore({
  reducer: {
    messageReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>; // TODO: fix firebase and firestore showing unknown
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
