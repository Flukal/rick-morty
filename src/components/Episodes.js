import { useQuery, gql } from "@apollo/client";

const client = gql`
  query GetEpisodes {
    episodes {
      results {
        name
        episode
        created
      }
    }
  }
`;

function Episodes() {
  const { loading, error, data } = useQuery(client);
  
  if (loading) return <p>Loading Episodes</p>;
  if (error) return <p>Error Episodes</p>;

  const episodesArray = data.episodes.results 

  const episodesItems = episodesArray.map((episode) => 
    <tr key={episode.name}>
      <td>{episode.name}</td>
      <td>{episode.episode}</td>
      <td>{episode.created}</td>
    </tr>
  )
  
  return (
    <div className="App">
      <h1>Episodes Rick & Morty</h1>
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Episode</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {episodesItems}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;
