import {Link} from "react-router-dom";
import "../styles/DistrictPage.css"
import ArticleDetail from "../component/home/ArticleDetail.tsx";
import MarketNews from "../component/home/MarketNews.tsx";
import {useArticles} from "../hooks/useArticles.tsx";
const DistrictSearchPage = () => {
    const {items: articles, loading, error} = useArticles("trongngay");
    const {items: articles2} = useArticles("suckhoedoisong");
    const page = {
        title: "Tra cứu chi tiết 3.321 phường, xã, đặc khu của 34 tỉnh, thành phố sau sắp xếp",
        date: "Thứ Tư, ngày 02/07/2025 17:50 PM (GMT+7)",
        category: "Sự kiện: Sáp nhập tỉnh thành, bộ máy",
        content: [
            "Sau khi sắp xếp lại bộ máy, cả nước còn 34 tỉnh, thành phố và 3.321 đơn vị cấp xã. Trong đó, TP.HCM là địa phương có nhiều đơn vị cấp xã nhất với 168 đơn vị và ít nhất là tỉnh Lai Châu với 38 đơn vị.",

            "Sau khi sắp xếp lại bộ máy, cả nước còn 34 tỉnh, thành phố (TP) và 3.321 đơn vị cấp xã (trước khi sắp xếp là 63 tỉnh, TP và 10.035 đơn vị cấp xã).",

            "Trong đó, TP.HCM là địa phương có nhiều đơn vị cấp xã nhất với 168 đơn vị và ít nhất là tỉnh Lai Châu với 38 đơn vị.",

            "Đáng chú ý, TP.HCM cũng là địa phương có nhiều đơn vị hành chính là phường nhất với 113 phường."
        ]
    };
    return (
       <div className="districtSearchPage">
           <div className="district-heading">
               <div className="fashion-breadcrumb">
                   <Link to="/">Trang chủ</Link>
                   <span>›</span>
                   <strong>TRA CỨU PHƯỜNG XÃ</strong>
               </div>
               <p className="text-date">Thứ Tư, ngày 02/07/2025 17:50 PM (GMT+7)</p>
           </div>
           {loading && <p>Đang tải tin...</p>}
           {error && <p>{error}</p>}
           {!loading && !error && articles.length === 0 && <p>Không có bài viết nào.</p>}

           {!loading && !error && articles.length > 0 && (
               <div className="cover-content-district">
                   <div className="district-left">
                       <ArticleDetail article={page}/>
                   </div>
                   <div className="district-right">
                       <div>
                           <h3 style={{color: "#518f02"}}>Tin tức thị trường</h3>
                           <div>
                               {articles.slice(1, 5).map((a) => (
                                   <MarketNews key={a.link} article={a}/>
                               ))}
                           </div>
                       </div>
                       <div>
                           <h3 style={{color: "#518f02"}}>Sức khỏe đời sống</h3>
                           <div>
                               {articles2.slice(1, 5).map((a) => (
                                   <MarketNews key={a.link} article={a}/>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
           )}
       </div>
    )
}
export default DistrictSearchPage;