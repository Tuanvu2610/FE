import CategoryPage from "./CategoryPage";

function HiTechPage() {
    return (
        <CategoryPage
            title="THỜI TRANG HI-TECH"
            source="thoitrangHitech"
            sideTitle="GÓC CÔNG NGHỆ"
            updateTitle="TIN HI-TECH MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-mobile-screen-button", label: "ĐIỆN THOẠI" },
                { icon: "fa-laptop", label: "LAPTOP" },
                { icon: "fa-microchip", label: "THIẾT BỊ THÔNG MINH" },
                { icon: "fa-camera", label: "PHỤ KIỆN CÔNG NGHỆ" },
            ]}
        />
    );
}

export default HiTechPage;