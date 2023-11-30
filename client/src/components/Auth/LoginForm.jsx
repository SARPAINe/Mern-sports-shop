import useInput from "../../hooks/use-input";
import classes from "./LoginForm.module.css";
import { Form, json, redirect, useRouteLoaderData } from "react-router-dom";
const LoginForm = () => {
    const {
        value: enteredEmail,
        isValid: isEmailValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        hasError: emailHasError,
        reset: resetEmail,
    } = useInput((value) => value.includes("@"));

    const {
        value: enteredPassword,
        isValid: isPasswordValid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        hasError: passwordHasError,
        reset: resetPassword,
    } = useInput((value) => value.length > 5);

    let formIsValid = false;
    if (isEmailValid && isPasswordValid) {
        formIsValid = true;
    }

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        resetEmail();
        resetPassword();
    };

    return (
        <>
            <div className={classes.form_container}>
                <Form method="post">
                    <p className={classes.title}>Login Form</p>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                        ></input>
                        {emailHasError && (
                            <p className="error-text">Input must be an Email</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            value={enteredPassword}
                        ></input>
                        {passwordHasError && (
                            <p className="error-text">
                                Valid password must have at least 6 characters
                            </p>
                        )}
                    </div>
                    <button disabled={!formIsValid}>Login</button>
                </Form>
            </div>
        </>
    );
};
export default LoginForm;

export const action = async ({ request, params }) => {
    console.log(params);
    const data = await request.formData();
    const loginData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    let url = "http://localhost:5000/api/v1/auth/login";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
        //without credentials cookies won't be saved to browser
    });

    const responseJson = await response.json();

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json(
            { message: `Could not login - ${responseJson.msg} ` },
            { status: 500 }
        );
    }

    return redirect("/");
    // return null;
};
