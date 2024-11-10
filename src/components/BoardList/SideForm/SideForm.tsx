import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { FiCheck } from 'react-icons/fi';

type TSideFormOpen = {
  inputRef : React.RefObject<HTMLInputElement>,
  setIsFormOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SideForm: FC<TSideFormOpen> = ({
  setIsFormOpen,
  inputRef
}) => {
  const [inputText, setInputText] = useState('');
  
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleOnBlur = () => {
    setIsFormOpen(false);
  }

  return (
    <div>
      <input
        // ref={inputRef}
        autoFocus
        type='text'
        placeholder='새로운 게시판 등록하기'
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck />
    </div>
  )
}

export default SideForm