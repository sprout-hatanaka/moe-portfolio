import Navigator from "./Navigator";
import Link from "next/link";
import { Alumni_Sans_Pinstripe } from "next/font/google";

const AlumniSansPinstripe = Alumni_Sans_Pinstripe({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
    return (
        <header className="head">
            <Link href="/">
            <div className="logo">
                <h1 className= {AlumniSansPinstripe.className}>Portfolio<br></br>
                MOE HATANAKA</h1>
                <div className="tri1" style={{backgroundImage:"url(triangle1.svg)"}}></div>
                <div className="tri2" style={{backgroundImage:"url(triangle2.svg)"}}></div>
                <div className="tri3" style={{backgroundImage:"url(triangle3.svg)"}}></div>
            </div>
            </Link>

            <Navigator />

        </header>
    );
};

export default Header;


// import { IoChevronDownCircleOutline } from "react-icons/io5";
// import { CiCircleChevDown } from "react-icons/ci";
