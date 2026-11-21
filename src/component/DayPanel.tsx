import {getLunarDate, getCanChiYear, getCanChiMonth, getCanChiDay} from "../utils/lunar";
import {getGioHoangDao, getNapAm, getHolidays} from "../utils/lunarExtra";
import "../styles/DayPanel.css";

interface DayPanelProps {
    date: Date;
    onPrev: () => void;
    onNext: () => void;
}

function DayPanel({date, onPrev, onNext}: DayPanelProps) {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear();

    const lunar = getLunarDate(dd, mm, yy);
    const holidays = getHolidays(dd, mm, yy);

    return (
        <section className="daypanel">
            <div className="daypanel__header">LỊCH VẠN NIÊN</div>

            <div className="daypanel__body">
                <button
                    className="daypanel__arrow daypanel__arrow--left"
                    onClick={onPrev}
                    aria-label="Ngày trước"
                >
                    ‹
                </button>

                <div className="daypanel__col">
                    <div className="daypanel__label">Dương Lịch</div>
                    <div className={`daypanel__big${date.getDay() === 0 ? " daypanel__big--sun" : ""}`}>
                        {dd}
                    </div>
                    <div className="daypanel__sub">Tháng {mm} năm {yy}</div>
                    <div className="daypanel__red">{holidays.join(" - ")}</div>
                </div>

                <div className="daypanel__col daypanel__col--lunar">
                    <div className="daypanel__label">Âm lịch</div>
                    <div className="daypanel__big">{lunar.day}</div>
                    <div className="daypanel__sub">
                        Tháng {lunar.month}{lunar.leap ? " (nhuận)" : ""} năm {getCanChiYear(lunar.year)}
                    </div>
                    <div className="daypanel__red">
                        Ngày {getCanChiDay(dd, mm, yy)} - Tháng {getCanChiMonth(lunar.month, lunar.year)}
                    </div>
                </div>

                <button
                    className="daypanel__arrow daypanel__arrow--right"
                    onClick={onNext}
                    aria-label="Ngày sau"
                >
                    ›
                </button>
            </div>

            <div className="daypanel__info">
                <div><strong>Mệnh ngày:</strong> {getNapAm(dd, mm, yy)}</div>
                <div><strong>Giờ hoàng đạo:</strong> {getGioHoangDao(dd, mm, yy)}</div>
            </div>
        </section>
    );
}

export default DayPanel;