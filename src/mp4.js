import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {FormattedMessage} from "gatsby-plugin-intl"

export const bestDescription = [
  {
    description:
      <>
        <a href="https://yt1s.works/ena/" style={{textDecoration: "none"}}>
          <FormattedMessage id="best-desc-one-mp4-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="best-desc-one-mp4"/>
      </>
  },
  {description: <FormattedMessage id="best-desc-two-mp4"/>}
];

export const links = [
  {
    text: <FormattedMessage id="box-title-one-mp4"/>,
    url: (<StaticImage src="./images/clock.svg" loading="eager" alt="clock" width={200} quality={100}/>),
    style: {background: "#d2e3fc"},
    description:
      <>
        <FormattedMessage id="box-desc-one-mp4-our" defaultMessage=" "/>
        <a href="https://yt1s.works/youtube-to-mp4/" style={{textDecoration: "none"}}>
          <FormattedMessage id="box-desc-one-mp4-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="box-desc-one-mp4"/>
      </>
  },
  {
    text: <FormattedMessage id="box-title-two-mp4"/>,
    url: (<StaticImage src="./images/limit.svg" loading="eager" alt="limit" width={200} quality={100}/>),
    style: {background: "#fad2cf"},
    description: <FormattedMessage id="box-desc-two-mp4"/>
  },
  {
    text: <FormattedMessage id="box-title-three-mp4"/>,
    url: (<StaticImage src="./images/safe.svg" loading="eager" alt="safe" width={200} quality={100}/>),
    style: {background: "#ceead6"},
    description: <FormattedMessage id="box-desc-three-mp4"/>
  },
  {
    text: <FormattedMessage id="box-title-four-mp4"/>,
    url: (<StaticImage src="./images/platform.svg" loading="eager" alt="platform" width={200} quality={100}/>),
    style: {background: "#feefc3"},
    description: <FormattedMessage id="box-desc-four-mp4"/>
  },
  {
    text: <FormattedMessage id="box-title-five-mp4"/>,
    url: (<StaticImage src="./images/support.svg" loading="eager" alt="support" width={200} quality={100}/>),
    style: {background: "#ffd5ec"},
    description:
      <>
        <a href="https://yt1s.works/ena/" style={{textDecoration: "none"}}>
          <FormattedMessage id="box-desc-five-mp4-key" defaultMessage=" "/>
        </a>
        <FormattedMessage id="box-desc-five-mp4"/>
      </>
  },
  {
    text: <FormattedMessage id="box-title-six-mp4"/>,
    url: (<StaticImage src="./images/cloud.svg" loading="eager" alt="cloud" width={200} quality={100}/>),
    style: {background: "#d1f4ff"},
    description: <FormattedMessage id="box-desc-six-mp4"/>
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
    <FormattedMessage id="download-extensions-desc-mp4-this" defaultMessage=" "/>
    <a href="https://yt1s.works/youtube-to-mp4/" style={{textDecoration: "none"}}>
      <FormattedMessage id="download-extensions-desc-mp4-key" defaultMessage=" "/>
    </a>
    <FormattedMessage id="download-extensions-desc-mp4"/>
  </>

export const stepCount = [
  {
    number: 1,
    description: <FormattedMessage id="how-download-desc-one-mp4"/>,
    style: {background: "#d2e3fc", color: "#4285f4"}
  },
  {
    number: 2,
    description: <FormattedMessage id="how-download-desc-two-mp4"/>,
    style: {background: "#fad2cf", color: "#ed6357"}
  },
  {
    number: 3,
    description: <FormattedMessage id="how-download-desc-three-mp4"/>,
    style: {background: "#ceead6", color: "#34a853"}
  }
];