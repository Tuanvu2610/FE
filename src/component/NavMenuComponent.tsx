import { useEffect } from "react";
import type { RootState } from "../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../store/slice/MenuItems.ts";
import "../styles/NavMenu.css";

export interface MenuItem {
    id: number;
    name: string;
    listChildId: number[];
    idParent: number | null;
}

const NavMenuComponent = () => {
    const listMenu = useSelector((state: RootState) => state.menuItems);
    const dispatch = useDispatch();

    useEffect(() => {
        const listMenuItem: MenuItem[] = [
            { id: 1, name: "TIN TỨC", listChildId: [], idParent: null },
            { id: 2, name: "NGOẠI HẠNG ANH", listChildId: [], idParent: null },
            { id: 3, name: "BÓNG ĐÁ", listChildId: [], idParent: null },
            { id: 4, name: "KINH DOANH", listChildId: [], idParent: null },
            { id: 5, name: "GIẢI TRÍ", listChildId: [], idParent: null },
            { id: 6, name: "24H THÍCH BÓNG ĐÁ - THỂ THAO", listChildId: [], idParent: null },
            { id: 7, name: "SỨC KHỎE", listChildId: [], idParent: null },
            { id: 8, name: "HI-TECH", listChildId: [81, 82], idParent: null },
            { id: 9, name: "THẾ GIỚI", listChildId: [], idParent: null },
            { id: 10, name: "THỂ THAO", listChildId: [], idParent: null },
            { id: 11, name: "Ô TÔ", listChildId: [], idParent: null },

            {
                id: 81,
                name: "Thời trang",
                listChildId: [],
                idParent: 8
            },
            {
                id: 82,
                name: "Thời trang Hi-tech",
                listChildId: [],
                idParent: 8
            }
        ];

        dispatch(load(listMenuItem));
    }, [dispatch]);

    return (
        <div className="nav-menu">
            <div className="cover-menu">
                <i className="fa-solid fa-bars item-menu"></i>
                <div className="line"></div>
                <i className="fa-solid fa-house item-menu"></i>

                {listMenu
                    .filter((item) => item.idParent === null)
                    .map((menuItem: MenuItem) => (
                        <ul className="item-menu" key={menuItem.id}>
                            <li>
                                {menuItem.name}

                                {listMenu.some(
                                    (item) => item.idParent === menuItem.id
                                ) && (
                                    <div className="sub-menu">
                                        <ul className="cover-sub-menu">
                                            {listMenu
                                                .filter(
                                                    (item) =>
                                                        item.idParent === menuItem.id
                                                )
                                                .map((item: MenuItem) => (
                                                    <li key={item.id}>
                                                        {item.name === "Thời trang Hi-tech" ? (
                                                            <a href="/thoi-trang-hi-tech">
                                                                {item.name}
                                                            </a>
                                                        ) : item.name === "Thời trang" ? (
                                                            <a href="/thoi-trang">
                                                                {item.name}
                                                            </a>
                                                        ) : (
                                                            item.name
                                                        )}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    ))}
            </div>
        </div>
    );
};

export default NavMenuComponent;
