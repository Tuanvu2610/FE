import CategoryPage from "./CategoryPage";

function CaNhacMTVPage() {
    return (
        <CategoryPage
            title="CA NHẠC - MTV"
            source="canhacMTV"
            sideTitle="GÓC ÂM NHẠC"
            updateTitle="TIN CA NHẠC MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-microphone", label: "SAO VIỆT" },
                { icon: "fa-compact-disc", label: "NHẠC QUỐC TẾ" },
                { icon: "fa-music", label: "MV MỚI" },
                { icon: "fa-guitar", label: "SÂN KHẤU" },
            ]}
        />
    );
}

export default CaNhacMTVPage;