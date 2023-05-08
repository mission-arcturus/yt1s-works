import * as React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image";
import { changeLocale, IntlContextConsumer, Link, useIntl } from "gatsby-plugin-intl"
import Navigation from "./navigation"
import * as styles from "../styles/header.module.css"
import { languageName, localLang } from "../data";

const Header = () => {
  const intl = useIntl();
  const [openLang, setOpenLang] = useState(false);
  const filtered = localLang.filter((item) => item.code === intl.locale)

  return (
    <header>
      <div className={styles.mainHeader}>
        <Link
          className={styles.logo} to="/">
          <StaticImage src="../images/logo.svg" loading="eager" alt="logo" quality={100} />
          <span className={styles.LinkTitle}>YT1s</span>
        </Link>
        <div className={styles.language}>
          <div style={{ display: "flex" }} onClick={() => setOpenLang(!openLang)}>
            <div>{filtered[0]?.text}</div>
            <div>
              <StaticImage
                className={styles.arrowIcon}
                src="../images/arrow.svg"
                loading="eager"
                alt="logo" quality={100} />
            </div>
          </div>
        </div>
        <div>
          <IntlContextConsumer>
            {({ languages }) => (
              <div>
                {openLang &&
                  <ul className={styles.subMenuLang}>
                    {languages.map(language => (
                      language !== "en" ?
                        <li className={styles.list}>
                          <a className={styles.languageName}
                            key={language}
                            onClick={() => changeLocale(language !== "en" ? language : "en")}>
                            {languageName[language]}
                          </a>
                        </li>
                        : ''
                    ))}
                  </ul>
                }
              </div>
            )}
          </IntlContextConsumer>
        </div>
      </div>
      <Navigation />
    </header>
  )
};

export default Header
