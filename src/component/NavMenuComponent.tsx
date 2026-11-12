import { useEffect } from "react";
import type { RootState } from "../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { load } from "../store/slice/MenuItems.ts";
import "../styles/NavMenu.css";

export interface MenuItem {
    id: number;
    name: string;
    idParent: number | null;
}

const listMenuItem: MenuItem[] = [
    // TIN TỨC
    { id: 1, name: "TIN TỨC", idParent: null },
    { id: 2, name: "Tin tức trong ngày", idParent: 1 },
    { id: 3, name: "An ninh - Hình sự", idParent: 1 },
    { id: 4, name: "Phi thường - kỳ quặc", idParent: 1 },

    // BÓNG ĐÁ
    { id: 5, name: "BÓNG ĐÁ", idParent: null },
    { id: 6, name: "Bóng đá", idParent: 5 },
    { id: 7, name: "Asian Cup", idParent: 5 },

    // THỂ THAO
    { id: 8, name: "THỂ THAO", idParent: null },
    { id: 9, name: "Thể thao", idParent: 8 },

    // KINH DOANH
    { id: 10, name: "KINH DOANH", idParent: null },
    { id: 11, name: "Tài chính – Bất động sản", idParent: 10 },
    { id: 12, name: "Thị trường - Tiêu dùng", idParent: 10 },

    // GIẢI TRÍ
    { id: 13, name: "GIẢI TRÍ", idParent: null },
    { id: 14, name: "Phim", idParent: 13 },
    { id: 15, name: "Ca nhạc - MTV", idParent: 13 },
    { id: 16, name: "Bạn trẻ - Cuộc sống", idParent: 13 },

    // ĐỜI SỐNG
    { id: 17, name: "ĐỜI SỐNG", idParent: null },
    { id: 18, name: "Sức khỏe đời sống", idParent: 17 },
    { id: 19, name: "Ẩm thực", idParent: 17 },
    { id: 20, name: "Làm đẹp", idParent: 17 },
    { id: 21, name: "Cười 24h", idParent: 17 },

    // THỜI TRANG
    { id: 22, name: "THỜI TRANG", idParent: null },
    { id: 23, name: "Thời trang", idParent: 22 },
    { id: 24, name: "Thời trang Hi-tech", idParent: 22 },

    // CÔNG NGHỆ
    { id: 25, name: "CÔNG NGHỆ", idParent: null },
    { id: 26, name: "Công nghệ thông tin", idParent: 25 },
    { id: 27, name: "Ô tô", idParent: 25 },

    // GIÁO DỤC
    { id: 28, name: "GIÁO DỤC", idParent: null },
    { id: 29, name: "Giáo dục - du học", idParent: 28 },

    // DU LỊCH
    { id: 30, name: "DU LỊCH", idParent: null },
    { id: 31, name: "Du lịch", idParent: 30 },
];

const routeMap: Record<string, string> = {
    "Asian Cup": "/asian-cup",
    "Bóng đá": "/bong-da",
    "An ninh - Hình sự": "/an-ninh-hinh-su",
    "Thời trang": "/thoi-trang",
    "Thời trang Hi-tech": "/thoi-trang-hi-tech",
    "Tài chính – Bất động sản": "/tai-chinh-bat-dong-san",
    "Tin tức trong ngày": "/trong-ngay",
    "Ẩm thực": "/am-thuc",
    "Giáo dục - du học": "/giao-duc-du-hoc",
    "Bạn trẻ - Cuộc sống": "/ban-tre-cuoc-song"
    "Làm đẹp": "/lam-dep"
};

const NavMenuComponent = () => {
    const listMenu = useSelector(
        (state: RootState) => state.menuItems
    ) as MenuItem[];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load(listMenuItem));
    }, [dispatch]);

    return (
        <div className="nav-menu">
            <div className="cover-menu">
                <i className="fa-solid fa-bars"></i>
                <div className="line"></div>
                <Link to="/">
                    <i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>
                </Link>
                {listMenu
                    .filter((item) => item.idParent === null)
                    .map((menuItem) => {
                        const children = listMenu.filter(
                            (item) => item.idParent === menuItem.id
                        );
                        return (
                            <li className="item-menu" key={menuItem.id}>
                                {menuItem.name}
                                {children.length > 0 && (
                                    <div className="sub-menu">
                                        <ul className="cover-sub-menu">
                                            {children.map((item) => (
                                                <li key={item.id}>
                                                    {routeMap[item.name] ? (
                                                        <Link to={routeMap[item.name]}>
                                                            {item.name}
                                                        </Link>
                                                    ) : (
                                                        item.name
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
            </div>
        </div>
    );
};

export default NavMenuComponent;