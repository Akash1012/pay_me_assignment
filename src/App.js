import { useEffect, useState } from "react";
import allData from "./data.json";
import PlayerDetails from './playersDetails'

function App() {
  const [players] = useState([...allData]);
  const [selectedPlayer, SetSelectedPlayer] = useState([]);
  const[openModal,setOpenModal] = useState(false)
  const[forBat,setForBat] = useState([])
  const[forBowl,setforBowl] = useState([])
  const[forAllRounder,setforAllRounder] = useState([])
  const [forWicketKeeper,setforWicketKeeper]  = useState([])

  const [data,setData] = useState({})

  const addPlayers = (slt) => {
    // debugger
    if(selectedPlayer.length <= 11) {
      // if(forBat.length < 3 || forBowl.length < 6 || forAllRounder.length < 4) {
      //   SetSelectedPlayer((prev) => {
      //     return [ ...prev, slt ]
      //   });
       
       
      // }

       if(forBat.length == 3 && slt.type == 'Batsman') {
        alert(
          "Only 3 Batsmen are allowed"
        )
        // setForBat([])
        return true
      }

      else if(forWicketKeeper.length == 1 &&  slt.type == 'WicketKeeper') {
        alert()
      }
     else if(forBowl.length == 6 && slt.type == 'Bowler') {
        alert(
          "Only 3 Bowlers are allowed"
        )
        // setforBowl([])
        return true
      }
      else if(forAllRounder.length == 4 && slt.type == 'AllRounder') {
        alert(
          "Only 3 Batsmen are allowed"
        )
        // setforAllRounder([])
        return true
      } else {
        SetSelectedPlayer((prev) => {
          return [ ...prev, slt ]
        });
      }
    } else {
      alert("Only 11 players are allowed on a team ")
    }
    
    
   
  };

  const removePlayers = (rem) => {
    SetSelectedPlayer((prev) =>  prev.filter((rm) => rm.id !== rem))
  }

  const openInfo = (d) => {
    setData(d)
    setOpenModal(!openModal)
  }


  useEffect(() => {
    const bat =  selectedPlayer.filter((item) => item.type == 'Batsman').map((onlyBatsman) => onlyBatsman.type);
    const bowl =  selectedPlayer.filter((item) => item.type == 'Bowler').map((onlyBowler) => onlyBowler.type);
    const allRounder =   selectedPlayer.filter((item) => item.type == 'AllRounder').map((onlyAllRounder) => onlyAllRounder.type);
    const forWicketKeeper = selectedPlayer.filter((item) => item.type == 'WicketKeeper').map((onlyWicketKeeper) => onlyWicketKeeper.type)

    console.log("Bat",bat,bowl,allRounder)
    setForBat(bat);
    setforBowl(bowl);
    setforAllRounder(allRounder)
    setforWicketKeeper(forWicketKeeper)
    
  },[selectedPlayer])


  return (
    <div style={{
      display:'flex'
    }}>
      {openModal && <PlayerDetails data ={data}  addPlayers ={addPlayers} selectedPlayer ={selectedPlayer}/>}
      
      <div style={{
        width:'50%'
      }}>
      {players.map((player, index) => {
        return (
          <div
          key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <div onClick={() => openInfo({...player,id:index})}>Name: {player.name}</div>
            <div>Type: {player.type}</div>
            <button
              disabled={selectedPlayer.find((item) => item.id == index)}
              onClick={() => addPlayers({ ...player, id: index })}
            >
              Select
            </button>
          </div>
        );
      })}
      </div>
      <div style={{
        width:'50%'
      }}>
      {selectedPlayer.map((player, index) => {
        return (
          <div
          key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <div>Name: {player.name}</div>
            <div>Type: {player.type}</div>
            <button
              disabled={false}
              onClick={() => removePlayers(player.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
