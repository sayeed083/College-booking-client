import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2"
import { FaGoogle, FaGithub } from "react-icons/fa"


const SocialLogin = () => {

    const { googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;

                const saveTheUser = { name: loggedInUser.displayName, email: loggedInUser.email, userImage: loggedInUser.photoURL, }
                fetch('https://college-bookings-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveTheUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-start",
                                icon: "success",
                                title: "Created A User",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true });
                        }
                    })
            })
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const loggedInUser = result.user;

                const saveTheUser = { name: loggedInUser.displayName, email: loggedInUser.email, userImage: loggedInUser.photoURL, }
                fetch('https://college-bookings-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveTheUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-start",
                                icon: "success",
                                title: "Created A User",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true });
                        }
                    })
            })
    }




    return (
        <div>
            <div className="divider">OR</div>
            <div className=" text-center my-4 flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">
                    <FaGoogle></FaGoogle>Google
                </button>
                <button onClick={handleGitHubSignIn} className="btn btn-outline btn-neutral">
                    <FaGithub></FaGithub>GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;