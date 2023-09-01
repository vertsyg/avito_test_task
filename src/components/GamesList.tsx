import {useEffect, useState} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import type {} from 'redux-thunk/extend-redux'
import { useActions } from '../hooks/useAction';
import GamesItem from './GamesItem';
import {  Spin, Row, Col, Pagination} from 'antd';

const GamesList = () => {
    const {error, games, loading, platform, genre, sorting } = useTypedSelector(state => state)
    const {fetchGames} = useActions()
    const [currentPage, setCurrentPage] = useState(1); 
    
    const gamesPerPage = 24;
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    useEffect(() => {
        setCurrentPage(1)
        fetchGames(platform, genre, sorting)
    }, [platform, genre, sorting]);

    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(page)
    };


    if (loading) {
        return <Spin spinning={loading}/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <Row gutter={[16, 16]}> 
                {currentGames.map(({ id, title, release_date, publisher, genre, thumbnail }) => (
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
            <div  style={{display: 'flex', justifyContent: 'center', margin:'5px'}}>
                <Pagination
                    current={currentPage}
                    total={games.length}
                    pageSize={gamesPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false} 
                />
            </div>   
        </>
    );
}

export default GamesList