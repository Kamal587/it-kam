import React from "react";


class HomeStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    checkSpanStatus = () => {
        this.setState({
            editMode: true
        })
    }

    checkInputStatus = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.checkSpanStatus}>{this.props.status || '---'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus = {true} onBlur={this.checkInputStatus} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}




export default HomeStatus;