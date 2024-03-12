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
                title: "Adresa",
                value: "Donji Desinec 130"
            },
            {
                title: "Telefon",
                value: "+385 91 574 2814"
            },
            {
                title: "E-mail",
                value: "pvt.tuning@gmail.com"
            },
            {
                title: "Vlasnik",
                value: "Petar Volarić"
            }
        ],
        button: <Button text="Kontaktiraj nas" hrefLink="/kontakt"/>
    },
    {
        title: "Usluge",
        info: [
            "DSG REMAP, STAGE 1 2 3",
            "CHIPTUNING REMAP STAGE 1 2 3",
            "EGR REMOVAL",
            "DPF/FAP REMOVAL",
            "DTC REMOVAL",
            "ADBLUE OFF/SCR",
            "ADITIVE PUMP OFF",
            "INTAKE/SWIRL FLAPS OFF",
            "LAMBDA/O2 REMOVAL",
        ],
        button: <Button text="Više usluga" hrefLink="/usluge"/>
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
        button: <Button text="kontakriraj nas" hrefLink="/kontakt" />
    }
];
