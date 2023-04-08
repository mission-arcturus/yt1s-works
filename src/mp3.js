import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {FormattedMessage} from "gatsby-plugin-intl"

export const bestDescription = [
  {
    description:
      <>
        <FormattedMessage id="best-desc-one-mp3-our" defaultMessage=" "/>
        <a href="https://yt1s.works/en/youtube-to-mp3/" style={{textDecoration: "none"}}>
          <FormattedMessage id="best-desc-one-mp3-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="best-desc-one-mp3"/>
      </>
  },
  {description: <FormattedMessage id="best-desc-two-mp3"/>}
];

export const links = [
  {
    text: <FormattedMessage id="box-title-one-mp3"/>,
    url: (<StaticImage src="./images/clock.svg" loading="eager" alt="clock" width={200} quality={100}/>),
    style: {background: "#d2e3fc"},
    description:
      <>
        <a href="https://yt1s.works/en/youtube-to-mp3/" style={{textDecoration: "none"}}>
          <FormattedMessage id="box-desc-one-mp3-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="box-desc-one-mp3"/>
      </>
  },
  {
    text: <FormattedMessage id="box-title-two-mp3"/>,
    url: (<StaticImage src="./images/limit.svg" loading="eager" alt="limit" width={200} quality={100}/>),
    style: {background: "#fad2cf"},
    description:
      <>
        <a href="https://yt1s.works/en/youtube-to-mp3/" style={{textDecoration: "none"}}>
          <FormattedMessage id="box-desc-two-mp3-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="box-desc-two-mp3"/>
      </>
  },
  {
    text: <FormattedMessage id="box-title-three-mp3"/>,
    url: (<StaticImage src="./images/safe.svg" loading="eager" alt="safe" width={200} quality={100}/>),
    style: {background: "#ceead6"},
    description: <FormattedMessage id="box-desc-three-mp3"/>
  },
  {
    text: <FormattedMessage id="box-title-four-mp3"/>,
    url: (<StaticImage src="./images/platform.svg" loading="eager" alt="platform" width={200} quality={100}/>),
    style: {background: "#feefc3"},
    description: <FormattedMessage id="box-desc-four-mp3"/>
  },
  {
    text: <FormattedMessage id="box-title-five-mp3"/>,
    url: (<StaticImage src="./images/support.svg" loading="eager" alt="support" width={200} quality={100}/>),
    style: {background: "#ffd5ec"},
    description: <FormattedMessage id="box-desc-five-mp3"/>
  },
  {
    text: <FormattedMessage id="box-title-six-mp3"/>,
    url: (<StaticImage src="./images/cloud.svg" loading="eager" alt="cloud" width={200} quality={100}/>),
    style: {background: "#d1f4ff"},
    description: <FormattedMessage id="box-desc-six-mp3"/>
  }
];

export const typeIcon = [
  {url: (<StaticImage src="./images/icon1.svg" loading="eager" alt="icon1" quality={100}/>)},
  {url: (<StaticImage src="./images/icon2.svg" loading="eager" alt="icon2" quality={100}/>)},
  {url: (<StaticImage src="./images/icon3.svg" loading="eager" alt="icon3" quality={100}/>)},
  {url: (<StaticImage src="./images/icon4.svg" loading="eager" alt="icon4" quality={100}/>)},
  {url: (<StaticImage src="./images/icon5.svg" loading="eager" alt="icon5" quality={100}/>)}
];

export const typeDesc =
  <>
    <a href="https://yt1s.works/en/" style={{textDecoration: "none"}}>
      <FormattedMessage id="download-extensions-desc-mp3-key" defaultMessage=" "/>
    </a>
    <FormattedMessage id="download-extensions-desc-mp3"/>
  </>

export const stepCount = [
  {
    number: 1,
    description: <FormattedMessage id="how-download-desc-one-mp3"/>,
    style: {background: "#d2e3fc", color: "#4285f4"}
  },
  {
    number: 2,
    description: <FormattedMessage id="how-download-desc-two-mp3"/>,
    style: {background: "#fad2cf", color: "#ed6357"}
  },
  {
    number: 3,
    description: <FormattedMessage id="how-download-desc-three-mp3"/>,
    style: {background: "#ceead6", color: "#34a853"}
  }
];