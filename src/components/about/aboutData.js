import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { ImPriceTags } from "react-icons/im";
import Button from "../button_2/Button";

export const aboutData = [
    {
        title: "O nama",
        info: [
            {
                title: "Naziv Firme",
                value: "PVTuning"
            },
            {
                title: "Adresa (ZAGREB)",
                value: "Donji Desinec 130"
            },
            {
                title: "Telefon (ZAGREB)",
                value: "+385 91 5742 814"
            },
            {
                title: "Adresa (PULA)",
                value: "Savudrijska ulica 1"
            },
            {
                title: "Telefon (PULA)",
                value: "+385 95 342 0110"
            },
            
            {
                title: "Adresa (POREČ)",
                value: "Karla Huguesa 26a"
            },
            {
                title: "Telefon (POREČ)",
                value: "+385 99 413 3920"
            },
        ],
        button: <Button text="Kontaktiraj nas" hrefLink="/kontakt"/>
    },
    {
        title: "Mjesto",
        info: [
            "ZAGREB/JASTREBARSKO:",
            "Donji Desinec 130, Jastrebarsko",
            "Petar Volarić - (+385 99 756 5689)",
            "",
            "",
            "",
            "PULA:",
            "Savudrijska ul. 1, 52 100 Pula",
            "Mario Spremo - (+385 95 342 0110)",
            "",
            "",
            "",
            "POREČ:",
            "Karla Huguesa 26a Poreč",
            "Matija Leskovar - (+385 99 413 3920)"
        ],
        button: "",
    },
    {
        title: "Društvene mreže",
        info: [
            {
                title: "Instagram",
                value: <AiOutlineInstagram size={30} />,
                link: "https://www.instagram.com/pvttuning/"
            },
            {
                title: "Facebook",
                value: <AiOutlineFacebook size={30}/>,
                link: "https://www.facebook.com/PVTtuning/"
            },
            {
                title: "Web Stranica",
                value: <CgWebsite size={30}/>,
                link: "/kontakt"
            },
            {
                title: "Cjenik",
                value: <ImPriceTags size={30}/>,
                link: "/cjenik.pdf"
            },
        ],
        button: <Button text="kontaktiraj nas" hrefLink="/kontakt" />
    }
];
