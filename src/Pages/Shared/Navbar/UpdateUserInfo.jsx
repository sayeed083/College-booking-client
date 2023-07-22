import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUserInfo = () => {

    const updateUsers = useLoaderData();




    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedClass = {
            name: name,
            email: email
        }
        fetch(`http://localhost:5000/user/updateUserInfo/${updateUsers._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedClass),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `The ${name} is Updated.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }





    return (
        <div>
            <h2>{updateUsers.name}</h2>
            <div className="hero min-h-screen bg-cyan-200" >
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-green-500">Update Your Information!</h1>
                        <h1 className="text-2xl text-center my-5 text-blue-500">{updateUsers.name}</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Update name</span>
                                    </label>
                                    <input defaultValue={updateUsers.name} type="text" name="name"
                                        placeholder="Write your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Update Email</span>
                                    </label>
                                    <input defaultValue={updateUsers.email} type="email" name="email"
                                        placeholder="Write your email" className="input input-bordered" />
                                        
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserInfo;