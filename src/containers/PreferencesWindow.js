import React from 'react'
import { TitleBar } from '../components/TitleBar'

export const PreferencesWindow = () => {
  return (
    <>
      <TitleBar title={'Preferences'} newClass={'preferences'}/>
      <div className='preferences__body preferences'>

      </div>
    </>
  )
}
