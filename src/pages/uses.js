import React from "react"
import Layout from "../components/layout"
import mainStyles from "../styles/main.module.scss"
import Head from "../components/head"

const UsesPage = props => {
    return (
        <Layout>
            <Head title="Uses" path={props.path} />
            <div className={mainStyles.postContent}>
                <p>
                    Sometimes, people ask me what IDE, theme, font, etc I use.
                    So I decided to write up a little post that sums up. This
                    page is inspired by{" "}
                    <a href="https://wesbos.com/uses">Wes Bos' uses page</a>.
                </p>

                <h1>Editor + Terminal</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Code Editor</td>
                        <td>
                            <a href="https://code.visualstudio.com">VS Code</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Theme</td>
                        <td>
                            <a href="https://marketplace.visualstudio.com/items?itemName=teabyii.ayu">
                                Ayu Mirage
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Code Editor Font</td>
                        <td>
                            <a href="https://dank.sh">Dank Mono</a>. It support
                            common ligatures and has a sexy italic look, similar
                            to Operator Mono.
                        </td>
                    </tr>
                    <tr>
                        <td>Console App</td>
                        <td>
                            Usually the VS Code integrated terminal during
                            coding, for other uses,
                            <a href="https://iterm2.com/">iTerm2</a> with ZSH.
                            Also, using the [Ayu
                            Mirage](https://github.com/hwyncho/ayu-iTerm/blob/master/ayu%20Mirage.itermcolors)
                            color scheme.
                        </td>
                    </tr>
                </table>

                <h1>Desktop Apps</h1>
                <table className={mainStyles.table}>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="https://superhuman.com">Superhuman</a>{" "}
                            (I've got invites if you're interested)
                        </td>
                    </tr>
                    <tr>
                        <td>Browser</td>
                        <td>
                            <a href="https://www.google.com/chrome">
                                Google Chrome
                            </a>{" "}
                            for most things.{" "}
                            <a href="https://www.mozilla.org/firefox">
                                Firefox
                            </a>{" "}
                            to counter-checking some things.
                        </td>
                    </tr>
                    <tr>
                        <td>Office Suite</td>
                        <td>
                            I am a big fan of the{" "}
                            <a href="https://www.apple.com/iwork/">
                                Apple iWork
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>VPN Client (for custom connections)</td>
                        <td>
                            <a href="https://www.sparklabs.com/viscosity/">
                                Viscosity
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>VPN Client (for privacy/safety)</td>
                        <td>
                            <a href="https://www.expressvpn.com/">ExpressVPN</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Todo App</td>
                        <td>
                            <a href="https://todo.microsoft.com/tasks">
                                Microsoft To Do
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Window Management</td>
                        <td>
                            <a href="https://www.spectacleapp.com/">
                                Spectacle
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Video Editing</td>
                        <td>
                            <a href="https://www.telestream.net/screenflow">
                                ScreenFlow
                            </a>
                        </td>
                    </tr>
                </table>

                <h1>Hosting & Co.</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Hosting Front-End Sites</td>
                        <td>
                            <a href="https://www.netlify.com/">Netlify</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Hosting Backend</td>
                        <td>
                            <a href="https://www.heroku.com/">Heroku</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Other cloud needs</td>
                        <td>
                            <a href="https://www.digitalocean.com/">
                                Digital Ocean
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Email provider</td>
                        <td>
                            <a href="https://gsuite.google.com/">GSuite</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Domain provider</td>
                        <td>
                            <a href="https://www.onlydomains.com/">
                                OnlyDomains
                            </a>
                        </td>
                    </tr>
                </table>

                <h1>Workstation Setup</h1>

                <table className={mainStyles.table}>
                    <tr>
                        <td>Desk</td>
                        <td>
                            <a href="https://www.fully.com/en-eu/jarvis-adjustable-height-desk-bamboo.html">
                                Jarvis Bamboo Standing Desk
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Laptop</td>
                        <td>Macbook Pro 16", i9, 64GB</td>
                    </tr>
                    <tr>
                        <td>Laptop stand</td>
                        <td>
                            <a href="https://www.amazon.com/SAMDI-Notebook-Cooling-Computer-Chromebook/dp/B013ONA8VK?th=1">
                                SAMDI Laptop Stand Wood, Walnut
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>External screen #1</td>
                        <td>
                            <a href="https://www.lg.com/us/monitors/lg-34UM88-P-ultrawide-monitor">
                                34" 21:9 UltraWide® QHD IPS LED
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>External screen #2</td>
                        <td>
                            <a href="https://www.benq.com/en-me/monitor/stylish/gw2480.html">
                                23.8" BenQ GW2480
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>USB-C Docking Station</td>
                        <td>
                            <a href="https://www.caldigit.com/usb-c-pro-dock/">
                                CalDigit USB-C Pro Dock
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Office Chair</td>
                        <td>
                            <a href="https://www.noblechairs.com/epic-series">
                                Noblechairs Epic
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>External Microphone</td>
                        <td>
                            <a href="http://www.sudotack.com/Home/Products/detail/code/AMB1A04T">
                                SUDOTRAK Cardioid Condenser Microphone
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Webcam</td>
                        <td>
                            <a href="https://www.logitech.com/en-us/product/brio">
                                Logitech BRIO 4K
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Webcam holder & LED ring</td>
                        <td>
                            <a href="https://www.amazon.de/gp/product/B07GW6LZ6R">
                                No-Name Webcam Light Holder
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default UsesPage
