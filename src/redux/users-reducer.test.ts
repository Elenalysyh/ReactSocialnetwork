import usersReducer, {initialStateType, action} from "./users-reducer";

let state: initialStateType ;

beforeEach(()=> {
    state = {
        items: [{
            id: 0, name: "Lena", followed: false,
            photos: {small: null, large: null}, status: "None"
        },
            {
                id: 1, name: "Lena1", followed: true,
                photos: {small: null, large: null}, status: "None"
            },
            {
                id: 2, name: "Lena2", followed: true,
                photos: {small: null, large: null}, status: "None"
            },
            {
                id: 3, name: "Lena3", followed: true,
                photos: {small: null, large: null}, status: "None"
            }],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 2,
        isFetching: false,
        followingInProgress: []
    }
})

test("follow success", () => {

    const newState = usersReducer(state, action.followSuccess(1))
    expect(newState.items[0].followed).toBeFalsy();
    expect(newState.items[1].followed).toBeTruthy();
})

test("unfollow success", () => {

    const newState = usersReducer(state, action.unfollowSuccess(3))

    expect(newState.items[3].followed).toBeFalsy();
    expect(newState.items[2].followed).toBeTruthy();
})