import { configureStore } from "@reduxjs/toolkit";
import MenuItems from "./slice/MenuItems.ts";

export const store = configureStore({
    reducer: {
        menuItems: MenuItems
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
