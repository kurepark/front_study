import MembershipLevelType from "../enums/MembershipLevelType";

const initialState = MembershipLevelType.TRIAL;//처음엔 undefined이므로 초기값 설정

function membershipLevelReducer(state = initialState, action) {
    return state;
}

export default membershipLevelReducer;