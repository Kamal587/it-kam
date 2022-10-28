import * as axios from 'axios';
import React from "react";
import { connect } from "react-redux";
import { setAuthRegist, authThunk, logoutThunk } from "../../redux/reducers/authReducer";
import Header from "./Header";



class HeaderContainer extends React.Component {

    componentDidMount() {
        
        this.props.authThunk()
             
    }

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
    
}


export default connect(mapStateToProps,{setAuthRegist, authThunk, logoutThunk})(HeaderContainer);