import { useForm } from 'react-hook-form';

function RegisterWorker() {

    const { register, handleSubmit} = useForm();

    const onRegister = (data,e) => {
        alert("clicker");
        console.log(data);
        e.target.reset();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: data.name,
              numberOfCages: data.numberOfCages,
              longitude: data.longitude,
              latitude: data.latitude,
              isBargeExist: data.isBargeExist
            })
          };

          
    };

    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"  {...register("name",{ required: true, maxLength: 100 })} />
                </div>
                <div className="form-group col-md-6">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" {...register("age",{ required: true, min: 1 , max:60})} />                    
                </div>
                <div className="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email"  {...register("email",{ required: true, maxLength: 100 })} />
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-4">
                    <label for="workerPosition">Worker Position</label>
                    <select id="inputState" className="form-control" {...register("workerPosition")}>
                        <option  value='CEO'>CEO</option>
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
