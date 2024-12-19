import './styles.css';
import searchIcon from '../../assets/search-icon.svg';
import settingsIcon from '../../assets/setting-icon.svg';

export default function SearchBar() {
    return (
        <form className="search-bar">
            <button type="submit">
                <img src={searchIcon} alt="" />
            </button>
            <input placeholder='Procurar' />
            <button><img src={settingsIcon} alt="" /></button>
        </form>
    );
}