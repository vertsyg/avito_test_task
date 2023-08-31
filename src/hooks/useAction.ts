import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as GamesActionCreator from '../store/action-creator/games'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(GamesActionCreator, dispatch)
}