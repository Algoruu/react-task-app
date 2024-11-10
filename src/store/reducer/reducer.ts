import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

// **Redux**
// - 상태 관리 라이브러리 (선택사항)

// - State, Props 상태를 여러 컴포넌트와 공유
// - 앱 커지면 👉 관리 힘듦, 소스 코드 지저분
// 👉 Redux 사용

// Redux의 흐름
// Action 객체 Dispatch 함수 👉 Reducer 함수 type return 👉 Redux Store State 👉 React Component Rerendering
// Toolkit　　Reducer　　Slice  Store   Provider    react component wrapper

const reducer = {
    logger : loggerReducer,
    boards : boardsReducer,
    modal : modalReducer
}

export default reducer;