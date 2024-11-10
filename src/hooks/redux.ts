import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();


// const logger = useTypedSelector( (state) => state.logger); 




// interface Obj<T> {
//     name : T;
// } // TypedUseSelectorHook<>과 같음

// interface State {
//     state : {
//         data : string,
//         loading : boolean
//     }
// } // Obj<T>에 값이 들어감

// const obj : Obj<State> = {
//     name : {
//         state : {
//             data : 'abcd',
//             loading : false
//         }
//     }
// }

