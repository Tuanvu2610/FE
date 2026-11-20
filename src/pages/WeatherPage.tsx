
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store.ts";
import {
    fetchWeather,
    setSelectedCity
} from "../store/slice/WeatherSlice.ts";

import "../styles/PageHeading.css";
import "../styles/WeatherPage.css";

const cities = [
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Cần Thơ",
    "Huế",
    "Nha Trang",
    "Đà Lạt",
    "Vũng Tàu",
    "Quảng Ninh"
];

const getWeatherIcon = (code: number) => {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 66, 67].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([80, 81, 82].includes(code)) return "🌧️";
    if ([95, 96, 99].includes(code)) return "⛈️";

    return "🌡️";
};

const getWeatherDescription = (code: number) => {
    if (code === 0) return "Trời quang";
    if ([1, 2].includes(code)) return "Ít mây";
    if (code === 3) return "Nhiều mây";
    if ([45, 48].includes(code)) return "Có sương mù";
    if ([51, 53, 55, 56, 57].includes(code)) return "Mưa phùn";
    if ([61, 63, 65, 66, 67].includes(code)) return "Có mưa";
    if ([71, 73, 75, 77].includes(code)) return "Có tuyết";
    if ([80, 81, 82].includes(code)) return "Mưa rào";
    if ([85, 86].includes(code)) return "Mưa tuyết";
    if ([95, 96, 99].includes(code)) return "Mưa dông";

    return "Chưa xác định";
};

const formatDate = (date: string) => {
    return new Date(date + "T00:00:00").toLocaleDateString("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit"
    });
};

const formatHour = (date: string) => {
    return date.substring(11, 16);
};

