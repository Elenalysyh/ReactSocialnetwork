import {follow, action} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {ResponseType, ResultCodeLoginEnum} from "../api/api";

jest.mock("../api/users-api")
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(()=> {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.followUser.mockClear()
})

const result: ResponseType = {
    resultCode: ResultCodeLoginEnum.Success,
    messages: [],
    data: {}
}

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

userAPIMock.followUser.mockReturnValue(Promise.resolve(result))

test("success follow thunk", async () => {
    const thunk = follow(1)

    await thunk(dispatchMock,getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    //expect(dispatchMock).toHaveBeenCalledWith(2, action.followingInProgressNow(true, 1))
    // expect(dispatchMock).toHaveBeenCalledWith(2, action.followSuccess(1))
    // expect(dispatchMock).toHaveBeenCalledWith(2, action.followingInProgressNow(false, 1))

})