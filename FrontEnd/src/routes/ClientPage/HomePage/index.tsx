import SearchBar from "../../../components/SearchBar";
import messageIcon from '../../../assets/message-icon.svg';
import notificationIcon from '../../../assets/notification-icon.svg';
import userImg from '../../../assets/user-img.svg';
import farofaPrincipal from '../../../assets/farofa-principal.svg';
import starIcon from '../../../assets/star-icon.svg';
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import CardProduct from "../../../components/CardProduct";
import imgProduct1 from '../../../assets/imgProduct1.svg';
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "../../../components/Slider";
import { useState } from "react";

export default function HomePage() {

    const [quantityProductHighLighted, setQuantityProductHighLighted] = useState<number>(1);

    const settings: SwiperProps = {
        spaceBetween: 30,
        slidesPerView: 4.5,
        navigation: true,
        pagination: {
            clickable: true
        }
    }

    function handleClickIncrease() {
        setQuantityProductHighLighted(quantityProductHighLighted + 1);
    }

    function handleClickDecrement() {
        if (quantityProductHighLighted <= 1) {
            setQuantityProductHighLighted(1);
            return;
        }
        setQuantityProductHighLighted(quantityProductHighLighted - 1);
    }

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
            <div className="home-page-content">

                <div className="card-product-highlighted">
                    <div className="card-product-highlighted-img">
                        <img src={farofaPrincipal} alt="" />
                    </div>
                    <div className="card-product-highlighted-description">
                        <h4>Farofa Mineira Uai Bacon 400G</h4>
                        <div className="card-product-highlighted-review">
                            <div className="card-product-highlighted-stars">
                                <img src={starIcon} alt="" />
                                <img src={starIcon} alt="" />
                                <img src={starIcon} alt="" />
                                <img src={starIcon} alt="" />
                                <img src={starIcon} alt="" />
                            </div>
                            <p>(2000+ Reviews)</p>
                        </div>
                        <div className="card-product-highlighted-description-content">
                            <p>Sabor intenso, crocância irresistível, autêntico aroma de bacon, versatilidade culinária, acompanhamento perfeito, ingredientes selecionados, sem conservantes artificiais</p>
                        </div>
                        <div className="card-product-highlighted-price-and-quantity">
                            <h3>Preço: R$19.90</h3>
                            <div className="card-product-highlighted-quantity">
                                <div className="quantity-decrement" onClick={handleClickDecrement}>
                                    -
                                </div>
                                <p>{quantityProductHighLighted}</p>
                                <div className="quantity-increase" onClick={handleClickIncrease}>
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="card-product-highlighted-btns">
                            <ButtonPrimary text="Adicionar no Carrinho" />
                            <ButtonSecondary text="Comprar Agora" />
                        </div>
                    </div>
                </div>






                <div className="products-list">
                    <Slider settings={settings}>
                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>


                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardProduct imgUrl={imgProduct1} name="Farofa Tradicional" price={19.90} review={4.9} />
                        </SwiperSlide>

                    </Slider>

                </div>
            </div>
        </section>
    );
}