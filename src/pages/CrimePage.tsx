import CategoryPage from "./CategoryPage";

function CrimePage() {
    return (
        <CategoryPage
            title="AN NINH - HÌNH SỰ"
            source="anninh"
            sideTitle="GÓC PHÁP LUẬT"
            updateTitle="TIN AN NINH MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-shield-halved", label: "AN NINH" },
                { icon: "fa-gavel", label: "PHÓNG SỰ ĐIỀU TRA" },
                { icon: "fa-scale-balanced", label: "PHÁP LUẬT" },
                { icon: "fa-triangle-exclamation", label: "CẢNH BÁO" },
            ]}
        />
    );
}

export default CrimePage;