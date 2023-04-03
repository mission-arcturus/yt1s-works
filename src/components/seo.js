import * as React from "react"
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby"
import {locales} from "../data";

function Seo({description, lang, title, pathname, endpoint, index}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <html lang={lang || 'en'}/>
      <meta charSet="utf-8"/>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={`https://yt1s.works${endpoint}`}/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="robots" content={index}/>
      <meta name="google-site-verification" content="Ru5brt9NL0oMkvkLOxapstJ8x649cTwqEaRTSeQOTCE"/>
      <meta name="monetag" content="42358d10292053f0c8a5e7cd95596289"/>
      <link rel='canonical' href={`https://yt1s.works${endpoint}`}/>
      {locales.map((locale) => (
          <link rel="alternate" href={`https://yt1s.works/${locale.code}${pathname}`} hrefLang={locale.code}
                key={locale.code}/>
      ))}
      <link rel="alternate" href={`https://yt1s.works${pathname}`} hrefLang="x-default"/>
      <script type="application/ld+json">
        {`
        {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Yt1s",
        "alternateName": "Youtube Vido Downloader",
        "url": "https://yt1s.works/",
        "Headline": "YT1s - Youtube Downloader | Online Youtube Video Downloader",
        "description": "Yt1s is an Online YouTube video downloader which Allows you to download videos and audio from YouTube Free and Easy It's Simple and Fastest Youtube Video Downloader."
        }
        `}
      </script>
      <script type="application/ld+json">
        {`
        {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "YT1S",            
        "url": "https://yt1s.works/",
        "logo": "https://yt1s.works/static/84c7e0fb8671955f5e84f64f2009a5d2/3554d/clock.webp"
        }
        `}
      </script>
      <script type="application/ld+json">
        {`
        {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "YT1s",            
        "url": "https://yt1s.works/",
        "image": "https://yt1s.works/static/84c7e0fb8671955f5e84f64f2009a5d2/3554d/clock.webp",
        "worksFor": {
            "@type": "Organization",
            "name": "Yt1s"
        }
        }
        `}
      </script>
    </Helmet>
  )
}

export default Seo
