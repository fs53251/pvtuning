import {
    TbReportAnalytics,
    TbTimelineEventX,

} from "react-icons/tb";

import {
    SlSpeedometer,

} from "react-icons/sl";

import {
    MdShutterSpeed,
    MdComputer,
    MdScreenRotationAlt,
    MdOutlineCrisisAlert,

} from "react-icons/md";

import {
    BsFire,
    BsFillSignStopFill,
    BsSpeedometer,

} from "react-icons/bs";

import {
    CgCarousel,

} from "react-icons/cg";

import {
    GiLiquidSoap,

} from "react-icons/gi";

import {
    BiWind,

} from "react-icons/bi";

import {
    RiSpeedFill,

} from "react-icons/ri";

import {
    FaExplosion,

} from "react-icons/fa6";

export const uslugeData = [
    {
        title: "AUTO DIJAGNOSTIKA",
        description: "Auto dijagnostika je temeljna usluga koja omogućava detaljno ispitivanje i analizu svih aspekata vašeg vozila, kako bi se identificirali mogući problemi, greške ili nedostaci. Ova usluga koristi napredne dijagnostičke alate i softverske sustave kako bi se brzo, precizno i učinkovito utvrdili potencijalni problemi u vašem automobilu. Bez obzira na marku i model vozila, auto dijagnostika je ključna za održavanje pouzdanosti i performansi vašeg automobila.",
        potential: [
            "Identificiranje problema: Auto dijagnostika pomaže u identifikaciji problema ili grešaka u vašem vozilu, čak i ako nisu vidljivi golim okom. To uključuje i očitavanje grešaka koje su pohranjene u računalu vozila.",
            "Prevencija većih kvarova: Rano otkrivanje problema omogućuje brzu intervenciju prije nego što se mali problemi pretvore u ozbiljne kvarove koji mogu biti skupi za popravak.",
            "Poboljšanje performansi: Auto dijagnostika može pomoći u optimizaciji performansi vašeg automobila, uključujući poboljšanje gorivne ekonomičnosti i snage motora.",
            "Smanjenje emisija: Identificiranjem problema sa sustavom emisija, auto dijagnostika doprinosi smanjenju negativnog utjecaja vozila na okoliš.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili imate sumnje u ispravnost vašeg vozila, auto dijagnostika je prvi korak prema održavanju vašeg vozila u vrhunskom stanju i osiguranju sigurne i učinkovite vožnje.",
        issueData: [
            "Upaljena kontrolna lampica 'Check Engine' na instrumentnoj ploči.",
            "Neobični zvukovi ili vibracije prilikom vožnje.",
            "Smanjena snaga motora ili problema s ubrzanjem.",
            "Loša gorivna ekonomičnost.",
            "Problemi s kočnicama, upravljanjem ili prijenosom.",
            "Sumnja u ispravnost emisijskih sustava.",
            "Bilo kakve promjene u performansama ili ponašanju vozila.",
        ],
        icon: <TbReportAnalytics />,
    },
    {
        title: `DSG REMAP`,
        description: "DSG REMAP je specijalizirana usluga tuninga automatskog DSG (Direct-Shift Gearbox) mjenjača, koja se provodi u različitim fazama (Stage 1, 2, 3) kako bi se optimizirala performansa, brzina promjene brzina i upravljanje vašim vozilom.",
        potential: [
            "Povećanje snage i okretnog momenta: DSG REMAP Stage 1, 2, 3 može povećati snagu i okretni moment vašeg motora, što rezultira bržim ubrzanjem i boljim performansama na cesti.",
            "Brže promjene brzina: Tuniranje DSG mjenjača omogućava brže i preciznije promjene brzina, što rezultira dinamičnijom i učinkovitijom vožnjom.",
            "Optimizacija gorivne ekonomičnosti: DSG REMAP može poboljšati gorivnu ekonomičnost vašeg vozila, što može rezultirati smanjenim troškovima goriva.",
            "Personalizacija vožnje: Ovisno o fazi tuninga (Stage 1, 2, 3), možete prilagoditi svoje vozilo prema vašim preferencijama i stilu vožnje.",
        ],
        issue: "Ako prepoznate bilo koji od ovih faktora, DSG REMAP može biti pravi korak kako biste poboljšali svoje vozačko iskustvo i učinili svoje vozilo još uzbudljivijim i efikasnijim.",
        issueData: [
            "Želja za poboljšanim performansama i dinamičnijom vožnjom.",
            "Želja za prilagodbom karakteristika mjenjača prema vlastitim preferencijama.",
            "Želja za smanjenjem potrošnje goriva i ekonomičnijom vožnjom.",
            "Vlasnici vozila s DSG mjenjačem koji žele iskoristiti puni potencijal svojeg vozila.",
        ],
        icon: <SlSpeedometer />,
    },
    {
        title: "CHIPTUNING REMAP (Akcija 200€ stage 1)",
        description: "CHIPTUNING REMAP Stage 1, 2, 3 je visoko specijalizirana usluga tuninga motora koja se provodi u različitim fazama kako bi se optimizirale performanse, snaga i ekonomičnost vašeg vozila. Ova usluga koristi naprednu tehniku programiranja elektroničke kontrole motora (ECU) kako bi se postigli bolji rezultati u vožnji. Svaka faza (Stage 1, 2, 3) pruža različite razine tuninga kako bi se zadovoljile potrebe i preferencije svakog vozača.",
        potential: [
            "Povećanje snage: CHIPTUNING REMAP može povećati snagu i okretni moment vašeg motora, što rezultira boljim ubrzanjem i višim maksimalnim brzinama.",
            "Optimizacija gorivne ekonomičnosti: Tuniranje ECU-a može poboljšati gorivnu ekonomičnost, što vodi do smanjenih troškova goriva.",
            "Dinamičnija vožnja: Tuniranje može poboljšati odziv papučice gasa i općenito poboljšati dinamičnost vožnje.",
            "Prilagodba karakteristika vožnje: Različite faze (Stage 1, 2, 3) omogućuju prilagodbu tuninga prema vašim željama i potrebama.",
            "Smanjenje emisija: U nekim slučajevima, CHIPTUNING REMAP može pomoći u smanjenju emisija ispušnih plinova.", 
        ],
        issue: "CHIPTUNING REMAP je idealna usluga za one koji žele maksimalno iskoristiti svoje vozilo, bilo da se radi o poboljšanju performansi, ekonomičnosti goriva ili prilagodbi vožnje prema vlastitim željama i potrebama",
        issueData: [
           "Želja za boljim performansama, bržim ubrzanjem i višim maksimalnim brzinama.",
           "Želja za smanjenjem troškova goriva i ekonomičnijom vožnjom.",
           "Želja za prilagodbom karakteristika vožnje prema vlastitim preferencijama.",
           "Vlasnici vozila koji žele iskoristiti puni potencijal svojeg vozila.",
           "Vozači koji žele dinamičniju i uzbudljiviju vožnju.",
        ],
        icon: <MdShutterSpeed />,
    },
    {
        title: "EGR REMOVAL",
        description: "EGR (Exhaust Gas Recirculation) REMOVAL je specijalizirana usluga koja se bavi uklanjanjem ili deaktivacijom EGR sustava u vašem vozilu. EGR sustav je odgovoran za recirkulaciju ispušnih plinova natrag u usisni kolektor radi smanjenja emisija dušikovih oksida (NOx). Međutim, ponekad EGR sustav može uzrokovati probleme, uključujući smanjenje performansi i povećanu potrošnju goriva. Usluga EGR REMOVAL-a omogućuje uklanjanje ili isključivanje ovog sustava kako bi se poboljšale performanse i ekonomičnost vašeg vozila.",
        potential: [
            "Poboljšane performanse: Uklanjanje ili isključivanje EGR sustava može rezultirati boljim odzivom motora i većim snižavanjem brzina.",
            "Smanjena potrošnja goriva: Poboljšanje performansi i isključivanje EGR sustava može rezultirati smanjenjem potrošnje goriva.",
            "Smanjeni troškovi održavanja: EGR sustav je osjetljiv na kvarove i često zahtijeva popravke. EGR REMOVAL može smanjiti potrebu za čestim odlascima u servis.",
            "Povećana trajnost vozila: Eliminiranje problema s EGR sustavom može produžiti vijek trajanja motora i drugih komponenti vozila.",
            "Ušteda novca: Kupci mogu uštedjeti na gorivu i održavanju nakon EGR REMOVAL usluge.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili imate sumnje u ispravnost EGR sustava u svom vozilu, EGR REMOVAL usluga može biti pravi korak kako biste poboljšali performanse i ekonomičnost vašeg automobila.",
        issueData: [
           "Smanjenje snage motora i slabiji odziv papučice gasa.",
           "Povećana potrošnja goriva.",
           "Česti problemi s EGR sustavom, uključujući blokade i kvarove.",
           "Povećane emisije ispušnih plinova ili neispravan sustav za kontrolu emisija.",
           "Želja za poboljšanim performansama i smanjenjem troškova goriva.",
        ],
        icon: <TbTimelineEventX />
    },
    {
        title: "HOT START FIXED",
        description: "HOT START FIXED je specijalizirana usluga koja se bavi rješavanjem problema vezanih uz teško pokretanje vozila u vrućim uvjetima nakon što je motor već bio uključen. Ova usluga se bavi problemima koji se često javljaju u modernim automobilima, a koji uzrokuju neugodnosti i potencijalne rizike za vozila. Cilj HOT START FIXED usluge je poboljšati pouzdanost i praktičnost vašeg vozila tako da se problemi s teškim pokretanjem u vrućini potpuno ili djelomično eliminiraju.",
        potential: [
            "Eliminacija neugodnih situacija: Problemi s teškim pokretanjem u vrućim uvjetima mogu biti frustrirajući i stvarati nepotrebnu nervozu. Ova usluga rješava taj problem.",
            "Povećana pouzdanost: Rješavanjem problema s teškim pokretanjem, vozilo postaje pouzdanije, što znači manju vjerojatnost da će se zaustaviti usred vožnje.",
            "Očuvanje vozila: Rješavanje ovih problema može produžiti vijek trajanja motora i drugih komponenata vozila.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili iskusite probleme s teškim pokretanjem u vrućini, HOT START FIXED usluga može poboljšati pouzdanost i praktičnost vašeg vozila u takvim uvjetima.",
        issueData: [
          "Teško pokretanje motora u vrućim uvjetima, često nakon što je motor već bio uključen.",
          "Ponavljajući problemi s paljenjem motora u visokim temperaturama.",
          "Neugodnosti ili potencijalni rizici povezani s teškim pokretanjem, posebno u prometu ili na putovanjima.",
          "Želja za povećanjem pouzdanosti i praktičnosti svog vozila, posebno u vrućim klimatskim uvjetima.",
        ],
        icon: <BsFire />,
    },
    {
        title: "DPF/FAP REMOVAL",
        description: "DPF (Diesel Particulate Filter) ili FAP (Filtre à Particules) REMOVAL je specijalizirana usluga koja se bavi uklanjanjem ili deaktivacijom DPF/FAP sustava u dizelskim vozilima. DPF/FAP sustav je dizajniran za smanjenje emisija čestica izdušnih plinova, ali može uzrokovati niz problema, uključujući začepljenje, smanjenje performansi i povećanu potrošnju goriva. Usluga DPF/FAP REMOVAL-a omogućava uklanjanje ili isključivanje ovog sustava kako bi se poboljšala pouzdanost, performanse i ekonomičnost vašeg vozila.",
        potential: [
            "Poboljšane performanse: Uklanjanje ili isključivanje DPF/FAP sustava može rezultirati boljim odzivom motora i većim snižavanjem brzina.",
            "Ekonomičnost goriva: Poboljšanje performansi i isključivanje DPF/FAP sustava može rezultirati smanjenjem potrošnje goriva.",
            "Smanjeni troškovi održavanja: DPF/FAP sustav je osjetljiv na kvarove i začepljenje. DPF/FAP REMOVAL može smanjiti potrebu za čestim posjetima servisu.",
            "Prilagodba vozila: Ova usluga omogućava prilagodbu vozila za specifične radne uvjete i potrebe vozača.",
            "Povećana pouzdanost: Rješavanjem problema s DPF/FAP sustavom, vozilo postaje pouzdanije.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili iskusite probleme s DPF/FAP sustavom, DPF/FAP REMOVAL usluga može poboljšati rad i učinkovitost vašeg vozila, čineći ga pouzdanijim i ekonomičnijim.",
        issueData: [
          "Česti problemi s DPF/FAP sustavom, uključujući začepljenje, upaljenu kontrolnu lampicu 'DPF' ili 'Check Engine'.",
          "Smanjenje performansi i odziva motora.",
          "Povećana potrošnja goriva, osobito u gradu.",
          "Želja za poboljšanjem pouzdanosti, ekonomičnosti i performansi vozila.",
        ],
        icon: <CgCarousel />,
    },
    {
        title: "DTC REMOVAL",
        description: "DTC REMOVAL (Diagnostic Trouble Code Removal) je specijalizirana usluga koja se bavi brisanjem dijagnostičkih grešaka i kodova pogrešaka iz elektroničkog sustava vozila. DTC-ovi su kodovi pogrešaka koji se generiraju i pohranjuju u vozilu kada se detektira problem u različitim komponentama i sustavima automobila. Ova usluga omogućava uklanjanje tih kodova iz ECU-a (Engine Control Unit) kako bi se izbjegla upaljena kontrolna lampica 'Check Engine' ili druge dijagnostičke greške koje mogu ometati normalan rad vozila.",
        potential: [
           "Eliminacija upaljenih kontrolnih lampica: Upaljena kontrolna lampica 'Check Engine' može biti frustrirajuća i stvarati nervozu kod vozača. DTC REMOVAL usluga rješava ovaj problem.",
           "Povećana pouzdanost: Uklanjanjem lažnih dijagnostičkih grešaka, vozilo postaje pouzdanije jer se izbjegavaju nepotrebni problemi i troškovi servisa.",
           "Ispravan rad vozila: Ova usluga osigurava da vaše vozilo nastavi normalno raditi bez prekida uzrokovanih dijagnostičkim kodovima.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite osigurati da vaše vozilo radi bez problema uzrokovanih dijagnostičkim kodovima, DTC REMOVAL usluga može vam pomoći u rješavanju tih problema i poboljšanju ispravnosti vašeg vozila.",
        issueData: [
          "Upaljena kontrolna lampica 'Check Engine' na instrumentnoj ploči.",
          "Osjećaj da vozilo radi normalno, ali se upaljena kontrolna lampica ne gasi.",
          "Pristizanje kodova pogrešaka tijekom dijagnostičkog pregleda kod mehaničara ili servisa.",
          "Želja za eliminacijom upaljenih kontrolnih lampica radi veće sigurnosti i komfora tijekom vožnje.",
        ],
        icon: <MdComputer />,
    },
    {
        title: "RPM/REV LIMITER",
        description: "RPM/REV LIMITER je usluga tuninga koja se bavi prilagodbom i optimizacijom ograničenja broja okretaja (RPM - Revolutions Per Minute) u motoru vašeg vozila. Ovaj tuning omogućava povećanje maksimalnog broja okretaja motora ili prilagodbu postojećih ograničenja kako bi se postigle bolje performanse i dinamika vožnje. RPM/REV LIMITER usluga je popularna među entuzijastima i vozačima koji žele dodatnu snagu i kontrolu nad svojim vozilima.",
        potential: [
            "Poboljšane performanse: Povećanje maksimalnog broja okretaja omogućava bolje performanse vozila, uključujući brže ubrzanje i veću maksimalnu brzinu.",
            "Dinamičnija vožnja: Vozači koji žele uživati u dinamičnijoj i uzbudljivijoj vožnji biraju RPM/REV LIMITER uslugu.",
            "Sportski tuning: Entuzijasti i vlasnici sportskih automobila često se odlučuju za ovu uslugu kako bi izvukli maksimum iz svojih vozila na stazi ili cesti.",
            "Prilagodba preferencijama: RPM/REV LIMITER omogućava vozačima da prilagode svoje vozilo svojim željama i stilu vožnje.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite unaprijediti performanse i dinamiku vožnje svog vozila, RPM/REV LIMITER usluga može vam omogućiti da iskoristite puni potencijal vašeg automobila.",
        issueData: [
            "Želja za povećanjem snage i performansi svog vozila.",
            "Osjećaj da vozilo može pružiti više, ali je ograničeno maksimalnim brojem okretaja.",
            "Potreba za boljim odzivom papučice gasa i dinamičnijom vožnjom.",
            "Želja za prilagodbom vozila za sportske ili utrke svrhe.",
        ],
        icon: <MdScreenRotationAlt />,
    },
    {
        title: "ADBLUE OFF/SCR",
        description: "ADBLUE OFF/SCR je specijalizirana usluga koja se bavi isključivanjem ili deaktivacijom Adblue sustava (Selective Catalytic Reduction - SCR) u dizelskim vozilima. Adblue sustav je dizajniran za smanjenje emisija dušikovih oksida (NOx) u ispušnim plinovima putem ubrizgavanja posebnog uree (AdBlue) aditiva. Međutim, ovaj sustav može uzrokovati određene neugodnosti i troškove vozačima. ADBLUE OFF/SCR usluga omogućava isključivanje tog sustava kako bi se izbjegli problemi i smanjili troškovi povezani s AdBlue tekućinom.",
        potential: [
           "Smanjenje troškova: Vozači žele smanjiti troškove povezane s nadopunjavanjem i popravcima Adblue sustava.",
           "Povećanje pouzdanosti: Isključivanjem Adblue sustava, vozilo postaje manje osjetljivo na poteškoće i kvarove u vezi s AdBlue tekućinom.",
           "Praktičnost: Vozači žele olakšati vožnju bez brige o AdBlue tekućini i njezinim ograničenjima.",
           "Prilagodba potrebama: ADBLUE OFF/SCR usluga omogućava vozačima da prilagode svoje vozilo prema vlastitim potrebama i preferencijama.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite smanjiti troškove i povećati praktičnost svog vozila tako da se ne morate brinuti o AdBlue tekućini, ADBLUE OFF/SCR usluga može biti odličan izbor za vas.",
        issueData: [
           "Konstantno upozorenje o AdBlue tekućini na instrumentnoj ploči.",
           "Poteškoće ili neispravnosti Adblue sustava.",
           "Želja za smanjenjem troškova vezanih uz AdBlue tekućinu i povećanje pouzdanosti vozila.",
           "Potreba za prilagodbom vozila za specifične potrebe i preferencije vozača.",
        ],
        icon: <GiLiquidSoap />,
    },
    {
        title: "INTAKE/SWIRL FLAPS OFF",
        description: "INTAKE/SWIRL FLAPS OFF je specijalizirana usluga tuninga koja se bavi isključivanjem ili deaktivacijom usisnih (intake) ili swirl flaps-a u motorima dizelskih vozila. Swirl flaps-i su pomične komponente u usisnom sustavu koje se koriste za kontrolu strujanja zraka prema cilindrima motora. Ova usluga omogućava isključivanje tih flaps-a kako bi se postigle bolje performanse, poboljšana pouzdanost i smanjeni potencijalni problemi u motoru.",
        potential: [
          "Povećanje performansi: Vozači žele poboljšati odziv motora i brzinu vozila.",
          "Poboljšanje pouzdanosti: Isključivanjem swirl flaps-a, vozilo postaje pouzdanije jer se izbjegavaju problemi povezani s tim komponentama.",
          "Smanjenje troškova: Vozači žele smanjiti troškove povezane s održavanjem i popravcima swirl flaps-a.",
          "Prilagodba vozila: INTAKE/SWIRL FLAPS OFF usluga omogućava vozačima prilagodbu svojih vozila za sportske svrhe ili prema vlastitim preferencijama.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite poboljšati performanse i pouzdanost svog vozila, INTAKE/SWIRL FLAPS OFF usluga može vam pomoći postići te ciljeve i unaprijediti vaše iskustvo vožnje.",
        issueData: [
           "Problemi sa swirl flaps-ima, uključujući lomljenje, začepljenje ili kvarove.",
           "Osjećaj da vozilo ne pruža željeni odziv i performanse.",
           "Želja za smanjenjem troškova održavanja i popravaka swirl flaps-a.",
           "Potreba za prilagodbom vozila za sportske svrhe ili osobne preferencije.",
        ],
        icon: <BiWind />,
    },
    {
        title: "LAMBDA/O2 REMOVAL",
        description: "LAMBDA/O2 REMOVAL je specijalizirana usluga tuninga i mapiranja koja se bavi deaktivacijom ili isključivanjem Lambda sondi (Oxygen sensors ili O2 senzora) u ispušnom sustavu vozila. Lambda sonde su senzori koji mjere količinu kisika u ispušnim plinovima i pomažu u pravilnom doziranju smjese goriva i zraka za optimalno sagorijevanje. Ova usluga omogućava isključivanje tih senzora kako bi se postigle bolje performanse, veća snaga i tuning motora prema specifičnim zahtjevima vozača.",
        potential: [
          "Povećanje performansi: Vozači žele povećati performanse svojeg vozila kako bi dobili bolje ubrzanje i veću snagu.",
          "Prilagodba specifičnim potrebama: Entuzijasti i vozači žele prilagoditi svoje vozilo za sportsku vožnju ili utrke kako bi postigli optimalne performanse.",
          "Bolji odziv motora: Isključivanjem Lambda/O2 senzora može se poboljšati odziv motora i ubrzanje.",
          "Uklanjanje ograničenja: Vozači žele ukloniti ograničenja koja su nametnuta radi ekološke kompatibilnosti i dobiti veću slobodu tuninga.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite poboljšati performanse svog vozila i prilagoditi ga prema svojim specifičnim potrebama, LAMBDA/O2 REMOVAL usluga može vam omogućiti da iskoristite puni potencijal vašeg automobila.",
        issueData: [
          "Želja za povećanjem performansi i snage svog vozila.",
          "Osjećaj da vozilo ne reagira dovoljno brzo na promjene u papučici gasa.",
          "Potreba za prilagodbom vozila za sportske svrhe ili utrke.",
          "Želja za uklanjanjem ograničenja i tuningom motora prema vlastitim preferencijama.",
        ],
        icon: <MdOutlineCrisisAlert />,
    },
    {
        title: "LAUNCH CONTROL",
        description: "LAUNCH CONTROL je usluga tuninga i mapiranja koja se odnosi na aktivaciju ili optimizaciju funkcije lansiranja (launch control) u vašem vozilu. Launch control je posebna značajka koja omogućava vozaču da postigne optimalan start s mjesta pri visokim okretajima motora i maksimalnoj trakciji. Ova usluga se često koristi u sportskim automobilima i vozilima za utrke kako bi se postigao najbrži mogući start.",
        potential: [
            "Poboljšanje performansi: Vozači žele postići maksimalne performanse i ubrzanje iz stanja mirovanja.",
            "Sportske svrhe: Vlasnici sportskih automobila često koriste launch control za poboljšanje svojih rezultata na stazi i sportskim događanjima.",
            "Siguran start: Korištenje launch control funkcije može pomoći u osiguranju sigurnog i kontroliranog starta, posebno na klizavim ili zahtjevnim podlogama.",
            "Uživanje u vožnji: Vozači koji žele iskusiti uzbuđenje brzog starta koriste ovu uslugu za dodatnu zabavu tijekom vožnje.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite poboljšati svoje startne performanse i uživati u sportskom voženju, LAUNCH CONTROL usluga može vam pomoći postići te ciljeve i dodati dodatnu dinamiku vašem vozilu.",
        issueData: [
            "Želja za postizanjem bržeg i učinkovitijeg starta s mjesta, posebno na stazi ili u sportskim situacijama.",
            "Vlasnik sportskog automobila ili automobila s visokim performansama koji želi iskoristiti puni potencijal svog vozila.",
            "Potreba za boljom kontrolom trakcije i smanjenjem proklizavanja kotača pri startu.",
            "Želja za uživanjem u sportskim voznim iskustvima i uzbuđenjem brze vožnje.",
        ],
        icon: <RiSpeedFill />,
    },
    {
        title: "POPCORN",
        description: "POPCORN je specijalizirana usluga tuninga i mapiranja koja se bavi aktivacijom ili optimizacijom funkcije 'popcorn' izlaznih plinova (popcorn limiter) na vozilima s izdušnim sustavom. 'Popcorn' ili 'popcorn limiter' je značajka koja stvara karakterističan zvuk prilikom spuštanja okretaja motora nakon brze vožnje. Ova značajka često se koristi u sportskim automobilima kako bi se stvorio impresivan zvuk ispušnih plinova i poboljšalo sportsko iskustvo vožnje.",
        potential: [
            "Jedinstveni zvuk: Vozači žele stvoriti jedinstveni zvuk svog vozila koji će se razlikovati od drugih.",
            "Sportsko iskustvo: Korištenje 'popcorn' zvuka pruža sportsko iskustvo tijekom vožnje, što može biti posebno privlačno ljubiteljima brzih automobila.",
            "Estetska vrijednost: 'Popcorn' zvuk može dodati estetsku vrijednost vozilu i privući pozornost ljubitelja automobila.",
            "Izražavanje stila: Prilagodba vozila s 'popcorn' funkcijom omogućava vozačima izražavanje svog osobnog stila i preferencija.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite dodati posebnu značajku svojem vozilu koja će ga učiniti jedinstvenim i izraziti vaš osobni stil, POPCORN usluga može vam pomoći postići te ciljeve i dodati dozu ekskluzivnosti vašem automobilu.",
        issueData: [
            "Želja za dodavanjem jedinstvenog zvuka ispušnih plinova svom vozilu.",
            "Interes za poboljšanjem sportskog iskustva vožnje i stvaranjem impresivnog zvuka tijekom brze vožnje.",
            "Estetski interes u dodavanju estetske vrijednosti vozilu i privlačenju pažnje.",
            "Potreba za prilagodbom vozila kako bi se izrazio osobni stil i preferencije.",   
        ],
        icon: <FaExplosion />,
    },
    {
        title: "START/STOP DISABLE OFF",
        description: "START/STOP DISABLE OFF je specijalizirana usluga tuninga koja se bavi isključivanjem ili deaktivacijom funkcije automatskog zaustavljanja i ponovnog pokretanja motora (start/stop system) na vašem vozilu. Start/stop sustav automatski zaustavlja motor tijekom kratkih stanja mirovanja kako bi se smanjila potrošnja goriva i emisija ispušnih plinova. No, neki vozači žele imati potpunu kontrolu nad svojim vozilima i mogu smatrati da je ova značajka neželjena. START/STOP DISABLE OFF usluga omogućava im isključivanje ovog sustava.",
        potential: [
           "Kontrola nad vozilom: Vozači žele zadržati potpunu kontrolu nad svojim vozilima i odlučiti kada će motor biti uključen ili isključen.",
           "Smanjenje nelagode: Osobe koje smatraju da je automatsko zaustavljanje i ponovno pokretanje motora neugodno ili iritantno žele se osloboditi te nelagode.",
           "Očuvanje trajnosti: Vozači žele produžiti trajnost komponenata motora i smanjiti potrebu za popravcima.",
           "Brža reakcija: Deaktivacija start/stop sustava omogućava bolju i bržu reakciju vozila, što je važno u određenim situacijama.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite poboljšati svoje iskustvo vožnje i imati potpunu kontrolu nad svojim vozilom, START/STOP DISABLE OFF usluga može vam pomoći postići te ciljeve i prilagoditi svoje vozilo prema vašim preferencijama.",
        issueData: [
            "Želja za potpunom kontrolom nad autom i isključivanjem automatskog zaustavljanja i pokretanja motora.",
            "Osjećaj nelagode ili iritacije uzrokovan automatskim zaustavljanjem i ponovnim pokretanjem motora.",
            "Želja za produžetkom trajnosti komponenata motora i smanjenjem troškova popravaka.",
            "Potreba za bržom reakcijom vozila u situacijama koje zahtijevaju brzi start.",
        ],
        icon: <BsFillSignStopFill />,
    },

    {
        title: "SPEED LIMITER OFF",
        description: "SPEED LIMITER OFF je specijalizirana usluga tuninga koja se bavi isključivanjem ili deaktivacijom brzinskog ograničenja (speed limiter) na vašem vozilu. Brzinski ograničivač je sigurnosna značajka koja automatski ograničava maksimalnu brzinu vozila na određenu vrijednost. Ova usluga omogućava isključivanje tog ograničenja kako bi se postigla veća brzina i performanse, posebno za vozače koji žele iskusiti pun potencijal svojeg vozila.",
        potential: [
          "Povećanje brzine: Vozači žele postići veće maksimalne brzine i povećati performanse svog vozila.",
          "Sportske svrhe: Vlasnici sportskih automobila ili entuzijasti žele iskusiti puni potencijal svojeg vozila na stazi ili tijekom sportskih događanja.",
          "Sportsko iskustvo: Korisnici žele uživati u bržem i uzbudljivijem sportskom iskustvu tijekom vožnje.",
          "Prilagodba vozila: SPEED LIMITER OFF usluga omogućava prilagodbu vozila prema vlastitim preferencijama i stilu vožnje.",
        ],
        issue: "Ako primijetite bilo koji od ovih znakova ili želite poboljšati brzinske performanse svog vozila i uživati u sportskom iskustvu vožnje, SPEED LIMITER OFF usluga može vam pomoći postići te ciljeve i iskoristiti pun potencijal vašeg automobila.",
        issueData: [
            "Želja za postizanjem većih maksimalnih brzina i boljih performansi svojeg vozila.",
            "Vlasnik sportskog automobila ili vozila s visokim performansama koji želi iskoristiti puni potencijal vozila.",
            "Želja za uživanjem u bržoj i uzbudljivijoj vožnji, posebno na stazi.",
            "Potreba za prilagodbom vozila kako bi se izrazio osobni stil i preferencije.",
        ],
        icon: <BsSpeedometer />,
    },
];