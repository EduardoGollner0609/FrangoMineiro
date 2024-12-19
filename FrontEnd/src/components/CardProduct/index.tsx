import './styles.css';
import starRed from '../../assets/star-red-icon.svg';

type Props = {
    imgUrl: string;
    name: string;
    price: number;
    review: number;
}

export default function CardProduct({ imgUrl, name, price, review }: Props) {
    return (
        <div className="card-product">
            <div className="card-product-img">
                <img src={imgUrl} alt="" />
            </div>

            <div className="card-product-description">
                <h4>{name}</h4>
                <p>Preço: R${price.toFixed(2)}</p>
            </div>

            <div className="card-product-review-and-increase">
                <div className="card-product-review">
                    <img src={starRed} alt="" />
                    <p>{review}</p>
                </div>
                <div className="card-product-increase">
                    +
                </div>
            </div>
        </div>
    );
}