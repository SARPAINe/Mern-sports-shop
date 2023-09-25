export const tokenLoader = () => {
    document.cookie = "username=John Doe";
    const allcookies = document.cookie;
    console.log(document.cookie);
    console.log("test");
    return null;
};
