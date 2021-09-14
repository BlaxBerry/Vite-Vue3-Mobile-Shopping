// utils
import clearUseInfo from "../utils/userGrid/clearUserInfo";
import showBlockMsg from "../utils/userGrid/showBlockMsg";


export default function useGrids(router) {

    // logout
    const logout = () => {
        // clear user info saved in localStorage
        clearUseInfo(router);
    };

    const GridArray = [
        { text: "My", icon: "user-circle-o", to: "/user/info" },
        { text: "Orders", icon: "orders-o", to: "/orders" },
        { text: "Location", icon: "location-o", to: "/user/locations" },
        { text: "Coupons", icon: "coupon-o", to: "/coupons" },
        { text: "Service", icon: "service", to: "/service" },
        { text: "Helper", icon: "question", click: showBlockMsg },
        { text: "Developing", icon: "lock", click: showBlockMsg },
        { text: "Developing", icon: "lock", click: showBlockMsg },
        { text: "Developing", icon: "lock", click: showBlockMsg },
        { text: "Developing", icon: "lock", click: showBlockMsg },
        { text: "Developing", icon: "lock", click: showBlockMsg },
        { text: "Logout", icon: "close", click: logout },
    ]

    return GridArray
}
