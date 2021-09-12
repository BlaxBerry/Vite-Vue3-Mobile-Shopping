import { Toast } from "vant";

export default function clearUserInfo(router) {
    // get user info form local storage
    let userLocalStorage = JSON.parse(localStorage.getItem("user"));

    // if there is no user info in localStorage
    if (!userLocalStorage) {
        Toast.fail("请先登陆");
        return;
    }
    // clear localstorage
    localStorage.removeItem("user");

    // reloady route
    router.go(0);
};
