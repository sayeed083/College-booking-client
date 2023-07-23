import Swal from "sweetalert2";

const AdmissionPerCollege = () => {



    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedClass = {
            name: name,
            email: email
        }
        fetch(`http://localhost:5000/user/updateUserInfo/`, {
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
                        title: `The  is Updated.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-cyan-200" >
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-green-500">Admission Panel</h1>
                        <h1 className="text-2xl text-center my-5 text-blue-500"></h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">

                                {/* ------------------------Level-1-Starts----------------------------------- */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Name</span>
                                    </label>
                                    <input defaultValue="" type="text" name="name"
                                        placeholder="Write your name" className="input input-bordered" />
                                </div>
                                {/* ------------------------Level-1-Ends------------------------------------- */}


                                {/* ------------------------Level-2-Starts----------------------------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input defaultValue="" type="text" name="subject"
                                        placeholder="Write your Subject" className="input input-bordered" />

                                </div>

                                {/* ------------------------Level-2-Ends------------------------------------- */}
                                {/* ------------------------Level-3-Starts----------------------------------- */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Email</span>
                                    </label>
                                    <input defaultValue="" type="email" name="email"
                                        placeholder="Write your email" className="input input-bordered" />
                                </div>
                                {/* ------------------------Level-3-Ends------------------------------------- */}


                                {/* ------------------------Level-4-Starts----------------------------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Candidate Phone number</span>
                                    </label>
                                    <input defaultValue="" type="number" name="phoneNumber"
                                        placeholder="Write your email" className="input input-bordered" />

                                </div>

                                {/* ------------------------Level-4-Ends------------------------------------- */}
                                {/* ------------------------Level-5-Starts----------------------------------- */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input defaultValue="" type="text" name="address"
                                        placeholder="Write your Address" className="input input-bordered" />
                                </div>
                                {/* ------------------------Level-5-Ends------------------------------------- */}


                                {/* ------------------------Level-6-Starts----------------------------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of birth</span>
                                    </label>
                                    <input defaultValue="" type="date" name="dateOfBirth"
                                        placeholder="Give your Date of Birth" className="input input-bordered" />

                                </div>

                                {/* ------------------------Level-6-Ends------------------------------------- */}
                                {/* ------------------------Level-7-Starts----------------------------------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input defaultValue="" type="text" name="image"
                                        placeholder="Upload your image" className="input input-bordered" />

                                </div>

                                {/* ------------------------Level-7-Ends------------------------------------- */}


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

export default AdmissionPerCollege;