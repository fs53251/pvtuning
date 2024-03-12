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
        text: "091 574 2814",
        subtext: "Mobitel",
        broj: true,
    },
    {
        icon: <AiOutlineMail size={40} />,
        text: "pvt.tuning@gmail.com",
        subtext: "Adresa e-pošte",
        broj: false,
    },
    {
        icon: <AiOutlineClockCircle size={40} />,
        text: <b style={{color: "green", fontWeight: 900}}>Uvijek otvoreno</b>,
        subtext: "Radno vrijeme",
        broj: false,
    },
];