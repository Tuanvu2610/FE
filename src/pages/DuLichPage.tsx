import CategoryPage from "./CategoryPage";
import FilterComponent from "../component/FilterComponent.tsx";
const list = ["Châu Á", "Châu Âu"];

function DuLichPage() {
    return (
        <CategoryPage
            title="DU lỊCH"
            source="dulich"
            sideTitle="TIN TỨC ẨM THỰC - DU LỊCH"
            updateTitle="NHIỀU NGƯỜI ĐỌC"
            component={<FilterComponent titleInput="Chọn địa điểm" listHot={list}/>}
        />
    );
}

export default DuLichPage;