import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"

const IndexPage = (props) => {
  const intl = useIntl();
  const {pathname} = props.location;

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({id: "downloader-seo-title"})}
        pathname={pathname.replace(/^\/?[^\/]+/, "")}
        endpoint={pathname}
        description={intl.formatMessage({id: "downloader-seo-desc"})}
        index="index,follow"
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <div>
          <p><FormattedMessage id="downloader-desc"/></p>
        </div>
        <Converter/>
      </div>
      <Sections/>
    </Layout>
  )
};

export default IndexPage