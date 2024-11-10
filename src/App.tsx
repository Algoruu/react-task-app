import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { appContainer, board, buttons } from './App.css'
import BoardList from './components/BoardList/BoardList'

function App() {
const [activeBoardId, setactiveBoardId] = useState("board-0");
  return (
    <div className={appContainer}>
      <div className={board}>
        <BoardList 
          activeBoardId={activeBoardId}
          setactiveBoardId={setactiveBoardId} />
      </div>

      <div className={buttons}>
          <button>
            이 게시판 삭제하기
          </button>
          <button>

          </button>
      </div>

    </div>
  )
}

export default App
