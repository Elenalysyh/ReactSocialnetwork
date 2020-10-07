import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string,
    updateUserStatus: (status: string) => void
}

let ProfileStatusWithHook = (props: PropsType) => {
        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status || 'Empty')

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

         let editStatus = () => {
                setEditMode(true)
         }
         let finishEditStatus = () => {
                setEditMode(false)
             props.updateUserStatus(status)

         }
         let onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
         }

        return (

            <div>
                {!editMode &&
                <div onDoubleClick={editStatus} >
                    {status}
                </div>
                }

                {editMode &&
                    <div>
                        <input
                            onChange={onChangeStatus}
                            autoFocus={true}
                            onBlur={finishEditStatus}
                            // value={props.status}
                        />
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHook