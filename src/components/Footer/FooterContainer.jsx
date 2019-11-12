import { connect } from "react-redux";
import Footer from "./Footer";
import { setVisibilityFilter } from "../../redux/reducers/visibilityFilter-reducer";

const mapStateToProps = state => {
  return {};
};

const mapDispathToProps = dispatch => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispathToProps
)(Footer);

export default FooterContainer;
