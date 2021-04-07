import React from 'react'

export const TitleBar = ( { title, newClass } ) => {
  return (
    <div className={`titlebar ${newClass ? newClass : ''}`}>
      <h1 className={`titlebar__title ${newClass ? newClass : ''}`}>
        { title }
      </h1>
    </div>
  )
}
