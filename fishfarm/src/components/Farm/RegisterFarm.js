import { useForm } from 'react-hook-form';

function RegisterFarm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onRegister = (data, e) => {
    alert("clicker");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: data.name
       })
  };
  fetch('http://localhost:55687/api/farm', requestOptions)
      .then(response => response.json())
      .then((data) => {
               alert(data.status);                   
    })
    
  };


  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" {...register("name", { required: true, maxLength: 100 })} />
        </div>
        <div className="form-group col-md-6">
          <label for="gps">Longitude</label>
          <input type="number" className="form-control" id="gps" step=".0001" {...register("Longitude", { required: true, min: 0 })} />
          {errors.name?.gps === 'required' && "GPS location is required"}
        </div>
        <div className="form-group col-md-6">
          <label for="gps">latitude</label>
          <input type="number" className="form-control" id="gps" step=".0001" {...register("gps", { required: true, min: 0 })} />
          {errors.name?.gps === 'required' && "GPS location is required"}
        </div>
      </div>
      <div className="form-group col-md-6">
        <label for="gps">Number of cages</label>
        <input type="number" className="form-control" id="gps" min="0" {...register("numberOfCages", { required: true, min: 0 })} />
      </div>

      <div className="form-row">

        <div className="form-group col-md-4">
          <label for="inputState">Farm has a barge</label>
          <select id="inputState" className="form-control" {...register("barge")}>
            <option selected value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label for="inputState">Profile Picture</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" {...register("profileImage", { required: true })} />
        </div>

      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegisterFarm;
