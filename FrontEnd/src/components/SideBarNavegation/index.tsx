import './styles.css';
import logoFrango from '../../assets/logoFrango.png';
import homeIcon from '../../assets/home-icon.svg';
import compassIcon from '../../assets/compass-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import historyIcon from '../../assets/history-icon.svg';
import contactIcon from '../../assets/contact-icon.svg';
import aboutUsIcon from '../../assets/about-us-icon.svg';

export default function SideBarNavegation() {
    return (
        <aside className="side-bar-navegation">
            <div className="side-bar-header-logo">
                <img src={logoFrango} alt="" />
            </div>
            <div className="side-bar-navegation-list">
                <ul>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={homeIcon} alt="Inicio" />
                            <p>Inicio</p>
                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={compassIcon} alt="Procurar" />
                            <p>Procurar</p>
                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={cartIcon} alt="Carrinho" />
                            <p>Carrinho</p>

                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={userIcon} alt="Perfil" />
                            <p>Perfil</p>

                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">

                            <img src={historyIcon} alt="Histórico de Compras" />
                            <p>Histórico de Compras</p>
                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={contactIcon} alt="Contato" />
                            <p>Contato</p>
                        </a>
                    </li>
                    <li className="side-bar-option-navegation">
                        <a href="">
                            <img src={aboutUsIcon} alt="Sobre nós" />
                            <p>Sobre nós</p>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}