function WeatherPage() {
    const dispatch = useDispatch<AppDispatch>();

    const {
        selectedCity,
        weatherData,
        loading,
        error
    } = useSelector((state: RootState) => state.weather);

    const [searchCity, setSearchCity] = useState("");
    const [showCityList, setShowCityList] = useState(false);

    useEffect(() => {
        dispatch(fetchWeather(selectedCity));
    }, [dispatch, selectedCity]);

    const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(searchCity.toLowerCase().trim())
    );

    const handleSelectCity = (city: string) => {
        dispatch(setSelectedCity(city));
        setSearchCity("");
        setShowCityList(false);
    };


    const now = new Date();

    const currentHour =
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}T${String(now.getHours()).padStart(2, "0")}`;

    const hourlyForecast = weatherData?.hourly.time
        .map((time, index) => ({
            time,
            temperature: weatherData.hourly.temperature_2m[index],
            rain: weatherData.hourly.precipitation_probability[index]
        }))
        .filter((item) => item.time >= currentHour)
        .slice(0, 8) ?? [];


    const dailyForecast = weatherData?.daily.time.map((date, index) => ({
        date,
        weatherCode: weatherData.daily.weather_code[index],
        maxTemperature: weatherData.daily.temperature_2m_max[index],
        minTemperature: weatherData.daily.temperature_2m_min[index],
        rain: weatherData.daily.precipitation_probability_max[index]
    })) ?? [];

    return (
        <div className="weather-page">
            <div className="weather-container">

                <div className="weather-heading">
                    <div className="fashion-breadcrumb">
                        <Link to="/">Trang chủ</Link>
                        <span>›</span>
                        <strong>DỰ BÁO THỜI TIẾT</strong>
                    </div>

                    <div className="fashion-heading">
                        <h1>Dự báo thời tiết</h1>
                    </div>
                </div>

                <div className="weather-top">
                    <div>
                        <h2>Thời tiết các tỉnh thành</h2>
                        <p>
                            Cập nhật tình hình thời tiết và dự báo trong những ngày tới
                        </p>
                    </div>

                    <div className="weather-city-select">
                        <button
                            type="button"
                            className="weather-city-button"
                            onClick={() => setShowCityList(!showCityList)}
                        >
                            <span>📍 {selectedCity}</span>
                            <span>{showCityList ? "▲" : "▼"}</span>
                        </button>

                        {showCityList && (
                            <div className="weather-city-dropdown">
                                <input
                                    type="text"
                                    placeholder="Tìm tỉnh, thành phố..."
                                    value={searchCity}
                                    onChange={(event) =>
                                        setSearchCity(event.target.value)
                                    }
                                />

                                <div className="weather-city-list">
                                    {filteredCities.length > 0 ? (
                                        filteredCities.map((city) => (
                                            <button
                                                type="button"
                                                key={city}
                                                className={
                                                    selectedCity === city
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    handleSelectCity(city)
                                                }
                                            >
                                                {city}
                                            </button>
                                        ))
                                    ) : (
                                        <p>Không tìm thấy thành phố.</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {loading && (
                    <div className="weather-message">
                        <div className="weather-loading"></div>
                        <p>Đang cập nhật dữ liệu thời tiết...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className="weather-error">
                        <p>{error}</p>
                        <button
                            type="button"
                            onClick={() =>
                                dispatch(fetchWeather(selectedCity))
                            }
                        >
                            Thử tải lại
                        </button>
                    </div>
                )}

                {!loading && !error && weatherData && (
                    <>
                        <section className="weather-current">
                            <div className="weather-current-main">
                                <div className="weather-current-info">
                                    <span className="weather-label">
                                        THỜI TIẾT HIỆN TẠI
                                    </span>

                                    <h2>{selectedCity}</h2>

                                    <div className="weather-temperature">
                                        {Math.round(
                                            weatherData.current.temperature_2m
                                        )}
                                        <span>°C</span>
                                    </div>

                                    <p className="weather-description">
                                        {getWeatherDescription(
                                            weatherData.current.weather_code
                                        )}
                                    </p>
                                </div>

                                <div className="weather-current-icon">
                                    {getWeatherIcon(
                                        weatherData.current.weather_code
                                    )}
                                </div>
                            </div>

                            <div className="weather-current-details">
                                <div className="weather-detail-item">
                                    <span className="weather-detail-icon">🌡️</span>
                                    <div>
                                        <p>Cảm giác như</p>
                                        <strong>
                                            {Math.round(
                                                weatherData.current.apparent_temperature
                                            )}°C
                                        </strong>
                                    </div>
                                </div>

                                <div className="weather-detail-item">
                                    <span className="weather-detail-icon">💧</span>
                                    <div>
                                        <p>Độ ẩm</p>
                                        <strong>
                                            {weatherData.current.relative_humidity_2m}%
                                        </strong>
                                    </div>
                                </div>

                                <div className="weather-detail-item">
                                    <span className="weather-detail-icon">💨</span>
                                    <div>
                                        <p>Tốc độ gió</p>
                                        <strong>
                                            {weatherData.current.wind_speed_10m} km/h
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="weather-section">
                            <div className="weather-section-heading">
                                <div>
                                    <h2>Dự báo thời tiết theo giờ</h2>
                                    <p>
                                        Tình hình thời tiết trong những giờ tiếp theo
                                    </p>
                                </div>
                            </div>

                            <div className="weather-hourly-list">
                                {hourlyForecast.length > 0 ? (
                                    hourlyForecast.map((item) => (
                                        <div
                                            className="weather-hourly-item"
                                            key={item.time}
                                        >
                                            <p>{formatHour(item.time)}</p>
                                            <span>
                                                {getWeatherIcon(
                                                    weatherData.current.weather_code
                                                )}
                                            </span>
                                            <strong>
                                                {Math.round(item.temperature)}°
                                            </strong>
                                            <small>
                                                💧 {item.rain ?? 0}%
                                            </small>
                                        </div>
                                    ))
                                ) : (
                                    <p className="weather-empty">
                                        Chưa có dữ liệu dự báo theo giờ.
                                    </p>
                                )}
                            </div>
                        </section>

                        <section className="weather-section">
                            <div className="weather-section-heading">
                                <div>
                                    <h2>Dự báo thời tiết 7 ngày tới</h2>
                                    <p>
                                        Theo dõi nhiệt độ và khả năng mưa trong tuần
                                    </p>
                                </div>
                            </div>

                            <div className="weather-week-list">
                                {dailyForecast.map((item) => (
                                    <div
                                        className="weather-week-item"
                                        key={item.date}
                                    >
                                        <div className="weather-week-day">
                                            <strong>
                                                {formatDate(item.date)}
                                            </strong>
                                        </div>

                                        <div className="weather-week-condition">
                                            <span>
                                                {getWeatherIcon(item.weatherCode)}
                                            </span>
                                            <p>
                                                {getWeatherDescription(
                                                    item.weatherCode
                                                )}
                                            </p>
                                        </div>

                                        <div className="weather-week-temperature">
                                            <strong>
                                                {Math.round(item.maxTemperature)}°
                                            </strong>
                                            <span>
                                                {Math.round(item.minTemperature)}°
                                            </span>
                                        </div>

                                        <div className="weather-week-rain">
                                            💧 {item.rain ?? 0}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {!loading && !error && !weatherData && (
                    <div className="weather-message">
                        Chưa có dữ liệu thời tiết.
                    </div>
                )}

                <div className="weather-source">
                    Nguồn dữ liệu: Open-Meteo
                </div>
            </div>
        </div>
    );
}

export default WeatherPage;
