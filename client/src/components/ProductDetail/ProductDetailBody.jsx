import classes from "./ProductDetailBody.module.css";
import ReactStars from "react-rating-stars-component";
import _ from "lodash";
const ProductDetailBody = ({ product }) => {
    console.log(product);
    return (
        <>
            <div className={classes.product_detail}>
                <div className={classes.product_detail_image}>
                    <img src={product.image}></img>
                </div>
                <div className={classes.product_detail_info}>
                    <div className={classes.name}>{product.name}</div>
                    <div className={classes.review}>
                        <ReactStars
                            count={5}
                            value={product.averageRating}
                            isHalf={true}
                            size={24}
                            activeColor={"rgb(37, 150, 190)"}
                        ></ReactStars>
                        <span>{` (${product.numOfReviews} user reviews)`}</span>
                    </div>
                    <div
                        style={{ color: "var(--theme-color)" }}
                    >{`$${product.price}`}</div>
                    <div
                        className={classes.description}
                    >{`${product.description}`}</div>
                    <div>
                        Available: &nbsp;&nbsp;
                        {product.inventory > 0 ? "In stock" : "Out of stock"}
                    </div>
                    <div>
                        Brand:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {_.capitalize(`${product.company}`)}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductDetailBody;
