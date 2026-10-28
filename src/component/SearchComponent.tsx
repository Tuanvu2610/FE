import "../styles/Header.css"
const SearchComponent = () => {
    return (
        <>
            <div className="cover-search">
                <input className="search" type="text" placeholder="Nhập tin tức cần tìm" />
                <i className="fa-solid fa-search"></i>
            </div>
        </>
    )
}
export default SearchComponent;