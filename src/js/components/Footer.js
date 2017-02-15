import React from 'react';

export const Footer = _ => (
    <div id="footer">
        <section className="container">
            <section id="socialNetworks" className="col-1-4">
                <h6>Humři na sociálních sítích</h6>
                <ul>
                    <li><a href="https://www.facebook.com/ALCanSat" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com/almghtLobsters" target="_blank">Twitter</a></li>
                    <li><a href="https://www.youtube.com/channel/UCox2-N19JXhrZlNf8cEM2Zw" target="_blank">YouTube</a></li>
                    <li><a href="https://plus.google.com/b/102005371252944081919/102005371252944081919" target="_blank">GooglePlus</a></li>
                    <li><a href="https://www.instagram.com/almightylobsters/" target="_blank">Instagram</a></li>
                </ul>
            </section>
            <section id="CanSat" className="col-1-4">
                <h6>Více o CanSatu</h6>
                <ul>
                    <li><a href="http://esero.scientica.cz/cansat" target="_blank">Český CanSat</a></li>
                    <li><a href="http://www.esa.int/Education/CanSat" target="_blank">ESA</a></li>
                </ul>
            </section>
            <section id="github" className="col-1-4">
                <h6><a href="https://github.com/AlmightyLobsters" target="_blank">GitHub</a></h6>
                <ul>
                    <li><a href="https://github.com/AlmightyLobsters/LobsterPages" target="_blank">Tato stránka</a></li>
                    <li><a href="https://github.com/AlmightyLobsters/CanSat2017.Probe" target="_blank">Firmware do sondy</a></li>
                    <li><a href="https://github.com/AlmightyLobsters/CanSat2017.GroundStation" target="_blank">Firmware do pozemní stanice</a></li>
                    <li><a href="https://github.com/AlmightyLobsters/CanSat2017.App" target="_blank">Aplikace pro zpracování dat</a></li>
                    <li><a href="https://github.com/AlmightyLobsters/CanSat2017.Hardware" target="_blank">Soubory spojené s Hardwarem</a></li>
                </ul>
            </section>
            <section id="sponsors" className="col-1-4">
                <h6>Sponzoři</h6>
                <ul>
                    <li><a href="http://www.siliconhill.cz">Silicon Hill</a></li>
                    <li><a href="https://microsoft.com">Microsoft</a></li>
                </ul>
            </section>
        </section>
        <section id="copy">
            <h6><a href="/admin">&copy; 2017 Almighty Lobsters</a></h6>
        </section>
    </div>
);
