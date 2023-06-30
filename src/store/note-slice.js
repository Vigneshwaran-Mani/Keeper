import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'note ',
    initialState: {
        items: []
    },
    reducers:{
        replaceData(state,action){
            const newItem = action.payload;
            state.items = newItem.keepData;
        },
        addNote(state,action){
            const newItem = action.payload;
            state.items.push({
                title: newItem.titleValue,
                content: newItem.contentValue
            });
        },
        removeNote(state,action) {
            const id = action.payload;
            console.log(id);
            state.items =state.items.filter((noteItem , index) => index !== id);
        },
    }
});

export const noteActions = noteSlice.actions;

export default noteSlice;