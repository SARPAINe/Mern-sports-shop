import useInput from "../../hooks/use-input";
import classes from "./LoginForm.module.css";
import { Form, json, redirect } from "react-router-dom";
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
        console.log(enteredEmail, enteredPassword);
    };

    return (
        <>
            <div className={classes.form_container}>
                <Form method="post">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                    ></input>
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

    console.log(loginData);

    let url = "http://localhost:5000/api/v1/auth/login";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
    });

    if (response.status === 422) {
        console.log(response);
        return response;
    }

    if (!response.ok) {
        console.log(response);
        throw json({ message: "Could not login." }, { status: 500 });
    }

    return redirect("/");
    // return null;
};
