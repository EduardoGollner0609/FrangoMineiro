import SearchBar from "../../../components/SearchBar";
import messageIcon from '../../../assets/message-icon.svg';
import notificationIcon from '../../../assets/notification-icon.svg';
import userImg from '../../../assets/user-img.svg';

export default function HomePage() {
    return (
        <section id="section-home-page">
            <header className="header-home-page">
                <h2>Farofas</h2>
                <SearchBar />
                <div className="home-page-user-details">
                    <div className="home-page-user-details-item">
                        <a href="">
                            <img src={messageIcon} alt="" />
                        </a>
                    </div>
                    <div className="home-page-user-details-item">
                        <a href="">
                            <img src={notificationIcon} alt="" />
                        </a>
                    </div>
                    <div className="home-page-user-details-item">
                        <a href="">
                            <img src={userImg} alt="" />
                        </a>
                    </div>
                </div>
            </header>
        </section>
    );
}