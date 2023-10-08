import {
    HiHome,
    HiInformationCircle,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiCalculator,
} from "react-icons/hi2";

export const navData = [
    {   name: "Početna", 
        path: "/pvtuning", 
        icon: <HiHome /> 
    },
    {   name: "Informacije",
        path: "/info", 
        icon: <HiInformationCircle /> 
    },
    {   name: "usluge", 
        path: "/usluge", 
        icon: <HiRectangleGroup /> 
    },
    {   name: "galerija", 
        path: "/galerija", 
        icon: <HiViewColumns /> 
    },
    {   name: "kalkulator",
        path: "/kalkulator", 
        icon: <HiCalculator /> 
    },
    {   name: "kontakt", 
        path: "/kontakt", 
        icon: <HiChatBubbleBottomCenterText /> },
];