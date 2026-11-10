import CategoryPage from "./CategoryPage";

function GiaoDucPage() {
    return (
        <CategoryPage
            title="GIÁO DỤC - DU HỌC"
            source="giaoducDuhoc"
            sideTitle="GÓC HỌC TẬP"
            updateTitle="TIN GIÁO DỤC MỚI CẬP NHẬT"
            navItems={[
                { icon: "fa-graduation-cap", label: "TUYỂN SINH" },
                { icon: "fa-plane-departure", label: "DU HỌC" },
                { icon: "fa-book-open", label: "GÓC HỌC TẬP" },
                { icon: "fa-school", label: "TRƯỜNG HỌC" },
            ]}
        />
    );
}

export default GiaoDucPage;