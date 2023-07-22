import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const { register, handleSubmit,  } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";






    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {

        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            Swal.fire({
                title: 'Login Successfully.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200" >
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">
                        <img className="w-[720px]" src="https://i.postimg.cc/KzSc7YSh/Authentication-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold mb-5 text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered absolute mt-3" />
                                <p className="relative translate-x-60 -translate-y-1" onClick={handleShowPassword}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </p>

                            </div>




                            {/* Submit */}

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p><small>No Account? Please <Link className="text-green-400" to="/register">Register!</Link></small></p>

                            <SocialLogin></SocialLogin>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;