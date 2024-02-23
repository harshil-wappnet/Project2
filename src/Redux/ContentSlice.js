import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visitedArticles: [],
};

const ContentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        visited(state, action) {
            const { article } = action.payload;
            state.visitedArticles.push(article); // Add the visited article to the array
        },
    },
});

export const { visited } = ContentSlice.actions;
export default ContentSlice.reducer;
