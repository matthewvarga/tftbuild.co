import { setTheme } from "../../../../actions/index";
import { connect } from 'react-redux';
import Classes from './classes/index'; 


const mapStateToProps = (state, ownProps) => ({
    theme: state.theme
});

// dispach 
const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme))
});


export default connect(mapStateToProps, mapDispatchToProps)(Classes);
