import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalActive : false,
    boardArray : []
}

const boardsSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {

    }
})

export const boardsReducer = boardsSlice.reducer; //sub reducer ===> reducer combine