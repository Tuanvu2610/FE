import "../styles/FilterStyle.css"
interface FilterComponentProps {
    listHot?: string[];
    titleInput: string;
    listMenuFilter?: string[];
}
const FilterComponent = ({listHot = [], titleInput, listMenuFilter = []}: FilterComponentProps) => {
  return (
      <>
      <div className="cover-filter">
          <div className="cover-select">
              <p>CHỦ ĐỀ</p>
              <select value={titleInput} className="filter-select">
                  <option value="">{titleInput}</option>
                  {listMenuFilter?.map((item) => (
                    <option>{item}</option>
                  ))}
              </select>
          </div>
          <div className="cover-select">
              <p>Tìm nhiều nhất</p>
              {listHot?.length > 0 && (
                  <div className="cover-btn-filter">
                      {listHot?.map((item) => (
                          <button>{item}</button>
                      ))}
                  </div>
              )}
          </div>
      </div>
      </>
  )
}

export default FilterComponent;