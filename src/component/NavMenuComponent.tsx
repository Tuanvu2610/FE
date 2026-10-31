import { useEffect } from "react";
import type {RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../store/slice/MenuItems.ts";
import "../styles/NavMenu.css"
export interface MenuItem {
    id: number;
    name: string;
    idParent: number | null;
}
const listMenuItem = [
    //     {
    //         id: 1,
    //         name: 'TIN TỨC',
    //         idParent: null,
    //     },
    //     {
    //         id: 2,
    //         name: 'NGOẠI HẠNG ANH',
    //         idParent: null,
    //     },
    //     {
    //         id: 3,
    //         name: 'BÓNG ĐÁ',
    //         idParent: null,
    //     },
    //     {
    //         id: 4,
    //         name: 'KINH DOANH',
    //         idParent: null,
    //     },
    //     {
    //         id: 5,
    //         name: 'GIẢI TRÍ',
    //         idParent: null,
    //     },
    //     {
    //         id: 6,
    //         name: '24H THÍCH BÓNG ĐÁ - THỂ THAO ',
    //         idParent: null,
    //     },
    //     {
    //         id: 7,
    //         name: 'SỨC KHỎE',
    //         idParent: null,
    //     },
    //     {
    //         id: 8,
    //         name: 'HI-TECH',
    //         idParent: null,
    //     },
    //     {
    //         id: 9,
    //         name: 'THẾ GIỚI',
    //         idParent: null,
    //     },
    //     {
    //         id: 10,
    //         name: 'THỂ THAO',
    //         idParent: null,
    //     },
    //     {
    //         id: 11,
    //         name: 'Ô TÔ',
    //         idParent: null,
    //     }
    // ];
    // TIN TỨC
    { id: 1, name: "TIN TỨC", idParent: null },
    { id: 2, name: "Chính trị - Xã hội", idParent: 1 },
    { id: 3, name: "Tra cứu phường xã", idParent: 1 },
    { id: 4, name: "Đời sống - Dân sinh", idParent: 1 },
    { id: 5, name: "Giao thông - Đô thị", idParent: 1 },
    { id: 6, name: "Nóng trên mạng", idParent: 1 },
    { id: 7, name: "Dự báo thời tiết", idParent: 1 },
    { id: 8, name: "Lịch vạn niên", idParent: 1 },
    // NGOẠI HẠNG ANH
    { id: 116, name: "NGOẠI HẠNG ANH", idParent: null },
    // BÓNG ĐÁ
    { id: 9, name: "BÓNG ĐÁ", idParent: null },
    { id: 10, name: "Ngoại hạng Anh", idParent: 9 },
    { id: 11, name: "Lịch thi đấu", idParent: 9 },
    { id: 12, name: "Trận cầu đỉnh", idParent: 9 },
    { id: 13, name: "C1 - Champions League", idParent: 9 },
    { id: 14, name: "Lịch hôm nay", idParent: 9 },
    { id: 15, name: "Đội bóng nổi bật", idParent: 9 },
    { id: 16, name: "Bóng đá Tây Ban Nha", idParent: 9 },
    { id: 17, name: "Video highlight", idParent: 9 },
    { id: 18, name: "Bài đặc biệt", idParent: 9 },
    { id: 19, name: "Bóng đá Việt Nam", idParent: 9 },
    { id: 20, name: "Bảng xếp hạng", idParent: 9 },
    { id: 21, name: "Tin bên lề bóng đá", idParent: 9 },
    { id: 22, name: "V-League - FPT Play", idParent: 9 },
    { id: 23, name: "Tường thuật trực tiếp", idParent: 9 },
    { id: 24, name: "Tin chuyển nhượng", idParent: 9 },
    { id: 25, name: "Bóng đá Pháp - Ligue 1", idParent: 9 },
    { id: 26, name: "Kết quả bóng đá", idParent: 9 },
    { id: 27, name: "Ngôi sao bóng đá", idParent: 9 },
    { id: 28, name: "FA Cup", idParent: 9 },
    { id: 29, name: "Clip 1 phút Bóng đá", idParent: 9 },
    { id: 30, name: "Ảnh bóng đá - người đẹp", idParent: 9 },
    { id: 31, name: "Bóng đá Ý", idParent: 9 },
    { id: 32, name: "Livescore", idParent: 9 },
    { id: 33, name: "Clip tin nóng bóng đá", idParent: 9 },
    { id: 34, name: "Bóng đá Đức - Bundesliga", idParent: 9 },
    { id: 35, name: "Lịch bóng đá TV", idParent: 9 },
    { id: 36, name: "Điểm tin bóng đá", idParent: 9 },
    { id: 37, name: "Các giải bóng đá khác", idParent: 9 },
    { id: 38, name: "Top ghi bàn", idParent: 9 },
    { id: 39, name: "Góc nhìn - Bình luận", idParent: 9 },

    // KINH DOANH
    { id: 40, name: "KINH DOANH", idParent: null },
    { id: 41, name: "Kinh tế thế giới", idParent: 40 },
    { id: 42, name: "Bất động sản", idParent: 40 },
    { id: 43, name: "Doanh nhân", idParent: 40 },
    { id: 44, name: "Doanh nghiệp", idParent: 40 },
    { id: 45, name: "Nhà đẹp - Phong thủy", idParent: 40 },
    { id: 46, name: "Ngân hàng", idParent: 40 },
    { id: 47, name: "Tiền tiền tiền", idParent: 40 },
    { id: 48, name: "Kinh tế thể thao", idParent: 40 },
    { id: 49, name: "Tỷ giá", idParent: 40 },
    { id: 50, name: "Giá vàng", idParent: 40 },
    { id: 51, name: "Chứng khoán", idParent: 40 },

    // GIẢI TRÍ
    { id: 52, name: "GIẢI TRÍ", idParent: null },
    { id: 53, name: "Đời sống Showbiz", idParent: 52 },
    { id: 54, name: "Sao Việt", idParent: 52 },
    { id: 55, name: "Tin tức giải trí", idParent: 52 },
    { id: 56, name: "Nhạc", idParent: 52 },
    { id: 57, name: "Phim", idParent: 52 },
    { id: 58, name: "TV Show", idParent: 52 },
    { id: 59, name: "Đàn ông", idParent: 52 },
    { id: 60, name: "Sao Châu Á", idParent: 52 },

    // 24H THÍCH BÓNG ĐÁ - THỂ THAO
    { id: 61, name: "24H THÍCH BÓNG ĐÁ - THỂ THAO", idParent: null },

    // SỨC KHỎE
    { id: 62, name: "SỨC KHỎE", idParent: null },
    { id: 63, name: "Bệnh đàn ông", idParent: 62 },
    { id: 64, name: "Bệnh phụ nữ", idParent: 62 },
    { id: 65, name: "Sức khỏe dinh dưỡng", idParent: 62 },
    { id: 66, name: "Tin tức sức khỏe", idParent: 62 },
    { id: 67, name: "Sức khỏe tình dục", idParent: 62 },
    { id: 68, name: "Phát minh y học", idParent: 62 },
    { id: 69, name: "Ung thư", idParent: 62 },
    { id: 70, name: "Tra cứu các loại bệnh", idParent: 62 },

    // HI-TECH
    { id: 71, name: "HI-TECH", idParent: null },
    { id: 72, name: "Điện thoại", idParent: 71 },
    { id: 73, name: "Đánh giá", idParent: 71 },
    { id: 74, name: "Laptop", idParent: 71 },
    { id: 75, name: "Tin công nghệ", idParent: 71 },
    { id: 76, name: "Điện tử gia dụng", idParent: 71 },
    { id: 77, name: "Máy tính bảng", idParent: 71 },
    { id: 78, name: "Bảng giá", idParent: 71 },
    { id: 79, name: "iPhone 18", idParent: 71 },
    { id: 80, name: "Máy ảnh và camera", idParent: 71 },
    { id: 81, name: "Phụ kiện Hi-tech", idParent: 71 },
    { id: 82, name: "Tra cứu sản phẩm công nghệ", idParent: 71 },
    { id: 83, name: "Máy tính để bàn", idParent: 71 },
    { id: 84, name: "Thế giới công nghệ", idParent: 71 },

    // THẾ GIỚI
    { id: 85, name: "THẾ GIỚI", idParent: null },
    { id: 86, name: "Điểm nóng", idParent: 85 },
    { id: 87, name: "Quân sự", idParent: 85 },
    { id: 88, name: "Theo dòng lịch sử", idParent: 85 },
    { id: 89, name: "Cung đình Trung Hoa", idParent: 85 },
    { id: 90, name: "Dã kỳ", idParent: 85 },

    // THỂ THAO
    { id: 91, name: "THỂ THAO", idParent: null },
    { id: 92, name: "Tennis", idParent: 91 },
    { id: 93, name: "Pickleball", idParent: 91 },
    { id: 94, name: "Billiards", idParent: 91 },
    { id: 95, name: "Bóng chuyền", idParent: 91 },
    { id: 96, name: "Chạy bộ - Marathon", idParent: 91 },
    { id: 97, name: "Lịch thi đấu thể thao", idParent: 91 },
    { id: 98, name: "Người đẹp thể thao", idParent: 91 },
    { id: 99, name: "Võ thuật", idParent: 91 },
    { id: 100, name: "Môn thể thao khác", idParent: 91 },
    { id: 101, name: "Bảng xếp hạng Thể thao", idParent: 91 },
    { id: 102, name: "Tin tức thể thao", idParent: 91 },
    { id: 103, name: "Hậu trường bên lề", idParent: 91 },

    // Ô TÔ
    { id: 104, name: "Ô TÔ", idParent: null },
    { id: 105, name: "Tin tức", idParent: 104 },
    { id: 106, name: "Bảng giá xe ô tô", idParent: 104 },
    { id: 107, name: "Tư vấn", idParent: 104 },
    { id: 108, name: "Ngắm xe", idParent: 104 },
    { id: 109, name: "Xe xanh", idParent: 104 },
    { id: 110, name: "Tra cứu ô tô", idParent: 104 },
    { id: 111, name: "Đánh giá xe", idParent: 104 },
    { id: 112, name: "Luật giao thông", idParent: 104 },
    { id: 113, name: "Góc nhìn", idParent: 104 },
    { id: 114, name: "Top doanh số", idParent: 104 },
    { id: 115, name: "Clip giao thông", idParent: 104 },
];

const NavMenuComponent = () => {
    const listMenu = useSelector((state: RootState) => state.menuItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load(listMenuItem))
    }, [dispatch])

    return (
        <>
            <div className="nav-menu">
               <div className="cover-menu">
                   <i className="fa-solid fa-bars"></i>
                   <div className="line"></div>
                   <i className="fa-solid fa-house"></i>
                    {
                        listMenu.filter((item) => item.idParent === null).map((menuItem: MenuItem) => (
                            <li className="item-menu" key={menuItem.id}>
                                {menuItem.name}
                                {listMenu.filter((item) => item.idParent === menuItem.id).length > 0 &&
                                    <div className="sub-menu">
                                        <ul className="cover-sub-menu">
                                            {
                                                listMenu.filter((item) => item.idParent === menuItem.id).map((item: MenuItem) => (
                                                <li>{item.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                }
                            </li>
                        ))
                    }
               </div>
            </div>
        </>
    )
}
export default NavMenuComponent;