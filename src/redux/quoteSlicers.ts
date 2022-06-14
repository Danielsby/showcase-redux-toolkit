import { createSlice } from '@reduxjs/toolkit'

interface RootState {
    counter: number,
    quotes: Array<{
        id: number,
        quote: string,
        favorite: boolean,
    }>
}

// Normal slice without createAction and createReducer
export const quoteCommander = createSlice({
    name: 'quoteCommander',
    initialState: {
        quotes: [
            {
                id: 0,
                quote: "",
                favorite: false,
            },
        ],
    } as RootState,
    reducers: {
        add: (state, action) => {
            state.quotes.push(
                {
                    id: state.quotes[state.quotes.length - 1].id + 1,
                    quote: action.payload,
                    favorite: false
                }
            );
        },
        favorite: (state, action) => {
            state.quotes[action.payload[0]].favorite = action.payload[1];
        },
        nonFavorite: (state, action) => {
            state.quotes[action.payload[0]].favorite = action.payload[1];
        },
        remove: (state, action) => {
            state.quotes.splice(action.payload, 1);
        },
    },
});
