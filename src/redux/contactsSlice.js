import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    token: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: {
    // fetchContacts------------------------

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    // addContact--------------------------------

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // deleteContact----------------------------------

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.token = action.payload.token;
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const contactsReducer = sliceContacts.reducer;
