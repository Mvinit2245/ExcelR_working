import {MobileType} from './MobileType'
let i={
    noofmobiles:15
}
let MobileReducer=(state=i,action)=>{
    switch(action.type){
        case MobileType:
            return{
            noofmobiles:state.noofmobiles-1
            }
            default:
                return state
    }
}
export default MobileReducer
