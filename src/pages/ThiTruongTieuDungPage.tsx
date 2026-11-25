
import CategoryPage from "./CategoryPage";

function ThiTruongTieuDungPage() {
    return (
        <CategoryPage
            title="THỊ TRƯỜNG - TIÊU DÙNG"
            source="thitruongTieudung"
            sideTitle="GÓC TIÊU DÙNG"
            updateTitle="TIN THỊ TRƯỜNG - TIÊU DÙNG MỚI CẬP NHẬT"
            navItems={[
                {
                    icon: "fa-chart-line",
                    label: "THỊ TRƯỜNG"
                },
                {
                    icon: "fa-tags",
                    label: "GIÁ CẢ HÀNG HÓA"
                },
                {
                    icon: "fa-cart-shopping",
                    label: "MUA SẮM"
                },
                {
                    icon: "fa-lightbulb",
                    label: "TIÊU DÙNG THÔNG MINH"
                }
            ]}
        />
    );
}

export default ThiTruongTieuDungPage;
