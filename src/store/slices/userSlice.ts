import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISetUser {
  id: string;
  email: string;
  token: string;
}

const initialState = {
  id: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ISetUser>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = '';
      state.email = '';
      state.token = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
