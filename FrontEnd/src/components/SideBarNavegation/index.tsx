import logoFrango from '../../assets/LogoFrango.svg';
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
                        <img src={homeIcon} alt="Inicio" />
                        <p>Inicio</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={compassIcon} alt="Procurar" />
                        <p>Procurar</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={cartIcon} alt="Carrinho" />
                        <p>Carrinho</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={userIcon} alt="Perfil" />
                        <p>Perfil</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={historyIcon} alt="Histórico de Compras" />
                        <p>Histórico de Compras</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={contactIcon} alt="Contato" />
                        <p>Contato</p>
                    </li>
                    <li className="side-bar-option-navegation">
                        <img src={aboutUsIcon} alt="Sobre nós" />
                        <p>Sobre nós</p>
                    </li>
                </ul>
            </div>
        </aside>
    );
}