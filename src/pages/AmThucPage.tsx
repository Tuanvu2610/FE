import CategoryPage from "./CategoryPage";

function AmThucPage() {
    return (
        <CategoryPage
            title="ẨM THỰC"
            source="amthuc"
            sideTitle="GÓC ẨM THỰC"
            updateTitle="TIN ẨM THỰC MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-utensils", label: "CÔNG THỨC" },
                { icon: "fa-store", label: "QUÁN NGON" },
                { icon: "fa-kitchen-set", label: "MẸO VẶT BẾP" },
                { icon: "fa-book-open", label: "THỰC ĐƠN MỖI NGÀY" },
            ]}
        />
    );
}

export default AmThucPage;