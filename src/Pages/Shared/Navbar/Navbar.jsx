import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)




    const navigations = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Colleges</Link></li>
        <li><Link to="/">Admission</Link></li>
        <li><Link to="/">My College</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }



    return (
        <div>
            <div className="navbar bg-opacity-50 bg-sky-400 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-cyan-400">
                            {navigations}
                        </ul>
                    </div>
                    <img className="w-[80px]" src="https://i.postimg.cc/PxqY8mxn/Elite-Admit-Hub.png" alt="" />
                    <Link to="/" className="btn btn-ghost uppercase text-xl">Elite Admit Hub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigations}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* For User Photo And on Hover The Name */}
                    {user &&
                        <div className="flex items-center justify-center gap-5">
                            <button className="btn-ghost">{user.displayName}</button>
                            <img className="w-20 rounded-full mr-6" src={user.photoURL} alt="" />
                        </div>

                    }

                   
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-outline btn-info">LogOut</button>
                        </> : <>
                            <Link to="/login">
                                <button className="btn glass">Log In</button>
                            </Link>
                        </>
                    }




                </div>
            </div>
        </div>
    );
};

export default Navbar;