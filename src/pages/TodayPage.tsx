import CategoryPage from "./CategoryPage";

function TodayPage() {
    return (
        <CategoryPage
            title="TIN TỨC TRONG NGÀY"
            source="trongngay"
            sideTitle="TIN TỨC THỊ TRƯỜNG"
            updateTitle="NHIỀU NGƯỜI ĐỌC"
            navItems={[
                { icon: "fa-cloud-sun", label: "THỜI TIẾT" },
                { icon: "fa-newspaper", label: "NÓNG TRÊN MẠNG" },
                { icon: "fa-car-burst", label: "AN TOÀN GIAO THÔNG" },
                { icon: "fa-calendar-days", label: "LỊCH VẠN NIÊN" },
            ]}
        />
    );
}

export default TodayPage;