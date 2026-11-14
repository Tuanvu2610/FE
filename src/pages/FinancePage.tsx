import CategoryPage from "./CategoryPage";

function FinancePage() {
    return (
        <CategoryPage
            title="TÀI CHÍNH - BẤT ĐỘNG SẢN"
            source="taichinhBatdongsan"
            sideTitle="GÓC TÀI CHÍNH"
            updateTitle="TIN TÀI CHÍNH - BĐS MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-chart-line", label: "THỊ TRƯỜNG" },
                { icon: "fa-building", label: "BẤT ĐỘNG SẢN" },
                { icon: "fa-coins", label: "TÀI CHÍNH" },
                { icon: "fa-house", label: "NHÀ ĐẤT" },
            ]}
        />
    );
}

export default FinancePage;