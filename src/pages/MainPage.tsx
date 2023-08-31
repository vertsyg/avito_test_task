import FiltersList from "../components/FiltersList"
import GamesList from "../components/GamesList"

const MainPage = () => {
    return (
    <div style={{ width: '85vw', margin:'0 auto' }}>
            <h1>Free-To-Play Games</h1>
            <FiltersList/>
        <GamesList/>
    </div>
    )
}

export default MainPage