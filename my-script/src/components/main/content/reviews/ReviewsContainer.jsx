import React from "react";
import { connect } from "react-redux";
import { getUsersThunk, setTotalCount, sendWatchedFalse, sendWatchedTrue } from '../../../../redux/reducers/usersBranchReducer';
import Reviews from "./Reviews";
import Loading from "../../elementsMain/loading/Loading";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../elementsMain/hoc/withAuthRedirect";
import { compose } from "redux";



class ReviewsC extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageActiv, this.props.pageCount)
                      
    } 

    setChangePage = (page) => {
        this.props.getUsersThunk(page, this.props.pageCount)

    }

render() {
    return <>
    {this.props.isLoaded ? <Loading /> : null}
    <Reviews totalCount = {this.props.totalCount}
                    pageCount = {this.props.pageCount}
                    setChangePage = {this.setChangePage}
                    users = {this.props.users}
                    pageActiv = {this.props.pageActiv}
                    sendWatchedTrue = {this.props.sendWatchedTrue}
                    sendWatchedFalse = {this.props.sendWatchedFalse}
                    toggleWatched = {this.props.toggleWatched}
                    watchedProgress = {this.props.watchedProgress}
                    isAuth = {this.props.isAuth}
    />
    </>
        
    
}
}


let mapStateToProps = (state) => {

    return {
       users: state.usersBranch.users,
       totalCount: state.usersBranch.totalCount,
       pageCount: state.usersBranch.pageCount,
       pageActiv: state.usersBranch.pageActiv,
       isLoaded: state.usersBranch.isLoaded,
       watchedProgress: state.usersBranch.watchedProgress,
       isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, 
    {sendWatchedTrue,
    sendWatchedFalse,
    setTotalCount,
    
    getUsersThunk
}),withAuthRedirect)(ReviewsC)

