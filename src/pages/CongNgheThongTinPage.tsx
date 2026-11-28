import {Link} from "react-router-dom";
import {useArticles} from "../hooks/useArticles";
import CnttHero from "../component/CnttHero";
import CnttRowList from "../component/CnttRowList";
import CnttBlock from "../component/CnttBlock";
import CnttSide from "../component/CnttSide";
import "../styles/Cntt.css";

const SUB_NAV = ["Game", "Phần mềm", "Khoa học", "Mạng xã hội", "Thủ thuật - Tiện ích", "Công nghệ AI", "Soi Virus ???"];

function CongNgheThongTinPage() {
    const {items, loading, error} = useArticles("congnghethongtin");

    return (
        <div className="cntt-page">
            <nav className="cntt-subnav">
                <Link to="/" aria-label="Trang chủ"><i className="fa-solid fa-house"></i></Link>
                <strong>CÔNG NGHỆ THÔNG TIN</strong>
                {SUB_NAV.map((name) => (
                    <span key={name}>{name}</span>
                ))}
            </nav>

            {loading && <p>Đang tải tin...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && items.length === 0 && <p>Không có bài viết nào.</p>}

            {!loading && !error && items.length > 0 && (
                <div className="cntt-layout">
                    <div className="cntt-main">
                        <CnttHero article={items[0]}/>

                        <div className="cntt-lower">
                            <CnttRowList articles={items.slice(5, 13)}/>
                            <div>
                                <CnttBlock title="GAME" articles={items.slice(13, 17)}/>
                                <CnttBlock title="MẠNG XÃ HỘI" articles={items.slice(17, 20)}/>
                                <CnttBlock title="THỦ THUẬT - TIỆN ÍCH" articles={items.slice(20, 23)}/>
                            </div>
                        </div>
                    </div>

                    <CnttSide top={items.slice(1, 5)} explore={items.slice(23, 28)}/>
                </div>
            )}
        </div>
    );
}

export default CongNgheThongTinPage;