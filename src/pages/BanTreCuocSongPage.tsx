import CategoryPage from "./CategoryPage";

function BanTrePage() {
    return (
        <CategoryPage
            title="BẠN TRẺ - CUỘC SỐNG"
            source="bantreCuocsong"
            sideTitle="GÓC BẠN TRẺ"
            updateTitle="TIN BẠN TRẺ MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-people-group", label: "GIỚI TRẺ" },
                { icon: "fa-heart", label: "TÌNH YÊU" },
                { icon: "fa-briefcase", label: "VIỆC LÀM" },
                { icon: "fa-lightbulb", label: "KỸ NĂNG SỐNG" },
            ]}
        />
    );
}

export default BanTrePage;