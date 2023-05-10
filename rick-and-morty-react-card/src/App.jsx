import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./App.css";

function App() {

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {data.map((card, id) => (
          <CharacterCard
            key={id}
            name={card.name}
            image={card.image}
            status={card.status}
            species={card.species} 
            location_name={card.location.name}
            location_url={card.location.url} 
            origin_name={card.origin.name} 
            origin_url={card.origin.url}

          />
        ))}
      </div>
    </div>
  );
}

export default App;
