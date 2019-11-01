import { connect } from "react-redux";
import { setVisibilityFilterActionCreator } from "../../redux/reducers/todolist-reducer";
import Footer from "./Footer";

const mapStateToProps = state => {
  return {};
};

const mapDispathToProps = dispatch => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilterActionCreator(filter));
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(Footer);

export default FooterContainer;
