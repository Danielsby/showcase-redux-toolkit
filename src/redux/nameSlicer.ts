import { createSlice } from '@reduxjs/toolkit'

// interface RootState {
//     counter: number,
//     quotes: Array<{
//         id: number,
//         quote: string,
//         favorite: boolean,
//     }>
// }

// Quote
export const authorCommander = createSlice({
    name: 'authorCommander',
    initialState: {
        author: "No author",
    } as any,
    reducers: {
        testReducer: (state, action) => {
            state.author = action.payload;
        },
    },
});
