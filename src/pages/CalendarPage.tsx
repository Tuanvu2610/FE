import {useState} from "react";
import {Link} from "react-router-dom";
import LichNews from "../component/LichNews";
import LichSidebar from "../component/LichSidebar";
import DayPanel from "../component/DayPanel";
import MonthGrid from "../component/MonthGrid";
import InfoLinks from "../component/InfoLinks";
import "../styles/CalendarPage.css";

const CalendarPage = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date>(today);

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleToday = () => {
        const now = new Date();
        setCurrentMonth(now.getMonth());
        setCurrentYear(now.getFullYear());
        setSelectedDate(now);
    };

    // Chọn một ngày (kể cả ngày của tháng trước/sau) thì lịch nhảy sang tháng đó
    const handleSelect = (date: Date) => {
        setSelectedDate(date);
        setCurrentMonth(date.getMonth());
        setCurrentYear(date.getFullYear());
    };

    const moveDay = (delta: number) => {
        handleSelect(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + delta));
    };

    return (
        <div className="calpage">
            <div className="calpage__breadcrumb">
                <Link to="/">Trang chủ</Link>
                <span> › </span>
                <strong>Lịch Vạn Niên</strong>
            </div>

            <div className="calpage__layout">
                <div>
                    <DayPanel
                        date={selectedDate}
                        onPrev={() => moveDay(-1)}
                        onNext={() => moveDay(1)}
                    />

                    <MonthGrid
                        year={currentYear}
                        month={currentMonth}
                        selected={selectedDate}
                        today={today}
                        onSelect={handleSelect}
                        onPrevMonth={handlePrevMonth}
                        onNextMonth={handleNextMonth}
                        onGoTo={(m, y) => {
                            setCurrentMonth(m);
                            setCurrentYear(y);
                        }}
                        onToday={handleToday}
                    />

                    <InfoLinks/>
                    <LichNews/>
                </div>

                <LichSidebar/>
            </div>
        </div>
    );
};

export default CalendarPage;