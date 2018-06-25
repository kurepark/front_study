import MembershipLevelType from "../enums/MembershipLevelType";
import {ActionTypes} from "../actions/membershipAction";

const initialState = MembershipLevelType.GUEST;//처음엔 undefined이므로 초기값 설정

function membershipLevelReducer(state = initialState, action) {
    console.log('actions',action)
    switch (action.type) {
        case ActionTypes.CHANGE_MEMBERSHIP : return action.membershipLevel;
        case ActionTypes.UNREGISTER : return MembershipLevelType.GUEST;
    }
    return state;
}

export default membershipLevelReducer;