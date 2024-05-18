import "../../css/compStyle/compHomeStyle/HomeFooterComp.css"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HomeFooter = () => {
    return (
        <div className="footerComp">
            <div className="footerList">
                <div className="contactLi">
                    <h2 className="contactTitle">Contact</h2>
                    <ul>
                        <li><a target="_blank" href="#">solve4u@gmail.com</a></li>
                    </ul>
                </div>
                <div className="helpLi">
                    <h2 className="helpTitle" >Help</h2>
                    <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">Order Status</a></li>
                    </ul>
                </div>
                <div className="followUsLi">
                    <h2 className="followUsTitle" >Follow Us</h2>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/"><FaFacebookSquare className="facebookIcon"/> Facebook</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/"><FaInstagram className="instagramIcon"/> Instagram</a></li>
                        <li><a target="_blank" href="https://twitter.com"><FaXTwitter className="twitterIcon"/> Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;