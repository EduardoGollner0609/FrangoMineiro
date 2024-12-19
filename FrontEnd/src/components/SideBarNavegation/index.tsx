import './styles.css';
import logoFrango from '../../assets/logoFrango.png';
import homeIcon from '../../assets/home-icon.svg';
import compassIcon from '../../assets/compass-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import historyIcon from '../../assets/history-icon.svg';
import contactIcon from '../../assets/contact-icon.svg';
import aboutUsIcon from '../../assets/about-us-icon.svg';
import { NavLink } from 'react-router-dom';

export default function SideBarNavegation() {
    return (
        <aside className="side-bar-navegation">
            <div className="side-bar-header-logo">
                <img src={logoFrango} alt="" />
            </div>
            <div className="side-bar-navegation-list">

                <div className="side-bar-option-navegation">
                    <NavLink to="/home" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={homeIcon} alt="Inicio" />
                        <p>Inicio</p>
                    </NavLink>
                </div>

                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={compassIcon} alt="Procurar" />
                        <p>Procurar</p>
                    </NavLink>
                </div>


                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={cartIcon} alt="Carrinho" />
                        <p>Carrinho</p>
                    </NavLink>
                </div>



                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={userIcon} alt="Perfil" />
                        <p>Perfil</p>
                    </NavLink>
                </div>

                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={historyIcon} alt="Histórico de Compras" />
                        <p>Histórico de Compras</p>
                    </NavLink>
                </div>

                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={contactIcon} alt="Contato" />
                        <p>Contato</p>
                    </NavLink>
                </div>

                <div className="side-bar-option-navegation">
                    <NavLink to="/search" className={({ isActive }) =>
                        isActive ? "side-bar-option-navegation-active" : ""
                    }>
                        <img src={aboutUsIcon} alt="Sobre nós" />
                        <p>Sobre nós</p>
                    </NavLink>
                </div>
            </div>
        </aside>
    );
}