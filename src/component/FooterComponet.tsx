import "../styles/Footer.css"
const footerNav = [
    "TIN TỨC",
    "BÓNG ĐÁ",
    "THẾ GIỚI",
    "AN NINH - XÃ HỘI",
    "HI-TECH",
    "KINH DOANH",
    "ĐẸP",
    "GIẢI TRÍ",
    "THỂ THAO",
    "Ô TÔ",
];
const socials = [
    { label: "APP 24H", icon: "fa-solid fa-mobile-screen", color: "#78b43d" },
    { label: "", icon: "fa-solid fa-futbol", color: "#333", wide: true },
    { label: "FANPAGE 24H", icon: "fa-brands fa-facebook", color: "#1877f2" },
    { label: "BÓNG ĐÁ 24H", icon: "fa-brands fa-facebook", color: "#1877f2" },
    { label: "TIKTOK 24H", icon: "fa-brands fa-tiktok", color: "#000" },
    { label: "YOUTUBE 24H", icon: "fa-brands fa-youtube", color: "#ff0000" },
];
const FooterComponet = () => {
    return (
        <>
            <div className="container-footer">
                <div className="cover-btn">
                    <div className="btn-left">
                        {socials.map((item, i) => (
                            <a href="#" className="btn-style" key={i}>
                                <i className={item.icon} style={{ color: item.color }}></i>
                                {item.label && <span>{item.label}</span>}
                            </a>
                        ))}
                    </div>
                    <div className="btn-right">
                        <button className="btn-share">
                            <i className="fa-solid fa-share-nodes"></i>
                            CHIA SẺ
                        </button>
                        <button className="btn-circle btn-home">
                            <i className="fa-solid fa-house"></i>
                        </button>
                    </div>
                </div>
                <div className="list-title">
                    <i className="fa-solid fa-house"></i>
                    <ul>
                        {footerNav.map((name) => (
                            <li key={name} className="item-title">
                                <a href="#">{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-info">
                    <div className="info-col">
                        <h4 className="title-info">TRỤ SỞ HÀ NỘI</h4>
                        <p className="info-text">
                            <i className="fa-solid fa-location-dot"></i>
                            Tầng 12, Tòa nhà Geleximco , 36 Hoàng Cầu, Phường Ô chợ Dừa, Tp. Hà Nội
                        </p>
                        <p className="info-text">
                            <i className="fa-solid fa-phone"></i>
                            Điện thoại: (84-24) 73 00 24 24 | (84-24) 35 12 18 06
                        </p>
                        <p className="info-text">
                            <i className="fa-solid fa-print"></i>
                            Fax: 0243 512 1804
                        </p>

                        <h4 className="title-info">CHI NHÁNH TP.HỒ CHÍ MINH</h4>
                        <p className="info-text">
                            <i className="fa-solid fa-location-dot"></i>
                            Tầng 11, Cao ốc 123-127 Võ Văn Tần, phường Xuân Hòa, Tp. Hồ Chí Minh.
                        </p>
                        <p className="info-text">
                            <i className="fa-solid fa-phone"></i>
                            Điện thoại: (84-28) 73 00 24 24
                        </p>
                    </div>

                    <div className="info-col company">
                        <h4 className="title-info">CÔNG TY CỔ PHẦN QUẢNG CÁO TRỰC TUYẾN 24H</h4>
                        <p className="info-text">GIẤY PHÉP THIẾT LẬP TRANG THÔNG TIN ĐIỆN TỬ TỔNG HỢP TRÊN MẠNG.</p>
                        <p className="info-text">
                            Giấy phép số 180/GP-STTTT ngày cấp 11/12/2024 - Sở thông tin và truyền
                            thông Hà Nội.
                        </p>
                        <p className="info-text">
                            Giấy xác nhận thông báo cung cấp dịch vụ Mạng xã hội số 89 /GXN-PTTH&amp;TTĐT
                            do Cục Phát thanh, Truyền hình và Thông tin Điện tử cấp ngày 13 tháng 6
                            năm 2025.
                        </p>
                        <p className="info-text">
                            Chịu trách nhiệm quản lý nội dung: <b>Phan Minh Tâm</b>
                            Hotline: <b>0965 08 24 24</b>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default FooterComponet;