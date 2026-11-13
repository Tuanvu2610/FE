import {useState} from "react";
import {Link} from "react-router-dom";

const DAYS_OF_WEEK = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

const CalendarPage = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date>(today);

    // Lấy số ngày trong tháng
    const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

    // Lấy thứ của ngày mùng 1 (chuyển Chủ nhật = 0 thành 6 để Thứ 2 đứng đầu tuần)
    const getFirstDayOfMonth = (year: number, month: number) => {
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1;
    };

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

    // Tính ngày Âm lịch bằng API có sẵn của trình duyệt (hỗ trợ chuẩn tiếng Việt)
    const getLunarDateText = (date: Date) => {
        try {
            const formatter = new Intl.DateTimeFormat("vi-VN-u-ca-chinese", {
                day: "numeric",
                month: "numeric",
            });
            return formatter.format(date);
        } catch {
            return "";
        }
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

    // Tạo mảng các ô trong lưới lịch
    const calendarCells: (number | null)[] = [
        ...Array(firstDayIndex).fill(null),
        ...Array.from({length: daysInMonth}, (_, i) => i + 1),
    ];

    const isSameDay = (d1: Date, d2: Date) =>
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();

    return (
        <div style={{maxWidth: "1050px", margin: "24px auto", padding: "0 16px", fontFamily: "Arial, sans-serif"}}>
            {/* Breadcrumb */}
            <div style={{marginBottom: "16px", fontSize: "14px", color: "#666"}}>
                <Link to="/" style={{color: "#78b43d", textDecoration: "none"}}>Trang chủ</Link>
                <span> › </span>
                <strong>Lịch Vạn Niên</strong>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "320px 1fr", gap: "24px", alignItems: "start"}}>
                {/* CỘT TRÁI: TỜ LỊCH CHI TIẾT NGÀY ĐANG CHỌN */}
                <div style={{
                    border: "2px solid #78b43d",
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
                }}>
                    <div style={{
                        backgroundColor: "#78b43d",
                        color: "#fff",
                        padding: "12px",
                        fontWeight: "bold",
                        fontSize: "18px"
                    }}>
                        THÁNG {selectedDate.getMonth() + 1} - NĂM {selectedDate.getFullYear()}
                    </div>

                    <div style={{padding: "28px 16px"}}>
                        <div style={{fontSize: "16px", color: "#555", marginBottom: "8px"}}>Dương lịch</div>
                        <div style={{
                            fontSize: "84px",
                            fontWeight: "bold",
                            lineHeight: "1",
                            color: selectedDate.getDay() === 0 ? "#d93025" : "#518f02"
                        }}>
                            {selectedDate.getDate()}
                        </div>
                        <div style={{fontSize: "18px", fontWeight: "bold", marginTop: "12px", color: "#333"}}>
                            {selectedDate.getDay() === 0 ? "Chủ Nhật" : `Thứ ${selectedDate.getDay() + 1}`}
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: "#f4f9ee",
                        borderTop: "1px solid #dcedc8",
                        padding: "16px",
                        color: "#333"
                    }}>
                        <div style={{fontSize: "13px", color: "#666"}}>Âm lịch (Ngày / Tháng)</div>
                        <div style={{fontSize: "20px", fontWeight: "bold", color: "#518f02", marginTop: "4px"}}>
                            Ngày {getLunarDateText(selectedDate)}
                        </div>
                    </div>
                </div>

                {/* CỘT PHẢI: BẢNG LỊCH THÁNG */}
                <div style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    padding: "20px",
                    backgroundColor: "#fff"
                }}>
                    {/* Thanh điều hướng tháng */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "16px"
                    }}>
                        <button onClick={handlePrevMonth} style={navBtnStyle}>‹ Tháng trước</button>
                        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                            <h2 style={{margin: 0, fontSize: "20px", color: "#518f02"}}>
                                Tháng {currentMonth + 1} / {currentYear}
                            </h2>
                            <button onClick={handleToday}
                                    style={{...navBtnStyle, backgroundColor: "#78b43d", color: "#fff", border: "none"}}>
                                Hôm nay
                            </button>
                        </div>
                        <button onClick={handleNextMonth} style={navBtnStyle}>Tháng sau ›</button>
                    </div>

                    {/* Tiêu đề các thứ trong tuần */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "8px"
                    }}>
                        {DAYS_OF_WEEK.map((day, idx) => (
                            <div key={day} style={{
                                padding: "10px 0",
                                backgroundColor: "#f5f5f5",
                                color: idx === 6 ? "#d93025" : "#333",
                                borderBottom: "2px solid #78b43d"
                            }}>
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Lưới các ngày trong tháng */}
                    <div style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px"}}>
                        {calendarCells.map((day, index) => {
                            if (!day) return <div key={`empty-${index}`} style={{height: "64px"}}/>;

                            const cellDate = new Date(currentYear, currentMonth, day);
                            const isToday = isSameDay(cellDate, today);
                            const isSelected = isSameDay(cellDate, selectedDate);
                            const isSunday = cellDate.getDay() === 0;

                            return (
                                <div
                                    key={day}
                                    onClick={() => setSelectedDate(cellDate)}
                                    style={{
                                        height: "64px",
                                        border: isSelected ? "2px solid #78b43d" : "1px solid #eee",
                                        backgroundColor: isToday ? "#e8f5e9" : isSelected ? "#f9fbe7" : "#fff",
                                        borderRadius: "6px",
                                        padding: "6px",
                                        cursor: "pointer",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        transition: "0.2s"
                                    }}
                                >
                                    <span style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: isSunday ? "#d93025" : "#222"
                                    }}>
                                        {day}
                                    </span>
                                    <span style={{fontSize: "11px", color: "#777", textAlign: "right"}}>
                                        {getLunarDateText(cellDate)}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const navBtnStyle: React.CSSProperties = {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "13px"
};

export default CalendarPage;