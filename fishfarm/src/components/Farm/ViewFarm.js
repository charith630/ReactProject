import { Link } from 'react-router-dom'

function ViewFarm() {

    
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td><Link to='/new/location/'>Click Me</Link></td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default ViewFarm;
  