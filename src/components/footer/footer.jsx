import Copyright from "./copyright";
import FooterLinks from "./footerLinks";
import Social from "./social";

export default function Footer(){
    return (
        <footer>
            <Social/>
            <FooterLinks/>
            <Copyright/>
        </footer>
    )
}