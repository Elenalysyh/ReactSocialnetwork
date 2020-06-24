import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editStatus = () => {
        this.setState({
            editMode: true
        })
    }
    finishEditStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        let target = e.currentTarget.value
        this.setState({
            status: target
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.status !== prevProps.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.editStatus} >
                        {this.state.status || "Empty"}
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onChangeStatus}
                            autoFocus={true}
                            onBlur={this.finishEditStatus}
                            value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus