import { Link } from "react-router-dom";
import {FaLinkedin, FaGithub, FaGlobeAsia} from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-opacity-50 bg-sky-400 text-neutral-content">
                <div>
                   <img className="w-[100px]" src="https://i.postimg.cc/PxqY8mxn/Elite-Admit-Hub.png" alt="" />
                    <p><span className="text-3xl font-serif">Elite Admit Hub</span><br />Providing Admission Service since 2002</p>
                    <p>Copyright © 2023 - All right reserved by Elite Admit Hub</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.linkedin.com/in/sayedur-rahman-452736280/" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="text-3xl text-violet-400 " ></FaLinkedin></Link>
                        <Link to="https://github.com/sayeed083" target="_blank" rel="noopener noreferrer"><FaGithub    className="text-3xl text-violet-400 " ></FaGithub></Link>
                        <Link to="https://portfolio-d1248.web.app/" target="_blank" rel="noopener noreferrer"><FaGlobeAsia className="text-3xl text-violet-400 " ></FaGlobeAsia></Link>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;