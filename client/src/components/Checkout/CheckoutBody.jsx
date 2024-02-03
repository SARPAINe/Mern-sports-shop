import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import classes from "./Checkout.module.css";
import CartContext from "../Store/cart-context";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// const stripePromise = loadStripe(
//     "pk_test_51Nl2KWDKGTIfMhehDXLXDPguzLlJRvfJyuiO40ayUi2Lrkcil9EUG3TxbAY2p8wUd6eUqyHRH1rlYkyokmCUlbyy00vP6uAT0I"
// );

const CheckoutBody = ({ stripePromise }) => {
    const cartCtx = useContext(CartContext);
    const [clientSecret, setClientSecret] = useState("");
    const requestUrl = `${process.env.server_url}/api/v1/checkout/create-payment-intent`;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        console.log(Number((cartCtx.totalAmount + 5).toFixed(2)) * 100);
        fetch(requestUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: Number((cartCtx.totalAmount + 5).toFixed(2)) * 100,
            }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};
export default CheckoutBody;
