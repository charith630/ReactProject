import { useState, useEffect } from "react";

function ViewFarm() {

    const [farms, setFarms] = useState([]);

    const LoadFarmData = () => {
        useEffect(() => {
            fetch('http://localhost:55687/api/farm')
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const farmList = data.results.map((farmData) => {
                return {
                  name: farmData.name,
                  age: farmData.age,
                  email: farmData.email,
                  workerPosition: farmData.workerPosition,
                  certifiedUntil:farmData.certifiedUntil
                };
              });
              setFarms(farmList);
            });
        }, [])
    }

    const tableConetent = farms.forEach(item => {
        return <tr>
          <th>{item.name}</th> 
          <th>{item.age}</th> 
          <th>{item.email}</th> 
          <th>{item.workerPosition}</th> 
          <th>{item.certifiedUntil}</th> 
        </tr>
   })
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">GPS Position</th>
            <th scope="col">Number of Cages</th>
            <th scope="col">Has a Barge</th>
          </tr>
        </thead>
        <tbody>
        {tableConetent}
        </tbody>
      </table>
    );
  }
  
  export default ViewFarm;
  