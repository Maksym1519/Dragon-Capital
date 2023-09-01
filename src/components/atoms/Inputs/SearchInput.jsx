import "./search-input.scss";
import searchIcon from'../../../images/search-icon.svg';

const SearchInput = (props) => {
    return (
        <div className="search-input" style={{width: props.width}}>
            <input type="text" className="search-input__input" placeholder={ props.placeholder } />
            <img src={searchIcon} alt="" className="search-input__search-icon" />
        </div>
    );
};
export default SearchInput;
