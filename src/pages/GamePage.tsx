import { useParams } from "react-router-dom"

import GameInfo from "../components/GameInfo"
import BackButton from "../components/BackButton"

const GamePage = () => {
    const {gameId} = useParams()
    return (
        <div style={{ width: '85vw', margin:'0 auto' }}>
            <BackButton/>
            <GameInfo gameId={Number(gameId)}/>
        </div>
    )
}

export default GamePage