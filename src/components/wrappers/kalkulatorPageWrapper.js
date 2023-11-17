import KalkulatorPage from "../../container/kalkulatorPage/kalkulatorPage";
import {Helmet} from "react-helmet-async";

const KalkulatorPageWrapper = () => {
    const organizationData = {
        name: "PVTuning",
        url: "https://www.pvttuning.com",
        logo: "/pvt_logo.png", // Relativna putanja u odnosu na public folder,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+385 99 7565 689",
          contactType: "kontakt",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Donji Desinec, 130",
          postalCode: "10450",
          addressLocality: "Jastrebarsko",
          addressCountry: "Hrvatska",
        },
      };
    return (
        <>
             <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>
        <link rel="icon" href="favicon.ico" />

        <link rel="canonical" href="/info" />
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="Kalkulator izračuna snage vozila" />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="snaga, izračun snage, koliko kilovata, njutnmetri, NM, KW, snaga auta, peroformanse, gains, klakulator gains, calculator gains" />
        
        {/* Meta Oznake (Meta Tags) */}
        <meta name="author" content="PVTuning" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Metapodaci (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pvttuning.com" />
        <meta property="og:title" content="PVTuning - Mapiranje, Chiptuning, Auto Dijagnostika" />
        <meta property="og:description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
        <meta property="og:image" content="pvt_logo.png" />

         {/* Twitter Metapodaci */}
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:title" content="PVTuning - Mapiranje, Chiptuning, Auto Dijagnostika" />
         <meta name="twitter:description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
         <meta name="twitter:image" content="pvt_logo.png"/>

          
        {/* Metapodaci za usluge */}
        <meta name="subtitle1" content="Izračun snage auta" />
        <meta name="description1" content="Izračunajte koliko možemo povećati performanse Vašeg vozila." />
        

        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "${organizationData.name}",
              "url": "${organizationData.url}",
              "logo": "${organizationData.logo}",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "${organizationData.contactPoint.telephone}",
                "contactType": "${organizationData.contactPoint.contactType}"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${organizationData.address.streetAddress}",
                "postalCode": "${organizationData.address.postalCode}",
                "addressLocality": "${organizationData.address.addressLocality}",
                "addressCountry": "${organizationData.address.addressCountry}"
              }
            }
          `}
        </script>
      </Helmet>
            <KalkulatorPage />
        </>
    );
};

export default KalkulatorPageWrapper;