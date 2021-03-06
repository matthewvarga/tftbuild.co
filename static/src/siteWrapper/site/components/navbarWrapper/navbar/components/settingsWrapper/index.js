import { setTheme, setDescriptionVisibility } from "../../../../../../../actions/index";
import { connect } from 'react-redux';
import Settings from './settings/index'; 


const mapStateToProps = (state, ownProps) => ({
    theme: state.theme,
    descriptionVisibility: state.descriptionVisibility
});

// dispach 
const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
    setDescriptionVisibility: descriptionVisibility => dispatch(setDescriptionVisibility(descriptionVisibility))
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
