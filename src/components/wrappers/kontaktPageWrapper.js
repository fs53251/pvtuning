import KontaktPage from "../../container/kontaktPage/kontaktPage";
import {Helmet} from "react-helmet-async";

const KontaktPageWrapper = () => {
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
        <meta name="description" content="Kontaktirajte nas putem forme." />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="PVTuning, Desinec, pvt.tuning, pvt, pvttuning, Petar Volarić, mapiranje, remap, chiptuning, tuning, egr, dpf, dtc, adblue, lambda, performanse, brži auto, kvaliteta, ponuda usluga, sigurnost, snaga, FLEX, FLEX alat" />
        
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
        <meta name="subtitle1" content="Kontaktirajte nas" />
        <meta name="description1" content="Pošaljite nam mail s upitom za vaše vozilo. Odgovaramo u najkraćem mogućem roku." />


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
            <KontaktPage />
        </>
    );
};

export default KontaktPageWrapper;