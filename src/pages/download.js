import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Seo from "../components/seo"
import Layout from "../components/layout"
import * as styles from "../styles/download.module.css"
import {useState} from "react";

const Download = (props) => {
  const [openModel, setOpenModel] = useState(true)
  const [downloadVideo, setDownloadVideo] = useState(false)
  const intl = useIntl();
  const inputValue = props?.location?.state?.url;
  const videoDetails = props?.location?.state?.item;
  const {pathname} = props.location;

  const handleClickDownload = () => {
    window.open("//chalaips.com/4/5964161");
    setDownloadVideo(!downloadVideo)
  }

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const loadExternalScript = (domain, id) => {
      const script = document.createElement("script");
      script.src = `https://${domain}/401/${id}`;
      (document.body || document.documentElement).appendChild(script);
    };

    loadExternalScript("goomaphy.com", 5964168);
  }

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
        {videoDetails &&
          <div className={styles.videoHead}>
            <div>
              <img style={{margin: "0 0.5rem"}} height="64px" width="82px" src={videoDetails?.imgSrc}/>
            </div>
            <div className={styles.videoMinutes}>
              <div>
                <h2 className={styles.downTitle}>{videoDetails?.title}</h2>
                <p className={styles.viewVid}>View: {videoDetails?.views}</p>
              </div>
              <div>{videoDetails?.duration}</div>
            </div>
            <div>
              <button className={styles.downBtn} onClick={() => setOpenModel(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                        clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        }
        {openModel &&
          <div className={styles.downloaderWrap}>
            <div className={styles.downloadwrapper}>
              <button className={styles.downloadMP3} onClick={handleClickDownload}>DOWNLOAD MP3</button>
              <button className={styles.downloadMP4} onClick={handleClickDownload}>DOWNLOAD MP4</button>
            </div>
            <div className={styles.adsWrapper}>
              <a href="//thaudray.com/4/5964142" target="_blank" rel="noreferrer" className={styles.adsDown}>DOWNLOAD
                NOW</a>
              <a href="//thaudray.com/4/5964142" target="_blank" rel="noreferrer" className={styles.adsPlay}>PLAY
                NOW</a>
            </div>
          </div>
        }
        {downloadVideo &&
          <div className={styles.holdsIframe}>
            <iframe
              className={styles.iframe}
              src={`https://ytconvert.me/api/widgetv2?url=${inputValue}`}
              sandbox="allow-scripts allow-same-origin allow-presentation allow-downloads allow-forms"
              width="100%" height="100%" allowTransparency="true" scrolling="yes" style={{border: "none"}}/>
          </div>
        }
      </div>
    </Layout>
  )
};

export default Download
