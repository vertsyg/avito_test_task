import {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useAction'
import { Carousel, Col, Row, Spin } from 'antd'
import { convertTime } from '../utils/convertTime'
import { checkGameFromCache } from '../utils/checkGameFromCache'

interface GameInfoProps {
    gameId: number,
}

const GameInfo = ({gameId}: GameInfoProps) => {

  const {error, game, loading } = useTypedSelector(state => state)
  const {fetchOneGame, fetchGameFromCache} = useActions()

  useEffect(() => {
    checkGameFromCache(gameId) ? fetchGameFromCache(gameId) : fetchOneGame(gameId)       
  }, [gameId])

  if (loading) {
    return <Spin spinning={loading}/>
  }
    
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <Row gutter={[8, 16]}>
        <Col xs={24} md={8}>
          <img src={game?.thumbnail} alt='Poster' />
          <h1>{game?.title}</h1>
          <p><span style={{color: 'rgba(255, 255, 255, 0.5)'}}>Genre:</span> {game?.genre}</p>
          <p><span style={{color: 'rgba(255, 255, 255, 0.5)'}}>Developer:</span> {game?.developer}</p>
          <p><span style={{color: 'rgba(255, 255, 255, 0.5)'}}>Publisher:</span> {game?.publisher}</p>
          {game?.release_date && <p><span style={{color: 'rgba(255, 255, 255, 0.5)'}}>Release Date:</span> {convertTime(game?.release_date)}</p>}
        </Col>
        <Col xs={24} md={16}>
          <Carousel autoplay>
            {game?.screenshots.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} alt='Screenshot' />
            ))}
          </Carousel>
        </Col>
      </Row>
      {game?.minimum_system_requirements && 
        <Row gutter={[8, 16]}>
          <Col xs={24}>
            <p style={{fontSize:'1.5em' }}>System Requirements:</p>
          </Col>
          <Col xs={24} sm={8}>
            <p><span style={{ color: '#1677ff' }}>OS:</span> {game?.minimum_system_requirements.os}</p>
            <p><span style={{ color: '#1677ff' }}>Memory:</span> {game?.minimum_system_requirements.memory}</p>
          </Col>
          <Col xs={24} sm={8}>
            <p><span style={{ color: '#1677ff' }}>Processor:</span> {game?.minimum_system_requirements.processor}</p>
            <p><span style={{ color: '#1677ff' }}>Storage:</span> {game?.minimum_system_requirements.storage}</p>
          </Col>
          <Col xs={24} sm={8}>
            <p><span style={{ color: '#1677ff' }}>Graphics:</span> {game?.minimum_system_requirements.graphics}</p>
          </Col>
        </Row>
      }
    </>
  );
};
      

export default GameInfo