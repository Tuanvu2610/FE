import {getLunarDate, jdFromDate} from "./lunar";

const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const GIO = ["23h-1h", "1h-3h", "3h-5h", "5h-7h", "7h-9h", "9h-11h", "11h-13h", "13h-15h", "15h-17h", "17h-19h", "19h-21h", "21h-23h"];

const dayChi = (dd: number, mm: number, yy: number) => (jdFromDate(dd, mm, yy) + 1) % 12;

// Ngày hoàng đạo: tính theo chi của ngày và tháng âm
export function isHoangDao(dd: number, mm: number, yy: number): boolean {
    const lunar = getLunarDate(dd, mm, yy);
    const start = (2 * ((lunar.month - 1) % 6)) % 12;
    const chi = dayChi(dd, mm, yy);
    return [0, 1, 4, 5, 7, 10].some((offset) => (start + offset) % 12 === chi);
}

// Giờ hoàng đạo: tính theo chi của ngày, ví dụ "Dần (3h-5h)"
const GIO_HOANG_DAO: number[][] = [
    [0, 1, 3, 6, 8, 9],     // ngày Tý, Ngọ
    [2, 3, 5, 8, 10, 11],   // ngày Sửu, Mùi
    [0, 1, 4, 5, 7, 10],    // ngày Dần, Thân
    [0, 2, 3, 6, 7, 9],     // ngày Mão, Dậu
    [2, 4, 5, 8, 9, 11],    // ngày Thìn, Tuất
    [1, 4, 6, 7, 10, 11],   // ngày Tỵ, Hợi
];

export function getGioHoangDao(dd: number, mm: number, yy: number): string {
    const group = dayChi(dd, mm, yy) % 6;
    return GIO_HOANG_DAO[group].map((i) => `${CHI[i]} (${GIO[i]})`).join(", ");
}

// Mệnh ngày (nạp âm), 30 cặp theo vòng Hoa Giáp
const NAP_AM = [
    "Hải trung kim", "Lô trung hỏa", "Đại lâm mộc", "Lộ bàng thổ", "Kiếm phong kim",
    "Sơn đầu hỏa", "Giản hạ thủy", "Thành đầu thổ", "Bạch lạp kim", "Dương liễu mộc",
    "Tuyền trung thủy", "Ốc thượng thổ", "Tích lịch hỏa", "Tùng bách mộc", "Trường lưu thủy",
    "Sa trung kim", "Sơn hạ hỏa", "Bình địa mộc", "Bích thượng thổ", "Kim bạch kim",
    "Phú đăng hỏa", "Thiên hà thủy", "Đại trạch thổ", "Thoa xuyến kim", "Tang đố mộc",
    "Đại khê thủy", "Sa trung thổ", "Thiên thượng hỏa", "Thạch lựu mộc", "Đại hải thủy",
];

export const getNapAm = (dd: number, mm: number, yy: number) =>
    NAP_AM[Math.floor(((jdFromDate(dd, mm, yy) + 49) % 60) / 2)];

// Ngày lễ: dương lịch và âm lịch
const SOLAR_HOLIDAYS: Record<string, string> = {
    "1/1": "Tết Dương lịch",
    "14/2": "Lễ tình nhân",
    "8/3": "Quốc tế Phụ nữ",
    "30/4": "Giải phóng miền Nam",
    "1/5": "Quốc tế Lao động",
    "1/6": "Quốc tế Thiếu nhi",
    "2/9": "Quốc khánh",
    "20/10": "Ngày Phụ nữ Việt Nam",
    "9/11": "Ngày Pháp luật Việt Nam",
    "20/11": "Ngày Nhà giáo Việt Nam",
    "23/11": "Ngày thành lập Hội Chữ thập đỏ VN",
    "22/12": "Ngày thành lập QĐND Việt Nam",
    "24/12": "Đêm Giáng sinh",
    "25/12": "Lễ Giáng sinh",
};

const LUNAR_HOLIDAYS: Record<string, string> = {
    "1/1": "Tết Nguyên Đán",
    "15/1": "Rằm tháng Giêng",
    "10/3": "Giỗ Tổ Hùng Vương",
    "15/4": "Lễ Phật Đản",
    "5/5": "Tết Đoan Ngọ",
    "15/7": "Lễ Vu Lan",
    "15/8": "Tết Trung thu",
    "10/10": "Tết Thường Tân",
    "23/12": "Ông Táo chầu trời",
};

export function getHolidays(dd: number, mm: number, yy: number): string[] {
    const result: string[] = [];
    const solar = SOLAR_HOLIDAYS[`${dd}/${mm}`];
    if (solar) result.push(solar);

    const lunar = getLunarDate(dd, mm, yy);
    const lunarHoliday = !lunar.leap && LUNAR_HOLIDAYS[`${lunar.day}/${lunar.month}`];
    if (lunarHoliday) result.push(lunarHoliday);

    return result;
}