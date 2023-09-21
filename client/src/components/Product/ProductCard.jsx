import { Link } from "react-router-dom";
import classes from "./ProductCard.module.css";
const ProductCard = (props) => {
    const { image, name, price, product_id } = props;

    return (
        <div className={classes.product_card}>
            <div className={classes.image}>
                <img
                    src={image}
                    alt="football image"
                    // height={"300px"}
                ></img>
            </div>
            <div className={classes.card_footer}>
                <div className={classes.title}>
                    <Link to={product_id}>{name}</Link>
                    {/* {name} */}
                </div>
                <div className={classes.price}>{`$${price}`}</div>
            </div>
        </div>
    );
};
export default ProductCard;
