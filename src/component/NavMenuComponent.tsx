import { useEffect } from "react";
import type {RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../store/slice/MenuItems.ts";
import "../styles/NavMenu.css"
export interface MenuItem {
    id: number;
    name: string;
    listChildId: [];
    idParent: number;
}
const NavMenuComponent = () => {
    const listMenu = useSelector((state: RootState) => state.menuItems);
    const dispatch = useDispatch();
    useEffect(() => {
        const listMenuItem = [
            {
                id: 1,
                name: 'TIN TỨC',
                idParent: null,
            },
            {
                id: 2,
                name: 'NGOẠI HẠNG ANH',
                idParent: null,
            },
            {
                id: 3,
                name: 'BÓNG ĐÁ',
                idParent: null,
            },
            {
                id: 4,
                name: 'KINH DOANH',
                idParent: null,
            },
            {
                id: 5,
                name: 'GIẢI TRÍ',
                idParent: null,
            },
            {
                id: 6,
                name: '24H THÍCH BÓNG ĐÁ - THỂ THAO ',
                idParent: null,
            },
            {
                id: 7,
                name: 'SỨC KHỎE',
                idParent: null,
            },
            {
                id: 8,
                name: 'HI-TECH',
                idParent: null,
            },
            {
                id: 9,
                name: 'THẾ GIỚI',
                idParent: null,
            },
            {
                id: 10,
                name: 'THỂ THAO',
                idParent: null,
            },
            {
                id: 11,
                name: 'Ô TÔ',
                idParent: null,
            }
        ];
        dispatch(load(listMenuItem))
    }, [dispatch])

    return (
        <>
            <div className="nav-menu">
               <div className="cover-menu">
                   <i className="fa-solid fa-bars item-menu"></i>
                   <div className="line"></div>
                   <i className="fa-solid fa-house item-menu"></i>
                    {
                        listMenu.map((menuItem: MenuItem) => (
                            <ul className="item-menu" key={menuItem.id}>
                                <li >
                                    {menuItem.name}
                                </li>
                            </ul>
                        ))
                    }
               </div>
            </div>
        </>
    )
}
export default NavMenuComponent;