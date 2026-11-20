import { configureStore } from "@reduxjs/toolkit";
import MenuItems from "./slice/MenuItems.ts";
import DistrictSlice from "./slice/DistrictSlice.ts";
import WeatherSlice from "./slice/WeatherSlice.ts";

export const store = configureStore({
    reducer: {
        menuItems: MenuItems,
        district: DistrictSlice,
        weather: WeatherSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
