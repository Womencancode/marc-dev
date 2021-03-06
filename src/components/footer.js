import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCode, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
    faCodepen,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    version
                    hostname
                }
            }
        }
    `)
    const metadata = data.site.siteMetadata

    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.line}>
                <FontAwesomeIcon icon={faCode} /> with{" "}
                <FontAwesomeIcon
                    icon={faHeart}
                    className={footerStyles.heart}
                />{" "}
                by {metadata.author} &copy; {new Date().getFullYear()}, built
                with
                <a href="https://www.gatsbyjs.org" alt="GatsbyJS">
                    <img
                        src="/images/gatsby-monogram.svg"
                        alt="GatsbyJS"
                        className={footerStyles.gatsbyLogo}
                    />
                </a>
            </p>
            <p className={footerStyles.social}>
                <a href="https://www.twitter.com/themarcba">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.youtube.com/channel/UC38jZDIKCdoB4H-XaDarrkA">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://github.com/themarcba">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://dev.to/themarcba">
                    <FontAwesomeIcon icon={faDev} />
                </a>
                <a href="https://codepen.io/_marcba">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
                <a href="https://www.linkedin.com/in/themarcba">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://ko-fi.com/themarcba">
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                </a>
            </p>
            <p className={footerStyles.small}>
                {metadata.hostname} v.{metadata.version}
            </p>
        </footer>
    )
}

export default Footer
