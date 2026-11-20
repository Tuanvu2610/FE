import {Link} from "react-router-dom";
import "../styles/DistrictPage.css"
import ArticleDetail from "../component/home/ArticleDetail.tsx";
import MarketNews from "../component/home/MarketNews.tsx";
import {useArticles} from "../hooks/useArticles.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {useEffect, useRef} from "react";
import {load} from "../store/slice/DistrictSlice.ts";
import $ from "jquery";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
DataTable.use($);
interface District {
    old_ward_code: string;
    old_ward_name: string;
    old_district_code: string;
    old_district_name: string;
    old_province_code: string;
    new_ward_code: string;
    new_ward_name: string;
    new_province_code: string;
}
const provinceNames: Record<string, string> = {
    "01": "Hà Nội",
    "04": "Cao Bằng",
    "08": "Tuyên Quang",
    "11": "Điện Biên",
    "12": "Lai Châu",
    "14": "Sơn La",
    "15": "Lào Cai",
    "19": "Thái Nguyên",
    "20": "Lạng Sơn",
    "22": "Quảng Ninh",
    "24": "Bắc Ninh",
    "25": "Phú Thọ",
    "31": "Hải Phòng",
    "33": "Hưng Yên",
    "37": "Ninh Bình",
    "38": "Thanh Hóa",
    "40": "Nghệ An",
    "42": "Hà Tĩnh",
    "44": "Quảng Trị",
    "46": "Huế",
    "48": "Đà Nẵng",
    "51": "Quảng Ngãi",
    "52": "Gia Lai",
    "56": "Khánh Hòa",
    "66": "Đắk Lắk",
    "68": "Lâm Đồng",
    "75": "Đồng Nai",
    "79": "TP. Hồ Chí Minh",
    "80": "Tây Ninh",
    "82": "Đồng Tháp",
    "86": "Vĩnh Long",
    "91": "An Giang",
    "92": "Cần Thơ",
    "96": "Cà Mau"
};
const DistrictSearchPage = () => {
    const {items: articles, loading, error} = useArticles("trongngay");
    const {items: articles2} = useArticles("suckhoedoisong");
    const listDistrict = useSelector((state: RootState) => state.district) as District[];
    const dispatch = useDispatch();
    const tableRef = useRef<HTMLTableElement>(null);
    useEffect(() => {
        fetch("/data/dataDistrict.json")
            .then(res => res.json())
                .then(json => {
                    dispatch(load(json.data));
                })
            .catch((error) => {
                console.error(error);
            });
    }, [dispatch]);
    useEffect(() => {
        if (!tableRef.current || listDistrict.length === 0) return;
        const table = $(tableRef.current).DataTable({
            paging: true,
            searching: true,
            ordering: true,
            pageLength: 15,
            lengthMenu: [15, 30, 50, 100],
        });
        return () => {
            table.destroy();
        };
    }, [listDistrict, loading, error]);
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
                       <div className="cover-datatable">
                           <table ref={tableRef} id="myTable">
                               <thead>
                               <tr>
                                   <th>Tỉnh/Thành phố</th>
                                   <th>Phường/Xã mới</th>
                                   <th>Phường/Xã cũ</th>
                               </tr>
                               </thead>
                               <tbody>
                               {listDistrict.map((item: District) => (
                                   <tr key={`${item.old_ward_code}-${item.old_province_code}`}>
                                       <td>{provinceNames[item.new_province_code]}</td>
                                       <td>{item.new_ward_name}</td>
                                       {/*<td>{`${item.old_ward_name} - ${item.old_district_name}`}</td>*/}
                                       <td>{item.old_ward_name?`${item.old_ward_name} - ${item.old_district_name}`: `${item.old_district_name}`}</td>
                                   </tr>
                               ))}
                               </tbody>
                           </table>
                       </div>
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