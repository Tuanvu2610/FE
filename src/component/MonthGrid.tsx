import {useMemo, useState} from "react";
import {getLunarDate, getCanChiDay} from "../utils/lunar";
import {isHoangDao, getHolidays} from "../utils/lunarExtra";
import "../styles/MonthGrid.css";

const WEEKDAYS = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"];
const YEARS = Array.from({length: 201}, (_, i) => 1900 + i);

interface MonthGridProps {
    year: number;
    month: number; // 0-11
    selected: Date;
    today: Date;
    onSelect: (date: Date) => void;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onGoTo: (month: number, year: number) => void;
    onToday: () => void;
}

const sameDay = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

function MonthGrid({
                       year, month, selected, today,
                       onSelect, onPrevMonth, onNextMonth, onGoTo, onToday,
                   }: MonthGridProps) {
    // Giá trị đang chọn trong 2 ô select, chỉ áp dụng khi bấm XEM
    const [draft, setDraft] = useState<{ month: number; year: number } | null>(null);
    const pickMonth = draft?.month ?? month;
    const pickYear = draft?.year ?? year;

    const cells = useMemo(() => {
        const offset = (new Date(year, month, 1).getDay() + 6) % 7; // Thứ 2 đứng đầu tuần
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const total = Math.ceil((offset + daysInMonth) / 7) * 7;

        return Array.from({length: total}, (_, i) => {
            const date = new Date(year, month, 1 - offset + i);
            const dd = date.getDate();
            const mm = date.getMonth() + 1;
            const yy = date.getFullYear();
            const lunar = getLunarDate(dd, mm, yy);
            const firstOfLunar = lunar.day === 1;

            return {
                date,
                inMonth: date.getMonth() === month,
                lunarLabel: firstOfLunar || dd === 1 ? `${lunar.day}/${lunar.month}` : String(lunar.day),
                firstOfLunar,
                canChi: getCanChiDay(dd, mm, yy),
                hoangDao: isHoangDao(dd, mm, yy),
                holiday: getHolidays(dd, mm, yy).join(", "),
            };
        });
    }, [year, month]);

    const goPrev = () => {
        setDraft(null);
        onPrevMonth();
    };
    const goNext = () => {
        setDraft(null);
        onNextMonth();
    };

    return (
        <section className="monthgrid">
            <div className="monthgrid__bar">
                <div className="monthgrid__nav">
                    <button className="monthgrid__arrow" onClick={goPrev} aria-label="Tháng trước">‹</button>
                    <span>THÁNG {month + 1} - {year}</span>
                    <button className="monthgrid__arrow" onClick={goNext} aria-label="Tháng sau">›</button>
                </div>

                <div className="monthgrid__picker">
                    <select
                        value={pickMonth}
                        onChange={(e) => setDraft({month: Number(e.target.value), year: pickYear})}
                    >
                        {Array.from({length: 12}, (_, i) => (
                            <option key={i} value={i}>Tháng {i + 1}</option>
                        ))}
                    </select>
                    <select
                        value={pickYear}
                        onChange={(e) => setDraft({month: pickMonth, year: Number(e.target.value)})}
                    >
                        {YEARS.map((y) => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                    <button
                        className="monthgrid__go"
                        onClick={() => {
                            onGoTo(pickMonth, pickYear);
                            setDraft(null);
                        }}
                    >
                        XEM
                    </button>
                    <button className="monthgrid__go monthgrid__go--light" onClick={() => {
                        setDraft(null);
                        onToday();
                    }}>
                        Hôm nay
                    </button>
                </div>
            </div>

            <div className="monthgrid__weekdays">
                {WEEKDAYS.map((w, i) => (
                    <div key={w} className={i === 6 ? "monthgrid__sun" : ""}>{w}</div>
                ))}
            </div>

            <div className="monthgrid__cells">
                {cells.map((c) => {
                    const isSunday = c.date.getDay() === 0;
                    const classes = [
                        "monthgrid__cell",
                        !c.inMonth && "monthgrid__cell--out",
                        sameDay(c.date, today) && "monthgrid__cell--today",
                        sameDay(c.date, selected) && "monthgrid__cell--selected",
                    ].filter(Boolean).join(" ");

                    return (
                        <div key={c.date.toISOString()} className={classes} onClick={() => onSelect(c.date)}>
                            <div className="monthgrid__top">
                                <span
                                    className={`monthgrid__solar${isSunday || c.holiday ? " monthgrid__solar--red" : ""}`}>
                                    {c.date.getDate()}
                                    <i className={`monthgrid__dot ${c.hoangDao ? "monthgrid__dot--good" : "monthgrid__dot--bad"}`}/>
                                </span>
                                <span className={`monthgrid__lunar${c.firstOfLunar ? " monthgrid__lunar--first" : ""}`}>
                                    {c.lunarLabel}
                                </span>
                            </div>
                            {c.holiday && <div className="monthgrid__holiday" title={c.holiday}>{c.holiday}</div>}
                            <div className="monthgrid__canchi">{c.canChi}</div>
                        </div>
                    );
                })}
            </div>

            <div className="monthgrid__legend">
                <span><i className="monthgrid__dot monthgrid__dot--good"/> Ngày hoàng đạo</span>
                <span><i className="monthgrid__dot monthgrid__dot--bad"/> Ngày hắc đạo</span>
            </div>
        </section>
    );
}

export default MonthGrid;