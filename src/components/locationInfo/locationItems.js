import {
    AiOutlineHome,
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineClockCircle,
} from "react-icons/ai";

import {
    BsPhone,
} from "react-icons/bs";

export const locationData = [
    {
        icon: <AiOutlineHome size={40} />,
        text: "Donji Desinec 130, Jastrebarsko 10450",
        subtext: "Adresa",
        broj: false,
    },
    {
        icon: <BsPhone size={40} />,
        text: "091 5742 814",
        subtext: "Mobitel (ZG)",
        broj: true,
    },
    {
        icon: <BsPhone size={40} />,
        text: "095 342 0110",
        subtext: "Mobitel (PULA)",
        broj: true,
    },
    {
        icon: <AiOutlineMail size={40} />,
        text: "pvt.tuning@gmail.com",
        subtext: "Adresa e-pošte",
        broj: false,
    },
];
