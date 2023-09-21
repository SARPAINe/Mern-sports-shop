import classes from "./AboutContent.module.css";
const AboutContent = () => {
    return (
        <div className={classes.about}>
            <div className={classes.image}>
                <img src="https://res.cloudinary.com/dxtahvyx2/image/upload/v1695277003/sports-shop/tmp-1-1695277001516_l8adzz.webp"></img>
            </div>
            <div className={classes.story}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias officia rerum voluptatum nesciunt. Quam et eligendi,
                dolor perspiciatis perferendis placeat nisi reiciendis minima
                cumque, explicabo a unde dolorum voluptatibus corrupti! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
                maiores, deserunt, nostrum laboriosam, nihil soluta quaerat
                porro voluptas quis alias obcaecati? Delectus minus aut
                provident, omnis ad vero temporibus? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ullam minus minima iusto eius
                rerum quos beatae sit corrupti corporis ratione. Nisi quis
                facere dicta maiores in distinctio nihil aperiam impedit.
            </div>
        </div>
    );
};

export default AboutContent;
