import {createReducer} from "@reduxjs/toolkit";
import {author} from "./actions";

export const authorReducer = createReducer(
    {
        author: "",
    } as any, (builder) => {
    builder
        .addCase(author, (state, action) => {
            state.author = action.payload;
        })
})