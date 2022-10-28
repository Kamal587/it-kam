import React from "react";
import axios from "axios";
import {
  addNewPost,
  postThunk,
  setUsHomePage,
  getStatus, updateStatus
} from "../../../../redux/reducers/postBranchReducer";
import Home from "./Home";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../elementsMain/hoc/withAuthRedirect";
import { compose } from "redux";




class HomeContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if(!userId) { userId = 2}
    this.props.postThunk(userId)
    this.props.getStatus(userId)
  }

  render() {
   
    return <>
    
      <Home {...this.props}/>
    </>
  
}

}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}


let mapStateToProps = (state) => {

  return {
    postData: state.postBranch.postData,
    changePost: state.postBranch.changePost,
    userData: state.postBranch.userData,
    isAuth: state.auth.isAuth,
    status: state.postBranch.status
  };
};

export default compose(withRouter,connect(mapStateToProps, { addNewPost, postThunk, setUsHomePage, getStatus, updateStatus}),
        withAuthRedirect)
        (HomeContainer)


