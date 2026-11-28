import "../styles/Header.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const SearchComponent = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const submitSearch = () => {
        if (!search.trim()) return;
        const value = search.trim();
        navigate(`/tim-kiem?q=${value}`);
    };
    return (
        <>
            <div className="cover-search">
                <input className="search"
                       type="text"
                       placeholder="Nhập tin tức cần tìm"
                       onChange={handleSearch}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               submitSearch();
                           }
                       }}/>
                <i className="fa-solid fa-search" onClick={submitSearch}></i>
            </div>
        </>
    )
}
export default SearchComponent;