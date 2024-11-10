import React, { FC } from 'react'

type TSideFormOpen = {
  setFormOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SideForm: FC<TSideFormOpen> = ({
  setFormOpen
}) => {
  

  return (
    <div>
      <input 
        type='text'
        placeholder='새로운 게시판 등록하기'
      />
    </div>
  )
}

export default SideForm