import './App.css'
import Home from "./component/Home";
import BackToTop from "./component/BackToTop";
import {FooterComponet, HeaderComponent} from "./component";
import {Routes, Route} from "react-router-dom";
import AsianCupPage from "./pages/AsianCupPage";
import CrimePage from "./pages/CrimePage";
import FashionPage from "./pages/FashionPage";
import HiTechPage from "./pages/HiTechPage";
import FinancePage from "./pages/FinancePage";
import TodayPage from "./pages/TodayPage.tsx";
import AmThucPage from "./pages/AmThucPage";
import FootballPage from "./pages/FootballPage.tsx";
import BeautyPage from "./pages/BeautyPage.tsx";
import GiaoDucPage from "./pages/GiaoDucPage";
import BanTreCuocSongPage from "./pages/BanTreCuocSongPage.tsx";

function App() {
    return (
        <>
            <HeaderComponent/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/bong-da" element={<FootballPage/>}/>
                <Route path="/asian-cup" element={<AsianCupPage/>}/>
                <Route path="/an-ninh-hinh-su" element={<CrimePage/>}/>
                <Route path="/thoi-trang" element={<FashionPage/>}/>
                <Route path="/thoi-trang-hi-tech" element={<HiTechPage/>}/>
                <Route path="/tai-chinh-bat-dong-san" element={<FinancePage/>}/>
                <Route path="/trong-ngay" element={<TodayPage/>}/>
                <Route path="/am-thuc" element={<AmThucPage/>}/>
                <Route path="/lam-dep" element={<BeautyPage/>}/>
                <Route path="/giao-duc-du-hoc" element={<GiaoDucPage/>}/>
                <Route path="/ban-tre-cuoc-song" element={<BanTreCuocSongPage/>}/>
            </Routes>

            <BackToTop/>
            <FooterComponet/>
        </>
    );
}

export default App;