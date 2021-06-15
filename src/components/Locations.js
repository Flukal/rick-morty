import { useQuery, gql } from "@apollo/client";

const client = gql`
    query GetLocations {
        locations {
            results {
                name
            }
        }
}
`;

function Locations() {
  const { loading, error, data } = useQuery(client);
  
  if (loading) return <p>Loading Locations</p>;
  if (error) return <p>Error Locations</p>;

  const locationsArray = data.locations.results 

  const locationsItems = locationsArray.map((location) => 
    <tr key={location.name}>
      <td>{location.name}</td>
    </tr>
  )
  
  return (
    <div className="App">
      <h1>Locations Rick & Morty</h1>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {locationsItems}
        </tbody>
      </table>
    </div>
  );
}

export default Locations;
