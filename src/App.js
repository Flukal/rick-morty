import './App.css';
// import { useQuery, gql } from "@apollo/client";

import Characters from "./components/Characters";
import Episodes from './components/Episodes';
import Locations from './components/Locations';

// const client = gql`
//   query GetData {
//     characters{    
//       results {
//         name
//         species
//         location {
//           name
//         }
//         origin {
//           name
//         }
//       }
//     }
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(client);
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  // const charactersArray = data.characters.results 

  // const characterItems = charactersArray.map((character) => 
  //   <tr key={character.name}>
  //     <td>{character.name}</td>
  //     <td>{character.species}</td>
  //     <td>{character.origin.name}</td>
  //     <td>{character.location.name}</td>
  //     <td>More</td>
  //   </tr>
  // )
  

  return (
    <div className="App">
      
      <Characters />
      <Episodes />
      <Locations />
      {/*Original
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Origin</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {characterItems}
        </tbody>
      </table>*/}
    </div>
  );
}



export default App;
