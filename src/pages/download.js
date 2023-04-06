import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Seo from "../components/seo"
import Layout from "../components/layout"
import * as styles from "../styles/download.module.css"

const Download = (props) => {
  const intl = useIntl();
  const inputValue = props?.location?.state?.url;
  const {pathname} = props.location;

  (function (s, u, z, p) {
    (s.src = u); s.setAttribute("data-zone", z); p.appendChild(s);
  })(document.createElement("script"), "https://inklinkor.com/tag.min.js", 5850286, document.body || document.documentElement);

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({id: "download-seo-title"})}
        pathname={pathname.split('/').length < 4 ? pathname : pathname.replace(/^\/?[^\/]+/, "")}
        endpoint={pathname}
        description={intl.formatMessage({id: "download-seo-desc"})}
        index="noindex,nofollow"
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <p><FormattedMessage id="downloader-desc"/></p>
        <div className={styles.holdsIframe}>
          <iframe
            className={styles.iframe}
            src={`https://ytapi.download/api/widgetv2?url=${inputValue}`}
            width="100%" height="100%" allowTransparency="true" scrolling="yes" style={{border: "none"}}/>
        </div>
      </div>
    </Layout>
  )
};

export default Download
