import React, { useEffect, useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import { ERROR_RED, MAIN_GREEN, RICH_BLACK, WHITE } from '../components/constants'
import Button from '../components/Button'
import Report from '../components/Report'
export default {
  title: 'Platformatic/Splash Screen',
  component: SplashScreen
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

  function getReportSteps () {
    const steps = [
      { type: 'success', label: 'Removed from Main Taxonomy' },
      { type: 'success', label: 'Removed from Preview Taxonomy' },
      { type: 'success', label: 'API Key Invalidated' },
      { type: 'success', label: 'Secrets removed' },
      { type: 'success', label: 'All pods removed' }
    ]
    return steps
  }
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

        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => {
            setSplashOptions({
              title: 'Application deleted successfully',
              success: true,
              message: 'You successfully delete this application.',
              timeout,
              children: (
                <Report steps={getReportSteps()} />
              )
            })
          }}
          label='With report'
        />
      </div>

      {showSplashScreen && (
        <SplashScreen
          {...splashOptions}
          onDestroyed={() => setShowSplashScreen(false)}
        >{splashOptions.children}
        </SplashScreen>
      )}
    </div>
  )
}

export const Samples = {
  render: () => <Template timeout={5000000} />
}
