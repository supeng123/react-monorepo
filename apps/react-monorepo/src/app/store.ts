import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi, albumsApi, photosApi } from '@react-monorepo/user';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
    }
});

setupListeners(store.dispatch);