import { useForm } from 'react-hook-form';

function RegisterWorker() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onRegister = (data, e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                age: data.age,
                email: data.email,
                Workerposition: data.workerPosition,
                CertifiedUntil: data.CertifiedUntil
            })

        }

        fetch('http://localhost:55687/api/Worker', requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.status == 200) {
                    alert("Registration process successful")

                }
                else {
                    alert("Registration process failed")
                }
            })

    }
    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"  {...register("name", { required: true, maxLength: 100 })} />
                </div>
                <div className="form-group col-md-6">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" {...register("age", { required: true, min: 1, max: 60 })} />
                </div>
                <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email"  {...register("email", { required: true, maxLength: 100 })} />
                </div>
                <div className="form-group col-md-6">
                    <label for="CertifiedUntil">Certified Until</label>
                    <input type="date" className="form-control" id="CertifiedUntil"  {...register("CertifiedUntil", { required: true })} />
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-4">
                    <label for="workerPosition">Worker Position</label>
                    <select id="workerPosition" className="form-control" {...register("workerPosition")}>
                        <option value='CEO'>CEO</option>
                        <option selected value='Worker'>Worker</option>
                        <option value='Captain'>Captain</option>
                    </select>
                </div>

                <div className="form-group col-md-4">
                    <label for="inputState">Profile Picture</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" {...register("profileImage")} />
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
}

export default RegisterWorker;
