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
    },
    {
        icon: <AiOutlinePhone size={40} />,
        text: "098 196 0781",
        subtext: "Mobitel",
    },
    {
        icon: <BsPhone size={40} />,
        text: "099 7565 689",
        subtext: "Mobitel",
    },
    {
        icon: <AiOutlineMail size={40} />,
        text: "pvt.tuning@gmail.com",
        subtext: "Adresa e-pošte",
    },
    {
        icon: <AiOutlineClockCircle size={40} />,
        text: <b style={{color: "green", fontWeight: 900}}>Uvijek otvoreno</b>,
        subtext: "Radno vrijeme",
    },
];