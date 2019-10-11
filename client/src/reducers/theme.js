import { Themes } from "../actions/index";

const theme = (state = Themes.DEFAULT, action) => {
    switch(action.type) {
        case 'SET_THEME':
            return action.theme 
        default:
            return state
    }
}

export default theme;