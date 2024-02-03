import { useLocation } from "react-router-dom";
import CheckoutBody from "../components/Checkout/CheckoutBody";
import BreadCrumb from "../components/Layout/BreadCrumb";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51Nl2KWDKGTIfMhehDXLXDPguzLlJRvfJyuiO40ayUi2Lrkcil9EUG3TxbAY2p8wUd6eUqyHRH1rlYkyokmCUlbyy00vP6uAT0I"
);

const Checkout = () => {
    // let state = useLocation();
    // console.log(state.amount);
    return (
        <>
            <BreadCrumb></BreadCrumb>
            <CheckoutBody stripePromise={stripePromise}></CheckoutBody>
        </>
    );
};

export default Checkout;
