import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { headerNav } from "../constants/index";

const Skip = () => {
    return (
        <aside id="skip">
            {headerNav.map((nav) => (
                <AnchorLink key={nav.title} href={nav.url} className="skip_item" tabIndex={1}>
                    {nav.text}
                </AnchorLink>
            ))}
        </aside>
    );
};

export default Skip;
