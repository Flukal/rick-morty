import { useQuery, gql } from "@apollo/client";

const client = gql`
  query GetCharacters {
    characters {    
      results {
        id
        name
        species
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;

function Characters() {
  const { loading, error, data } = useQuery(client);
  
  if (loading) return <p>Loading Characters</p>;
  if (error) return <p>Error Characters</p>;

  const charactersArray = data.characters.results 

  const characterItems = charactersArray.map((character) => 
    <tr key={character.id}>
      <td>{character.name} ({character.id})</td>
      <td>{character.species}</td>
      <td>{character.origin.name}</td>
      <td>{character.location.name}</td>
      <button type="button" class="btn btn-primary">More</button>
    </tr>
  )
  

  return (
    <div>
      <h1>Characters Rick & Morty</h1>

      <table className="table">
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
      </table>

      <button type="button" class="btn btn-primary">More</button>
    </div>
  );
}

export default Characters;
