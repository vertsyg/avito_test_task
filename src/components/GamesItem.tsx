import { Card } from 'antd';
import { convertTime } from '../utils/convertTime';
import { Link } from "react-router-dom";

interface GamesItemProps {
    id: number;
    title: string;
    release_date: string;
    publisher: string;
    genre: string;
    thumbnail: string;
}

const GamesItem = ({id, title, release_date, publisher, genre, thumbnail} : GamesItemProps) => {
    return (
            <Link to={`/game/${id}`}>
                <Card
                    hoverable
                    cover={<img alt="Poster" src={thumbnail}/>}
                >
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <p>{publisher}</p>
                    <p>{convertTime(release_date)}</p>
                </Card>
            </Link>
      );
}

export default GamesItem