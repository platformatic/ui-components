
import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import { COLORS_ICON, ERROR_RED, MAIN_GREEN, RICH_BLACK, WHITE } from '../components/constants'
import Button from '../components/Button'
export default {
  title: 'Platformatic/Splash Screen',
  component: SplashScreen,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_ICON
      }
    }
  }
}

const Template = (args) => {
  const {
    timeout = 5000
  } = args
  const [showSplashScreen, setShowSplashScreen] = useState(false)
  const [splashOptions, setSplashOptions] = useState({})

  useEffect(() => {
    if (Object.keys(splashOptions).length > 0) {
      setShowSplashScreen(true)
    }
  }, [splashOptions])
  return (
    <div style={{ height: '100vh' }}>
      <div className='flex flex-col gap-y-2 w-1/4'>
        <Button
          color={MAIN_GREEN}
          backgroundColor={RICH_BLACK}
          onClick={() => {
            setSplashOptions({
              message: 'This is a success message',
              success: true,
              title: 'Operation Completed!',
              timeout
            })
          }}
          label='Success'
        />

        <Button
          color={ERROR_RED}
          backgroundColor={RICH_BLACK}
          onClick={() => {
            setSplashOptions({
              title: 'The application wad deleted',
              success: false,
              message: 'The application you are looking for was deleted on YYYY-MM-DD [HH:MM:SS]',
              timeout
            })
          }}
          label='Failure'
        />

        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => {
            setSplashOptions({
              title: 'The application wad deleted',
              success: false,
              message: 'The application you are looking for was deleted on YYYY-MM-DD [HH:MM:SS]',
              timeout,
              blur: true
            })
          }}
          label='With Blur'
        />
      </div>

      {showSplashScreen && (
        <SplashScreen
          {...splashOptions}
          onDestroyed={() => setShowSplashScreen(false)}
        />
      )}
    </div>
  )
}

export const Samples = {
  render: () => <Template timeout={5000000} />
}
