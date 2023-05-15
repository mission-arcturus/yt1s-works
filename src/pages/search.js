import * as React from "react"
import {useEffect, useState} from "react"
import axios from "axios"
import {FormattedMessage, navigate, useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Sections from "../components/sections"
import * as styles from "../styles/index.module.css"
import Seo from "../components/seo"

const Search = (props) => {
  const intl = useIntl();
  const {pathname} = props.location
  const inputValue = props?.location?.state?.url;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://me0xn4hy3i.execute-api.us-east-1.amazonaws.com/staging/api/resolve/resolveYoutubeSearch?search=${inputValue}`)
      .then((result) => {
        setLoading(false);
        setList(result.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [inputValue]);

  const handleClickVideo = (value) => {
    navigate(`/download`, {state: {url: value}})
  };

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({id: "search-seo-title"})}
        pathname={pathname.split('/').length < 4 ? pathname : pathname.replace(/^\/?[^\/]+/, "")}
        endpoint={pathname}
        description={intl.formatMessage({id: "search-seo-desc"})}
        index="noindex,nofollow"
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <p><FormattedMessage id="downloader-desc"/></p>
        <div>
          {loading &&
            <img
              alt="logo"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;background:%23fff;display:block;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cg transform='translate(20 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23e15b64'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.375s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(40 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23f8b26a'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.25s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(60 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%23abbd81'%3E%3CanimateTransform attributeName='transform' type='scale' begin='-0.125s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3Cg transform='translate(80 50)'%3E%3Ccircle cx='0' cy='0' r='6' fill='%2381a3bd'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3C/svg%3E"
            />}
          <ul className={styles.listVideo}>
            {list.map((item, i) => (
              <li key={i}
                  className={styles.videoBox}
                  onClick={() => handleClickVideo(item.url)}>
                <img
                  className={styles.videoImg}
                  src={item.imgSrc}
                  alt="img"/>
                <h3 className={styles.videoHeading}>{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Sections/>
    </Layout>
  )
};

export default Search
