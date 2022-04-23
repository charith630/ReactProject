import { useForm } from 'react-hook-form';

function RegisterFarm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onRegister = (data, e) => {

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
    fetch('http://localhost:55687/api/farm', requestOptions)
      .then(response => response.json())
      .then((data) => {
        if (data.status == 200) {
          alert("Successfully Created ")
          
        }
        else {
          alert("Farm Creation Process Failed ")
        }
      })

  };


  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"  {...register("name", { required: true, maxLength: 100 })} />
        </div>
        <div className="form-group col-md-6">
          <label for="gps">Longitude</label>
          <input type="number" className="form-control" id="longitude" step=".0001" {...register("longitude", { required: true, min: 0 })} />

        </div>
        <div className="form-group col-md-6">
          <label for="gps">latitude</label>
          <input type="number" className="form-control" id="latitude" step=".0001" {...register("latitude", { required: true, min: 0 })} />

        </div>
      </div>
      <div className="form-group col-md-6">
        <label for="gps">Number of cages</label>
        <input type="number" className="form-control" id="numberOfCages" min="0" {...register("numberOfCages", { required: true, min: 0 })} />
      </div>

      <div className="form-row">

        <div className="form-group col-md-4">
          <label for="inputState">Farm has a barge</label>
          <select id="inputState" className="form-control" {...register("isBargeExist")}>
            <option selected value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>

        <div className="form-group col-md-4">
          <label for="inputState">Profile Picture</label>
          <input type="file" className="form-control-file" id="profileImage" {...register("profileImage", { required: false })} />
        </div>

      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegisterFarm;
