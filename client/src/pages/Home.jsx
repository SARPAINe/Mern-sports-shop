import HomeContent from "../components/Home/HomeContent";
import BreadCrumb from "../components/Layout/BreadCrumb";

const Home = (props) => {
    return (
        <>
            <BreadCrumb></BreadCrumb>
            <HomeContent></HomeContent>
        </>
    );
};
export default Home;
