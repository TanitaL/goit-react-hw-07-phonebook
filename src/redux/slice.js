import { createSlice} from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  deleteContact,
} from '../redux/operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: ""
    },

    reducers: {
        filteredContacts: (state, action) => {
        state.filter = action.payload;
        },
    },

    extraReducers: {
        [getContacts.pending]: state => {
            state.loading = true;
        },
        [addContact.pending]: state => {
            state.loading = true;
        },
        [deleteContact.pending]: state => {
            state.loading = true;
        },

        [getContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.items = state.items.filter(({ id }) => id !== action.payload);
            state.loading = false;
        },

        [getContacts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [addContact.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [deleteContact.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});



export const contactsReducer = contactsSlice.reducer;

export const { addNewContact, filteredContacts } = contactsSlice.actions;

export const getContactsItems = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const isLoading = state => state.contacts.loading;






// handlePending = (state) => {
//     state.loading = true;
// },

// handleFulfilled = (state, action) => {
//     state.items = action.payload;
//     state.loading = false;
//     },

// handleAddContactFulfilled = (state, action) => {
//     state.items.push(action.payload);
//     state.loading = false;
// },
    
// handleDeleteContactFulfilled = (state, action) => {
//     state.items = state.items.filter(({ id }) => id !== action.payload);
//     state.loading = false;
// },

// handleRejected = (state, action) => {
//     state.error = action.payload;
//     state.loading = false;
// },

// const contactsSlice = createSlice({
//     name: "phonebook",
//     initialState: {
//         contacts: {
//             items: [],
//             isLoading: false,
//             error: null
//         },
//         filter: ""
//     },
//     reducers: {
//         filterContact: (state, action) => {
//             state.filter = action.payload;
//         },
//     },

//     extraReducers: (builder) => { 
//         builder
//             .addCase(getContacts.fulfilled, handleFulfilled)
//             .addCase(addContact.fulfilled, handleAddContactFulfilled)
//             .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
//             .addMatcher(isAnyOf([getContacts.pending, addContact.pending, deleteContact.pending]), handlePending)
//             .addMatcher(isAnyOf([getContacts.rejected, addContact.rejected, deleteContact.rejected]), handleRejected)
//     }
// })