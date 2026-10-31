import "../styles/AdBanner.css";

function AdBanner() {
    return (
        <div className="adBanner">
            <div className="adLabel">QUẢNG CÁO</div>
            <div className="adContent">
                <span className="adTag">ƯU ĐÃI ĐẶC BIỆT</span>
                <h3>Khám phá những điều mới mẻ mỗi ngày</h3>
                <p>Cập nhật thông tin và trải nghiệm những nội dung nổi bật.</p>
                <a href="#" className="adButton">
                    Tìm hiểu thêm
                </a>
            </div>
        </div>
    );
}

export default AdBanner;
