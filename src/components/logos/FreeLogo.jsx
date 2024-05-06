import React from 'react'
import PropTypes from 'prop-types'
import { MAIN_DARK_BLUE, WHITE } from '../constants'

function FreeLogo ({
  backgroundColor = WHITE,
  width = 399,
  height = 183
}) {
  let icon = (
    <svg width={width} height={height} viewBox='0 0 399 183' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M187.725 65.0947H354.562C374.696 65.0947 391.018 81.4167 391.018 101.551V101.551C391.018 121.685 374.696 138.007 354.562 138.007H187.725L215.041 123.424L223.971 97.3844L208.737 75.5107L187.725 65.0947Z' fill='#00283D' />
      <path d='M65.0797 133.842H192.607V133.802C197.44 133.577 202.16 132.272 206.421 129.983C210.682 127.694 214.374 124.479 217.227 120.575C220.079 116.672 222.018 112.179 222.902 107.427C223.785 102.676 223.591 97.787 222.332 93.1206C221.074 88.4542 218.783 84.1293 215.63 80.4644C212.476 76.7994 208.54 73.8878 204.111 71.9441C199.681 70.0003 194.872 69.0738 190.037 69.2329C185.201 69.3919 180.463 70.6325 176.172 72.8632C173.523 66.7552 169.514 61.3312 164.451 57.0043C159.387 52.6774 153.402 49.5615 146.951 47.8938M37.7227 47.8938C28.3321 50.3126 20.0132 55.7817 14.0749 63.4404C8.13652 71.0992 4.91582 80.513 4.91956 90.2004C4.9233 99.8879 8.15125 109.299 14.0955 116.953C20.0398 124.608 28.3629 130.07 37.7553 132.482' stroke='#00283D' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M88.1708 74.6802L71.1563 80.6526L78.644 96.5167' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M71.5396 80.9337C79.298 85.4911 88.3466 87.3595 97.278 86.2484C106.209 85.1372 114.523 81.1088 120.925 74.7896C127.328 68.4705 131.46 60.2149 132.68 51.3069C133.899 42.399 132.138 33.3381 127.669 25.5336C123.201 17.7291 116.276 11.6185 107.971 8.15237C99.6664 4.6862 90.4479 4.05875 81.7493 6.36759C73.0508 8.67644 65.3599 13.7922 59.8729 20.919C54.3859 28.0459 51.4105 36.7844 51.4093 45.7753V106.596' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.2} d='M51.4093 170.895V178' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.4} d='M51.4746 148.537V159.761' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.7} d='M51.4093 118.154V136.918' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M248.293 99.863H265.943V106.692H248.293V99.863ZM248.923 120.087H240.413V83.3159H268.202V90.1448H248.923V120.087ZM272.872 120.087V91.8258H280.699V99.8104L279.596 97.4991C280.436 95.5029 281.785 93.9971 283.641 92.9815C285.497 91.9309 287.756 91.4056 290.417 91.4056V98.9699C290.067 98.9349 289.752 98.9174 289.472 98.9174C289.192 98.8824 288.894 98.8649 288.579 98.8649C286.337 98.8649 284.516 99.5128 283.116 100.809C281.75 102.069 281.067 104.048 281.067 106.744V120.087H272.872ZM309.059 120.507C305.837 120.507 303 119.877 300.549 118.616C298.133 117.356 296.259 115.64 294.928 113.468C293.598 111.262 292.932 108.758 292.932 105.956C292.932 103.12 293.58 100.616 294.876 98.4446C296.207 96.2384 298.01 94.5224 300.286 93.2967C302.563 92.0359 305.137 91.4056 308.008 91.4056C310.775 91.4056 313.261 92.0009 315.468 93.1916C317.709 94.3473 319.477 96.0282 320.773 98.2345C322.069 100.406 322.717 103.015 322.717 106.062C322.717 106.377 322.699 106.744 322.664 107.165C322.629 107.55 322.594 107.918 322.559 108.268H299.603V103.488H318.252L315.1 104.906C315.1 103.435 314.802 102.157 314.207 101.071C313.612 99.9855 312.789 99.145 311.738 98.5497C310.687 97.9193 309.462 97.6042 308.061 97.6042C306.66 97.6042 305.417 97.9193 304.331 98.5497C303.281 99.145 302.458 100.003 301.862 101.124C301.267 102.209 300.969 103.505 300.969 105.011V106.272C300.969 107.813 301.302 109.178 301.967 110.369C302.668 111.525 303.631 112.418 304.857 113.048C306.117 113.643 307.588 113.941 309.269 113.941C310.775 113.941 312.088 113.713 313.209 113.258C314.365 112.803 315.415 112.12 316.361 111.21L320.721 115.937C319.425 117.408 317.797 118.546 315.835 119.352C313.874 120.122 311.615 120.507 309.059 120.507ZM342.198 120.507C338.976 120.507 336.14 119.877 333.688 118.616C331.272 117.356 329.398 115.64 328.068 113.468C326.737 111.262 326.071 108.758 326.071 105.956C326.071 103.12 326.719 100.616 328.015 98.4446C329.346 96.2384 331.149 94.5224 333.426 93.2967C335.702 92.0359 338.276 91.4056 341.148 91.4056C343.914 91.4056 346.401 92.0009 348.607 93.1916C350.848 94.3473 352.617 96.0282 353.913 98.2345C355.208 100.406 355.856 103.015 355.856 106.062C355.856 106.377 355.839 106.744 355.804 107.165C355.769 107.55 355.734 107.918 355.699 108.268H332.743V103.488H351.391L348.239 104.906C348.239 103.435 347.942 102.157 347.346 101.071C346.751 99.9855 345.928 99.145 344.877 98.5497C343.827 97.9193 342.601 97.6042 341.2 97.6042C339.799 97.6042 338.556 97.9193 337.471 98.5497C336.42 99.145 335.597 100.003 335.002 101.124C334.406 102.209 334.109 103.505 334.109 105.011V106.272C334.109 107.813 334.441 109.178 335.107 110.369C335.807 111.525 336.77 112.418 337.996 113.048C339.257 113.643 340.727 113.941 342.408 113.941C343.914 113.941 345.227 113.713 346.348 113.258C347.504 112.803 348.554 112.12 349.5 111.21L353.86 115.937C352.564 117.408 350.936 118.546 348.975 119.352C347.014 120.122 344.755 120.507 342.198 120.507Z' fill='white' />

    </svg>
  )

  if (backgroundColor === MAIN_DARK_BLUE) {
    icon = (
      <svg width={width} height={height} viewBox='0 0 399 183' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M187.725 65.0947H354.562C374.696 65.0947 391.018 81.4167 391.018 101.551V101.551C391.018 121.685 374.696 138.007 354.562 138.007H187.725L215.041 123.424L223.971 97.3844L208.737 75.5107L187.725 65.0947Z' fill='white' />
        <path d='M65.0797 133.842H192.607V133.802C197.44 133.577 202.16 132.272 206.421 129.983C210.682 127.694 214.374 124.479 217.227 120.575C220.079 116.672 222.018 112.179 222.902 107.427C223.785 102.676 223.591 97.787 222.332 93.1206C221.074 88.4542 218.783 84.1293 215.63 80.4644C212.476 76.7994 208.54 73.8878 204.111 71.9441C199.681 70.0003 194.872 69.0738 190.037 69.2329C185.201 69.3919 180.463 70.6325 176.172 72.8632C173.523 66.7552 169.514 61.3312 164.451 57.0043C159.387 52.6774 153.402 49.5615 146.951 47.8938M37.7227 47.8938C28.3321 50.3126 20.0132 55.7817 14.0749 63.4404C8.13652 71.0992 4.91582 80.513 4.91956 90.2004C4.9233 99.8879 8.15125 109.299 14.0955 116.953C20.0398 124.608 28.3629 130.07 37.7553 132.482' stroke='white' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M88.1708 74.6802L71.1563 80.6526L78.644 96.5167' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M71.5396 80.9337C79.298 85.4911 88.3466 87.3595 97.278 86.2484C106.209 85.1372 114.523 81.1088 120.925 74.7896C127.328 68.4705 131.46 60.2149 132.68 51.3069C133.899 42.399 132.138 33.3381 127.669 25.5336C123.201 17.7291 116.276 11.6185 107.971 8.15237C99.6664 4.6862 90.4479 4.05875 81.7493 6.36759C73.0508 8.67644 65.3599 13.7922 59.8729 20.919C54.3859 28.0459 51.4105 36.7844 51.4093 45.7753V106.596' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.2} d='M51.4093 170.895V178' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.4} d='M51.4746 148.537V159.761' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.7} d='M51.4093 118.154V136.918' stroke='#21FA90' strokeWidth={8.40486} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M248.293 99.863H265.943V106.692H248.293V99.863ZM248.923 120.087H240.413V83.3159H268.202V90.1448H248.923V120.087ZM272.872 120.087V91.8258H280.699V99.8104L279.596 97.4991C280.436 95.5029 281.785 93.9971 283.641 92.9815C285.497 91.9309 287.756 91.4056 290.417 91.4056V98.9699C290.067 98.9349 289.752 98.9174 289.472 98.9174C289.192 98.8824 288.894 98.8649 288.579 98.8649C286.337 98.8649 284.516 99.5128 283.116 100.809C281.75 102.069 281.067 104.048 281.067 106.744V120.087H272.872ZM309.059 120.507C305.837 120.507 303 119.877 300.549 118.616C298.133 117.356 296.259 115.64 294.928 113.468C293.598 111.262 292.932 108.758 292.932 105.956C292.932 103.12 293.58 100.616 294.876 98.4446C296.207 96.2384 298.01 94.5224 300.286 93.2967C302.563 92.0359 305.137 91.4056 308.008 91.4056C310.775 91.4056 313.261 92.0009 315.468 93.1916C317.709 94.3473 319.477 96.0282 320.773 98.2345C322.069 100.406 322.717 103.015 322.717 106.062C322.717 106.377 322.699 106.744 322.664 107.165C322.629 107.55 322.594 107.918 322.559 108.268H299.603V103.488H318.252L315.1 104.906C315.1 103.435 314.802 102.157 314.207 101.071C313.612 99.9855 312.789 99.145 311.738 98.5497C310.687 97.9193 309.462 97.6042 308.061 97.6042C306.66 97.6042 305.417 97.9193 304.331 98.5497C303.281 99.145 302.458 100.003 301.862 101.124C301.267 102.209 300.969 103.505 300.969 105.011V106.272C300.969 107.813 301.302 109.178 301.967 110.369C302.668 111.525 303.631 112.418 304.857 113.048C306.117 113.643 307.588 113.941 309.269 113.941C310.775 113.941 312.088 113.713 313.209 113.258C314.365 112.803 315.415 112.12 316.361 111.21L320.721 115.937C319.425 117.408 317.797 118.546 315.835 119.352C313.874 120.122 311.615 120.507 309.059 120.507ZM342.198 120.507C338.976 120.507 336.14 119.877 333.688 118.616C331.272 117.356 329.398 115.64 328.068 113.468C326.737 111.262 326.071 108.758 326.071 105.956C326.071 103.12 326.719 100.616 328.015 98.4446C329.346 96.2384 331.149 94.5224 333.426 93.2967C335.702 92.0359 338.276 91.4056 341.148 91.4056C343.914 91.4056 346.401 92.0009 348.607 93.1916C350.848 94.3473 352.617 96.0282 353.913 98.2345C355.208 100.406 355.856 103.015 355.856 106.062C355.856 106.377 355.839 106.744 355.804 107.165C355.769 107.55 355.734 107.918 355.699 108.268H332.743V103.488H351.391L348.239 104.906C348.239 103.435 347.942 102.157 347.346 101.071C346.751 99.9855 345.928 99.145 344.877 98.5497C343.827 97.9193 342.601 97.6042 341.2 97.6042C339.799 97.6042 338.556 97.9193 337.471 98.5497C336.42 99.145 335.597 100.003 335.002 101.124C334.406 102.209 334.109 103.505 334.109 105.011V106.272C334.109 107.813 334.441 109.178 335.107 110.369C335.807 111.525 336.77 112.418 337.996 113.048C339.257 113.643 340.727 113.941 342.408 113.941C343.914 113.941 345.227 113.713 346.348 113.258C347.504 112.803 348.554 112.12 349.5 111.21L353.86 115.937C352.564 117.408 350.936 118.546 348.975 119.352C347.014 120.122 344.755 120.507 342.198 120.507Z' fill='#00283D' />

      </svg>
    )
  }

  return icon
}

FreeLogo.propTypes = {
  /**
   * background color of the button
   */
  backgroundColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * width
   */
  width: PropTypes.number,
  /**
   * height
   */
  height: PropTypes.number
}

export default FreeLogo
