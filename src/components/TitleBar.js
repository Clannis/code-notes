import React from 'react'

export const TitleBar = ( { title } ) => {
  return (
    <div className='titlebar'>
      <h1 className='titlebar__title'>
        { title }
      </h1>
    </div>
  )
}
