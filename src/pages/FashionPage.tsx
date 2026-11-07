import CategoryPage from "./CategoryPage";

function FashionPage() {
    return (
        <CategoryPage
            title="THỜI TRANG"
            source="thoitrang"
            sideTitle="GÓC THỜI TRANG"
            updateTitle="TIN THỜI TRANG MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-shirt", label: "XU HƯỚNG" },
                { icon: "fa-gem", label: "PHỤ KIỆN" },
                { icon: "fa-person-dress", label: "MIX & MATCH" },
                { icon: "fa-star", label: "SAO MẶC ĐẸP" },
            ]}
        />
    );
}

export default FashionPage;