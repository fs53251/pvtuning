import {
    RiInstagramLine,
    RiFacebookLine,
} from "react-icons/ri";

import {
    AiOutlineContacts,
} from "react-icons/ai";

export const socData = [
    {   link: "https://www.facebook.com/PVTtuning/",
        target: "_blank",
        title: "Facebook",
        icon: <RiFacebookLine size={35}/>,
    },
    {   link: "https://www.instagram.com/pvttuning/",
        target: "_blank",
        title: "Instagram",
        icon: <RiInstagramLine size={35}/>,
    },
    {   link: "/kontakt",
        target: "",
        title: "Kontakt",
        icon: <AiOutlineContacts size={35}/>,
    },
];