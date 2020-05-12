import { DescriptionVisibility } from "../actions/index";

const descriptionVisibility = (state = DescriptionVisibility.DEFAULT, action) => {
    switch(action.type) {
        case 'SET_DESCRIPTION_VISIBILITY':
            return action.descriptionVisibility 
        default:
            return state
    }
}

export default descriptionVisibility;