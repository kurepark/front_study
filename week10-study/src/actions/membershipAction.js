import MembershipLevelType from '../enums/MembershipLevelType';

export const ActionTypes = {
    CHANGE_MEMBERSHIP : 'CHANGE_MEMBERSHIP',
    UNREGISTER : 'UNREGISTER'
}

export function changeMembershipLevel(membershipLevel){
    console.log('membershipLevel',membershipLevel);
    return {
        type: ActionTypes.CHANGE_MEMBERSHIP,
        membershipLevel
    }
}

export function unRegister() {
    return (dispatch, getState) =>{
        const {membershipLevel : _membershipLevel} = getState();
        if(_membershipLevel === MembershipLevelType.MEMBER) {
            if(!confirm('정말 해지하시겠습니까?')) return;
        }

        dispatch({
            type:ActionTypes.UNREGISTER
        })
    }
}