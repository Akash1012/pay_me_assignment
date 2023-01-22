const PlayerDetails = ({data,addPlayers,selectedPlayer}) => {
    return (
        <div style={{
            // zIndex:'-1',
        backgroundColor:'red',
        boxShadow:10
        }}>
            <p>Name:{data.name}</p>
            <button disabled={selectedPlayer.find((item) =>  item.id == data.id)} onClick={() => addPlayers(data)}>Add</button>
        </div>
    )
}

export default PlayerDetails