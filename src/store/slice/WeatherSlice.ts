import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface WeatherData {
    current: {
        temperature_2m: number;
        apparent_temperature: number;
        relative_humidity_2m: number;
        wind_speed_10m: number;
        weather_code: number;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        precipitation_probability: number[];
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        precipitation_probability_max: number[];
    };
}

const cityCoordinates: Record<
    string,
    { latitude: number; longitude: number }
> = {
    "TP. Hồ Chí Minh": { latitude: 10.8231, longitude: 106.6297 },
    "Hà Nội": { latitude: 21.0285, longitude: 105.8542 },
    "Đà Nẵng": { latitude: 16.0544, longitude: 108.2022 },
    "Hải Phòng": { latitude: 20.8449, longitude: 106.6881 },
    "Cần Thơ": { latitude: 10.0452, longitude: 105.7469 },
    "Huế": { latitude: 16.4637, longitude: 107.5909 },
    "Nha Trang": { latitude: 12.2388, longitude: 109.1967 },
    "Đà Lạt": { latitude: 11.9404, longitude: 108.4583 },
    "Vũng Tàu": { latitude: 10.3459, longitude: 107.0843 },
    "Quảng Ninh": { latitude: 21.0064, longitude: 107.2925 }
};

export const fetchWeather = createAsyncThunk<
    WeatherData,
    string,
    { rejectValue: string }
>(
    "weather/fetchWeather",
    async (city, { rejectWithValue }) => {
        try {
            const coordinates = cityCoordinates[city];

            if (!coordinates) {
                return rejectWithValue("Không tìm thấy thành phố.");
            }

            const response = await axios.get(
                "https://api.open-meteo.com/v1/forecast",
                {
                    params: {
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude,
                        current: [
                            "temperature_2m",
                            "apparent_temperature",
                            "relative_humidity_2m",
                            "wind_speed_10m",
                            "weather_code"
                        ].join(","),
                        hourly: [
                            "temperature_2m",
                            "precipitation_probability"
                        ].join(","),
                        daily: [
                            "weather_code",
                            "temperature_2m_max",
                            "temperature_2m_min",
                            "precipitation_probability_max"
                        ].join(","),
                        timezone: "Asia/Ho_Chi_Minh",
                        forecast_days: 7
                    }
                }
            );

            return response.data as WeatherData;
        } catch {
            return rejectWithValue(
                "Không thể tải dữ liệu thời tiết. Vui lòng thử lại."
            );
        }
    }
);

interface WeatherState {
    selectedCity: string;
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    selectedCity: "TP. Hồ Chí Minh",
    weatherData: null,
    loading: false,
    error: null
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setSelectedCity: (state, action: PayloadAction<string>) => {
            state.selectedCity = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
                state.error = null;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || "Đã xảy ra lỗi khi tải dữ liệu.";
            });
    }
});

export const { setSelectedCity } = weatherSlice.actions;

export default weatherSlice.reducer;
