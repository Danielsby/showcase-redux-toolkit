import {createAction} from "@reduxjs/toolkit";

// export const increment = createAction<number>('increment');
export const author = createAction('author', function prepare(newName: string) {
    return {
        payload: {
            author: newName,
        },
        meta: {
            toll: "toll-data-test"
        }
    }
})