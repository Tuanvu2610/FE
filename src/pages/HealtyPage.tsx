import CategoryPage from "./CategoryPage";
import FilterComponent from "../component/FilterComponent.tsx";
const list = ["Viêm đại tràng", "Bệnh tiểu đường", "Bệnh gan", "Bệnh tim mạch"];

function HealthyPage() {
    return (
        <CategoryPage
            title="SỨC KHỎE - ĐỜI SỐNG"
            source="suckhoedoisong"
            sideTitle="TIN TỨC SỨC KHỎE"
            updateTitle="NHIỀU NGƯỜI ĐỌC"
            component={<FilterComponent titleInput="Chọn tên bệnh" listHot={list}/>}
        />
    );
}

export default HealthyPage;