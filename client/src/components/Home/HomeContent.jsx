import LinkButton from "../Button/LinkButton";
import classes from "./HomeContent.module.css";
import small from "../../../src/images/small_foot.jpeg";
import big from "../../../src/images/kids_play_soccer.webp";
const HomeContent = () => {
    return (
        <>
            <div className={classes.home_view}>
                <div>
                    <h1>Play With Full Freedom</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iusto, at sed omnis corporis doloremque possimus
                        velit! Repudiandae nisi odit, aperiam odio ducimus,
                        obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <LinkButton
                        style={{
                            padding: "10px",
                        }}
                        name="SHOP NOW"
                        link="/products"
                    ></LinkButton>
                </div>
                <div className={classes.image_container}>
                    <img src={big}></img>
                    <img src={small} />
                </div>
            </div>
        </>
    );
};
export default HomeContent;
