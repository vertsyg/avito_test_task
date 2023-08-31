import {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import type {} from 'redux-thunk/extend-redux'
import { useActions } from '../hooks/useAction';
import GamesItem from './GamesItem';
import {  Spin,Row, Col} from 'antd';

const GamesList = () => {
    const {error, games, loading, platform, genre, sorting } = useTypedSelector(state => state)
    const {fetchGames} = useActions()

    useEffect(() => {
        fetchGames(platform, genre, sorting)
    }, [platform, genre, sorting]);

    if (loading) {
        return <Spin spinning={loading}/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Row gutter={[16, 16]}> 
            {games.map(({ id, title, release_date, publisher, genre, thumbnail }) => (
                <Col key={id} xs={24} sm={12} md={8} lg={6} xl={6}> 
                    <GamesItem
                        id={id}
                        title={title}
                        release_date={release_date}
                        publisher={publisher}
                        genre={genre}
                        thumbnail={thumbnail}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default GamesList