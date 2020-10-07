import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
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
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let target = e.currentTarget.value
        this.setState({
            status: target
        })
    }

    componentDidUpdate(prevProps:PropsType, prevState:StateType) {
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
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus