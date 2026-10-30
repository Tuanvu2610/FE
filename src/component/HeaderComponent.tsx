import '../styles/Header.css';
import {SearchComponent,NavMenuComponent} from "./index.ts";
const HeaderComponent = () => {
    return (
        <>
            <div className="cover-header">
                <div className="left-header">
                    <div className="logo">
                        <img src="https://icdn.24h.com.vn/images/2023/logo-24h-new.svg" alt=""/>
                    </div>
                    <div className="logo">
                        <img src="https://icdn.24h.com.vn/upload/3-2025/images/2025-09-05/logo_mxh_new_2-1757045703-990-width93height40.png" alt=""/>
                    </div>
                </div>
                <div className="right-header">
                    <div className="logo">
                        <img src="https://icdn.24h.com.vn/upload/1-2025/images/2025-02-12/giavang2-1739325917-165-width85height40.png" alt=""/>
                    </div>
                    <div className="style-title">
                        <i className="fa-solid fa-chart-line"></i>
                        <p className="text-title">Đoán tỷ số</p>
                    </div>
                    <div className="style-title">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p className="text-title">Lịch</p>
                    </div>
                    <SearchComponent/>
                    <div className="cover-login">
                        <i className="fa-solid fa-user"></i>
                        <button className="btn-login"> Đăng nhập</button>
                    </div>
                </div>
            </div>
            <NavMenuComponent/>
        </>
    );
}
export default HeaderComponent;