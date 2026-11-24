
import CategoryPage from "./CategoryPage";

function OtoPage() {
    return (
        <CategoryPage
            title="Ô TÔ"
            source="oto"
            sideTitle="TIN Ô TÔ NỔI BẬT"
            updateTitle="TIN Ô TÔ MỚI NHẤT"
            navItems={[
                { icon: "fa-car", label: "Ô tô mới" },
                { icon: "fa-gas-pump", label: "Giá xe" },
                { icon: "fa-road", label: "Thị trường xe" },
                { icon: "fa-gears", label: "Tư vấn xe" },
                { icon: "fa-newspaper", label: "Tin xe" }
            ]}
        />
    );
}

export default OtoPage;
