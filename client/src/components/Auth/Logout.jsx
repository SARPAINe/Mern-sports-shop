import { useSubmit, json, redirect } from "react-router-dom";

const Logout = () => {
    let submit = useSubmit();
    // submit(null, { method: "delete", action: "/logout" });
    return <div>logout</div>;
};
export default Logout;
export const action = async ({ params, request }) => {
    let url = "http://localhost:5000/api/v1/auth/logout";

    const response = await fetch(url, {
        method: request.method,
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(loginData),
        credentials: "include",
    });

    if (response.status === 422) {
        console.log(response);
        return response;
    }

    if (!response.ok) {
        console.log(response);
        throw json({ message: "Could not logout." }, { status: 500 });
    }

    return redirect("/");
};
