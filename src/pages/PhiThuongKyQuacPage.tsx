
import CategoryPage from "./CategoryPage";

function PhiThuongKyQuacPage() {
    return (
        <CategoryPage
            title="PHI THƯỜNG - KỲ QUẶC"
            source="phithuongKyquac"
            sideTitle="CHUYỆN LẠ BỐN PHƯƠNG"
            updateTitle="TIN PHI THƯỜNG - KỲ QUẶC MỚI CẬP NHẬT"
            navItems={[
                {icon: "fa-earth-americas", label: "CHUYỆN LẠ THẾ GIỚI"},
                {icon: "fa-user-astronaut", label: "CON NGƯỜI KỲ LẠ"},
                {icon: "fa-paw", label: "ĐỘNG VẬT KỲ THÚ"},
                {icon: "fa-lightbulb", label: "KHÁM PHÁ BÍ ẨN"}
            ]}
        />
    );
}

export default PhiThuongKyQuacPage;
