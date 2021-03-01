import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Playerinfo from './Components/Player-details/Playerinfo';
import playerinfo from './Data/data.json';
import Cart from './Components/Cart/Cart';


function App() {
  const [player, setPlayer]= useState([]);
  const [team, setTeam] = useState([]);
  useEffect(()=>{
    setPlayer(playerinfo);
  },[])

  const handleAddTeam = (players) => {
    const newTeam = [...team, players];
    setTeam(newTeam);
  }
  return (
    <div className="App">    
    <h4 className="heading">My Dream Team</h4>
      <div className="contain">    
      <div className="width">
        {
          player.map(players => <Playerinfo key={players.id} player={players} handleAddTeam={handleAddTeam}></Playerinfo>)
        }
      </div>
      <div className="mt-5 my-team">
      <Cart cart={team}></Cart>
      </div>
      </div>

    </div>
  );
}

export default App;
