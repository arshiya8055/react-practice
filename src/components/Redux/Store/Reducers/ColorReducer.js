export const ColorReducer=(state={color:"coral"},action)=>{
    if(action.type==="CLR"){
        return{
            ...state,
            color:action.payload
        }
    }
    return state;
}