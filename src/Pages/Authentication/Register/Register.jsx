import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {



    const { createUser, updatedUserInfo } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();




    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updatedUserInfo(data.name, data.photoURL)
                    .then(() => {

                        const savingAUser = {
                            name: data.name, email: data.email, userImage: data.photoURL
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savingAUser)
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-start",
                                        icon: "success",
                                        title: "Created A User",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }


                            })


                    })
                    .catch(error => console.log(error))
            })
    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="w-[720px]" src="https://i.postimg.cc/KzSc7YSh/Authentication-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold mb-5 text-center">Please Register!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500 mt-2">Email is Required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                                    },
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && (
                                    <p className="text-red-500 mt-1">{errors.password.message}</p>
                                )}


                            </div>



                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", {
                                    required: true,
                                    validate: value => value === watch('password') || "Passwords do not match"
                                })} name="confirmPassword" placeholder="confirm password" className="input input-bordered" />
                                {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
                            </div> */}













                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURl</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p><small>Already Have an Account? Please <Link className="text-green-400" to="/login">Login!</Link></small></p>

                            <SocialLogin></SocialLogin>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;