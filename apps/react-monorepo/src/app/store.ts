import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi, albumsApi, photosApi } from '@react-monorepo/user';
import { postsApi } from '@react-monorepo/post'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
        .concat(postsApi.middleware)
    }
});

setupListeners(store.dispatch);