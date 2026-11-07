import CategoryPage from "./CategoryPage";

function AsianCupPage() {
    return (
        <CategoryPage
            title="ASIAN CUP 2019"
            source="asianCup2019"
            sideTitle="GÓC BÓNG ĐÁ"
            updateTitle="TIN ASIAN CUP MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-futbol", label: "LỊCH THI ĐẤU" },
                { icon: "fa-ranking-star", label: "BẢNG XẾP HẠNG" },
                { icon: "fa-trophy", label: "KẾT QUẢ" },
                { icon: "fa-video", label: "VIDEO" },
            ]}
        />
    );
}

export default AsianCupPage;