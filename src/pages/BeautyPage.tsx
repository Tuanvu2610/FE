import CategoryPage from "./CategoryPage";

function BeautyPage() {
    return (
        <CategoryPage
            title="LÀM ĐẸP"
            source="lamdep"
            sideTitle="THẾ GIỚI ĐẸP"
            updateTitle="TIN ĐỌC NHIỀU"
            navItems={[
                { icon: "fa-face-smile", label: "Chăm sóc làm da xanh" },
                { icon: "fa-person-dress", label: "Giảm cân nhanh hiệu quả" },
                { icon: "fa-syringe", label: "Phẩu thuật thẩm mỹ" },
                { icon: "fa-scissors", label: "Tóc đẹp" },
            ]}
        />
    );
}

export default BeautyPage;