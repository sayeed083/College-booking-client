import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";


const ResetPassword = () => {
    const { register, handleSubmit,  } = useForm();
    const { resetPassword } = useContext(AuthContext)


    const onSubmit = data => {

        resetPassword(data.email)
        .then(() => {
            Swal.fire({
                title: 'Sent Email to Reset Password.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
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
                            <h1 className="text-3xl mb-5 text-center">Reset Your Password!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                           




                            {/* Submit */}

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Reset" />
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;