import React from 'react'
import PropTypes from 'prop-types'
import { MAIN_DARK_BLUE, WHITE } from '../constants'

function AdvancedLogo ({ backgroundColor, width, height }) {
  let icon = (
    <svg width={width} height={height} viewBox='0 0 539 182' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M186.81 64.7676H502.742C522.767 64.7676 539 81.0007 539 101.025V101.025C539 121.05 522.767 137.283 502.742 137.283H186.81L213.978 122.78L222.859 96.8815L207.708 75.1269L186.81 64.7676Z' fill='#00283D' />
      <path d='M64.8326 133.141H191.666V133.1C196.472 132.877 201.167 131.579 205.404 129.302C209.642 127.026 213.314 123.828 216.151 119.946C218.988 116.064 220.917 111.595 221.796 106.87C222.674 102.144 222.481 97.2817 221.229 92.6408C219.977 87.9998 217.699 83.6984 214.563 80.0534C211.427 76.4084 207.512 73.5127 203.107 71.5795C198.701 69.6463 193.918 68.7249 189.109 68.8831C184.3 69.0413 179.588 70.2751 175.32 72.4936C172.686 66.4188 168.699 61.0245 163.663 56.7211C158.626 52.4177 152.674 49.3188 146.258 47.6602M37.6245 47.6602C28.2851 50.0658 20.0115 55.5051 14.1055 63.1222C8.19945 70.7393 4.99629 80.1017 5 89.7365C5.00372 99.3712 8.2141 108.731 14.126 116.344C20.0379 123.956 28.3157 129.389 37.657 131.788' stroke='#00283D' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M87.798 74.3008L70.8761 80.2407L78.323 96.0184' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M71.2574 80.5203C78.9735 85.0529 87.9728 86.9112 96.8556 85.8061C105.738 84.701 114.006 80.6945 120.374 74.4097C126.742 68.1249 130.851 59.9143 132.064 51.0548C133.278 42.1954 131.526 33.1838 127.082 25.4218C122.637 17.6598 115.75 11.5825 107.49 8.13521C99.231 4.68791 90.0627 4.06387 81.4115 6.36015C72.7603 8.65642 65.1113 13.7443 59.6542 20.8324C54.1971 27.9204 51.2378 36.6113 51.2366 45.5533V106.043' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.2} d='M51.2366 169.992V177.058' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.4} d='M51.3015 147.756V158.918' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path opacity={0.7} d='M51.2366 117.537V136.2' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M234.405 119.738L250.705 83.1671H259.064L275.417 119.738H266.535L253.161 87.4511H256.504L243.078 119.738H234.405ZM242.555 111.902L244.802 105.475H263.61L265.908 111.902H242.555ZM290.45 120.156C287.803 120.156 285.417 119.564 283.292 118.38C281.168 117.161 279.479 115.472 278.225 113.312C277.006 111.153 276.396 108.61 276.396 105.684C276.396 102.724 277.006 100.164 278.225 98.0045C279.479 95.8451 281.168 94.1732 283.292 92.989C285.417 91.8048 287.803 91.2127 290.45 91.2127C292.818 91.2127 294.891 91.7352 296.667 92.7801C298.443 93.8249 299.819 95.4097 300.794 97.5343C301.769 99.6589 302.257 102.376 302.257 105.684C302.257 108.958 301.787 111.675 300.847 113.835C299.906 115.959 298.548 117.544 296.771 118.589C295.03 119.634 292.923 120.156 290.45 120.156ZM291.86 113.469C293.184 113.469 294.386 113.155 295.465 112.528C296.545 111.902 297.398 111.013 298.025 109.864C298.687 108.68 299.018 107.287 299.018 105.684C299.018 104.047 298.687 102.654 298.025 101.505C297.398 100.355 296.545 99.4673 295.465 98.8404C294.386 98.2135 293.184 97.9 291.86 97.9C290.502 97.9 289.283 98.2135 288.203 98.8404C287.124 99.4673 286.253 100.355 285.591 101.505C284.964 102.654 284.651 104.047 284.651 105.684C284.651 107.287 284.964 108.68 285.591 109.864C286.253 111.013 287.124 111.902 288.203 112.528C289.283 113.155 290.502 113.469 291.86 113.469ZM299.227 119.738V113.991L299.384 105.632L298.861 97.3253V80.9728H307.011V119.738H299.227ZM322.182 119.738L310.375 91.6307H318.786L328.608 115.82H324.429L334.616 91.6307H342.453L330.594 119.738H322.182ZM362.101 119.738V114.252L361.579 113.051V103.229C361.579 101.487 361.039 100.129 359.959 99.1539C358.914 98.1786 357.295 97.691 355.1 97.691C353.603 97.691 352.122 97.9348 350.659 98.4224C349.231 98.8752 348.012 99.5022 347.002 100.303L344.077 94.6086C345.609 93.5289 347.455 92.693 349.615 92.1009C351.774 91.5088 353.968 91.2127 356.197 91.2127C360.481 91.2127 363.808 92.2228 366.176 94.2429C368.544 96.263 369.729 99.4151 369.729 103.699V119.738H362.101ZM353.533 120.156C351.339 120.156 349.458 119.79 347.891 119.059C346.323 118.293 345.122 117.265 344.286 115.977C343.45 114.688 343.032 113.242 343.032 111.64C343.032 109.968 343.432 108.506 344.233 107.252C345.069 105.998 346.375 105.023 348.152 104.326C349.928 103.595 352.244 103.229 355.1 103.229H362.571V107.983H355.988C354.073 107.983 352.749 108.297 352.018 108.924C351.321 109.551 350.973 110.334 350.973 111.275C350.973 112.319 351.374 113.155 352.175 113.782C353.01 114.374 354.142 114.67 355.57 114.67C356.929 114.67 358.148 114.357 359.228 113.73C360.307 113.068 361.091 112.11 361.579 110.857L362.832 114.618C362.24 116.429 361.161 117.805 359.593 118.746C358.026 119.686 356.006 120.156 353.533 120.156ZM394.189 91.2127C396.418 91.2127 398.403 91.6655 400.145 92.5711C401.921 93.4418 403.314 94.8002 404.324 96.6461C405.334 98.4573 405.839 100.791 405.839 103.647V119.738H397.689V104.901C397.689 102.637 397.184 100.965 396.174 99.8853C395.199 98.8056 393.806 98.2657 391.995 98.2657C390.706 98.2657 389.539 98.5444 388.494 99.1016C387.484 99.6241 386.683 100.443 386.091 101.557C385.534 102.672 385.255 104.1 385.255 105.841V119.738H377.105V91.6307H384.889V99.4151L383.427 97.0641C384.437 95.1833 385.882 93.7379 387.763 92.7278C389.644 91.7177 391.786 91.2127 394.189 91.2127ZM427.015 120.156C423.985 120.156 421.285 119.547 418.917 118.328C416.548 117.074 414.685 115.35 413.327 113.155C412.003 110.961 411.341 108.471 411.341 105.684C411.341 102.863 412.003 100.373 413.327 98.2135C414.685 96.0192 416.548 94.3126 418.917 93.0935C421.285 91.8397 423.985 91.2127 427.015 91.2127C429.975 91.2127 432.553 91.8397 434.747 93.0935C436.941 94.3126 438.561 96.0714 439.606 98.3702L433.284 101.766C432.553 100.443 431.63 99.4673 430.515 98.8404C429.435 98.2135 428.251 97.9 426.962 97.9C425.569 97.9 424.315 98.2135 423.201 98.8404C422.086 99.4673 421.198 100.355 420.536 101.505C419.909 102.654 419.596 104.047 419.596 105.684C419.596 107.321 419.909 108.715 420.536 109.864C421.198 111.013 422.086 111.902 423.201 112.528C424.315 113.155 425.569 113.469 426.962 113.469C428.251 113.469 429.435 113.173 430.515 112.581C431.63 111.954 432.553 110.961 433.284 109.603L439.606 113.051C438.561 115.315 436.941 117.074 434.747 118.328C432.553 119.547 429.975 120.156 427.015 120.156ZM457.89 120.156C454.686 120.156 451.865 119.529 449.427 118.275C447.023 117.021 445.16 115.315 443.837 113.155C442.513 110.961 441.851 108.471 441.851 105.684C441.851 102.863 442.496 100.373 443.784 98.2135C445.108 96.0192 446.902 94.3126 449.165 93.0935C451.429 91.8397 453.989 91.2127 456.845 91.2127C459.597 91.2127 462.07 91.8048 464.264 92.989C466.493 94.1384 468.252 95.8102 469.541 98.0045C470.829 100.164 471.474 102.759 471.474 105.789C471.474 106.102 471.456 106.468 471.422 106.886C471.387 107.269 471.352 107.635 471.317 107.983H448.486V103.229H467.033L463.898 104.64C463.898 103.177 463.602 101.905 463.01 100.826C462.418 99.746 461.6 98.9101 460.555 98.318C459.51 97.691 458.291 97.3776 456.898 97.3776C455.504 97.3776 454.268 97.691 453.188 98.318C452.143 98.9101 451.325 99.7634 450.733 100.878C450.141 101.958 449.845 103.246 449.845 104.744V105.998C449.845 107.53 450.176 108.889 450.837 110.073C451.534 111.222 452.492 112.11 453.711 112.737C454.965 113.33 456.427 113.626 458.099 113.626C459.597 113.626 460.903 113.399 462.018 112.946C463.167 112.494 464.212 111.814 465.152 110.909L469.489 115.611C468.2 117.074 466.58 118.206 464.63 119.007C462.679 119.773 460.433 120.156 457.89 120.156ZM488.968 120.156C486.321 120.156 483.935 119.564 481.811 118.38C479.686 117.161 477.997 115.472 476.743 113.312C475.524 111.153 474.915 108.61 474.915 105.684C474.915 102.724 475.524 100.164 476.743 98.0045C477.997 95.8451 479.686 94.1732 481.811 92.989C483.935 91.8048 486.321 91.2127 488.968 91.2127C491.337 91.2127 493.409 91.7352 495.185 92.7801C496.962 93.8249 498.338 95.4097 499.313 97.5343C500.288 99.6589 500.776 102.376 500.776 105.684C500.776 108.958 500.305 111.675 499.365 113.835C498.425 115.959 497.066 117.544 495.29 118.589C493.548 119.634 491.441 120.156 488.968 120.156ZM490.379 113.469C491.702 113.469 492.904 113.155 493.984 112.528C495.064 111.902 495.917 111.013 496.544 109.864C497.206 108.68 497.536 107.287 497.536 105.684C497.536 104.047 497.206 102.654 496.544 101.505C495.917 100.355 495.064 99.4673 493.984 98.8404C492.904 98.2135 491.702 97.9 490.379 97.9C489.021 97.9 487.802 98.2135 486.722 98.8404C485.642 99.4673 484.771 100.355 484.11 101.505C483.483 102.654 483.169 104.047 483.169 105.684C483.169 107.287 483.483 108.68 484.11 109.864C484.771 111.013 485.642 111.902 486.722 112.528C487.802 113.155 489.021 113.469 490.379 113.469ZM497.745 119.738V113.991L497.902 105.632L497.38 97.3253V80.9728H505.53V119.738H497.745Z' fill='white' />
    </svg>
  )

  if (backgroundColor === MAIN_DARK_BLUE) {
    icon = (
      <svg width={width} height={height} viewBox='0 0 539 182' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M186.81 64.7676H502.742C522.767 64.7676 539 81.0007 539 101.025V101.025C539 121.05 522.767 137.283 502.742 137.283H186.81L213.978 122.78L222.859 96.8815L207.708 75.1269L186.81 64.7676Z' fill='white' />
        <path d='M64.8326 133.141H191.666V133.1C196.472 132.877 201.167 131.579 205.404 129.302C209.642 127.026 213.314 123.828 216.151 119.946C218.988 116.064 220.917 111.595 221.796 106.87C222.674 102.144 222.481 97.2817 221.229 92.6408C219.977 87.9998 217.699 83.6984 214.563 80.0534C211.427 76.4084 207.512 73.5127 203.107 71.5795C198.701 69.6463 193.918 68.7249 189.109 68.8831C184.3 69.0413 179.588 70.2751 175.32 72.4936C172.686 66.4188 168.699 61.0245 163.663 56.7211C158.626 52.4177 152.674 49.3188 146.258 47.6602M37.6245 47.6602C28.2851 50.0658 20.0115 55.5051 14.1055 63.1222C8.19945 70.7393 4.99629 80.1017 5 89.7365C5.00372 99.3712 8.2141 108.731 14.126 116.344C20.0379 123.956 28.3157 129.389 37.657 131.788' stroke='white' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M87.798 74.3008L70.8761 80.2407L78.323 96.0184' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M71.2574 80.5203C78.9735 85.0529 87.9728 86.9112 96.8556 85.8061C105.738 84.701 114.006 80.6945 120.374 74.4097C126.742 68.1249 130.851 59.9143 132.064 51.0548C133.278 42.1954 131.526 33.1838 127.082 25.4218C122.637 17.6598 115.75 11.5825 107.49 8.13521C99.231 4.68791 90.0627 4.06387 81.4115 6.36015C72.7603 8.65642 65.1113 13.7443 59.6542 20.8324C54.1971 27.9204 51.2378 36.6113 51.2366 45.5533V106.043' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.2} d='M51.2366 169.992V177.058' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.4} d='M51.3015 147.756V158.918' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path opacity={0.7} d='M51.2366 117.537V136.2' stroke='#21FA90' strokeWidth={8.3591} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M234.405 119.738L250.705 83.1671H259.064L275.417 119.738H266.535L253.161 87.4511H256.504L243.078 119.738H234.405ZM242.555 111.902L244.802 105.475H263.61L265.908 111.902H242.555ZM290.45 120.156C287.803 120.156 285.417 119.564 283.292 118.38C281.168 117.161 279.479 115.472 278.225 113.312C277.006 111.153 276.396 108.61 276.396 105.684C276.396 102.724 277.006 100.164 278.225 98.0045C279.479 95.8451 281.168 94.1732 283.292 92.989C285.417 91.8048 287.803 91.2127 290.45 91.2127C292.818 91.2127 294.891 91.7352 296.667 92.7801C298.443 93.8249 299.819 95.4097 300.794 97.5343C301.769 99.6589 302.257 102.376 302.257 105.684C302.257 108.958 301.787 111.675 300.847 113.835C299.906 115.959 298.548 117.544 296.771 118.589C295.03 119.634 292.923 120.156 290.45 120.156ZM291.86 113.469C293.184 113.469 294.386 113.155 295.465 112.528C296.545 111.902 297.398 111.013 298.025 109.864C298.687 108.68 299.018 107.287 299.018 105.684C299.018 104.047 298.687 102.654 298.025 101.505C297.398 100.355 296.545 99.4673 295.465 98.8404C294.386 98.2135 293.184 97.9 291.86 97.9C290.502 97.9 289.283 98.2135 288.203 98.8404C287.124 99.4673 286.253 100.355 285.591 101.505C284.964 102.654 284.651 104.047 284.651 105.684C284.651 107.287 284.964 108.68 285.591 109.864C286.253 111.013 287.124 111.902 288.203 112.528C289.283 113.155 290.502 113.469 291.86 113.469ZM299.227 119.738V113.991L299.384 105.632L298.861 97.3253V80.9728H307.011V119.738H299.227ZM322.182 119.738L310.375 91.6307H318.786L328.608 115.82H324.429L334.616 91.6307H342.453L330.594 119.738H322.182ZM362.101 119.738V114.252L361.579 113.051V103.229C361.579 101.487 361.039 100.129 359.959 99.1539C358.914 98.1786 357.295 97.691 355.1 97.691C353.603 97.691 352.122 97.9348 350.659 98.4224C349.231 98.8752 348.012 99.5022 347.002 100.303L344.077 94.6086C345.609 93.5289 347.455 92.693 349.615 92.1009C351.774 91.5088 353.968 91.2127 356.197 91.2127C360.481 91.2127 363.808 92.2228 366.176 94.2429C368.544 96.263 369.729 99.4151 369.729 103.699V119.738H362.101ZM353.533 120.156C351.339 120.156 349.458 119.79 347.891 119.059C346.323 118.293 345.122 117.265 344.286 115.977C343.45 114.688 343.032 113.242 343.032 111.64C343.032 109.968 343.432 108.506 344.233 107.252C345.069 105.998 346.375 105.023 348.152 104.326C349.928 103.595 352.244 103.229 355.1 103.229H362.571V107.983H355.988C354.073 107.983 352.749 108.297 352.018 108.924C351.321 109.551 350.973 110.334 350.973 111.275C350.973 112.319 351.374 113.155 352.175 113.782C353.01 114.374 354.142 114.67 355.57 114.67C356.929 114.67 358.148 114.357 359.228 113.73C360.307 113.068 361.091 112.11 361.579 110.857L362.832 114.618C362.24 116.429 361.161 117.805 359.593 118.746C358.026 119.686 356.006 120.156 353.533 120.156ZM394.189 91.2127C396.418 91.2127 398.403 91.6655 400.145 92.5711C401.921 93.4418 403.314 94.8002 404.324 96.6461C405.334 98.4573 405.839 100.791 405.839 103.647V119.738H397.689V104.901C397.689 102.637 397.184 100.965 396.174 99.8853C395.199 98.8056 393.806 98.2657 391.995 98.2657C390.706 98.2657 389.539 98.5444 388.494 99.1016C387.484 99.6241 386.683 100.443 386.091 101.557C385.534 102.672 385.255 104.1 385.255 105.841V119.738H377.105V91.6307H384.889V99.4151L383.427 97.0641C384.437 95.1833 385.882 93.7379 387.763 92.7278C389.644 91.7177 391.786 91.2127 394.189 91.2127ZM427.015 120.156C423.985 120.156 421.285 119.547 418.917 118.328C416.548 117.074 414.685 115.35 413.327 113.155C412.003 110.961 411.341 108.471 411.341 105.684C411.341 102.863 412.003 100.373 413.327 98.2135C414.685 96.0192 416.548 94.3126 418.917 93.0935C421.285 91.8397 423.985 91.2127 427.015 91.2127C429.975 91.2127 432.553 91.8397 434.747 93.0935C436.941 94.3126 438.561 96.0714 439.606 98.3702L433.284 101.766C432.553 100.443 431.63 99.4673 430.515 98.8404C429.435 98.2135 428.251 97.9 426.962 97.9C425.569 97.9 424.315 98.2135 423.201 98.8404C422.086 99.4673 421.198 100.355 420.536 101.505C419.909 102.654 419.596 104.047 419.596 105.684C419.596 107.321 419.909 108.715 420.536 109.864C421.198 111.013 422.086 111.902 423.201 112.528C424.315 113.155 425.569 113.469 426.962 113.469C428.251 113.469 429.435 113.173 430.515 112.581C431.63 111.954 432.553 110.961 433.284 109.603L439.606 113.051C438.561 115.315 436.941 117.074 434.747 118.328C432.553 119.547 429.975 120.156 427.015 120.156ZM457.89 120.156C454.686 120.156 451.865 119.529 449.427 118.275C447.023 117.021 445.16 115.315 443.837 113.155C442.513 110.961 441.851 108.471 441.851 105.684C441.851 102.863 442.496 100.373 443.784 98.2135C445.108 96.0192 446.902 94.3126 449.165 93.0935C451.429 91.8397 453.989 91.2127 456.845 91.2127C459.597 91.2127 462.07 91.8048 464.264 92.989C466.493 94.1384 468.252 95.8102 469.541 98.0045C470.829 100.164 471.474 102.759 471.474 105.789C471.474 106.102 471.456 106.468 471.422 106.886C471.387 107.269 471.352 107.635 471.317 107.983H448.486V103.229H467.033L463.898 104.64C463.898 103.177 463.602 101.905 463.01 100.826C462.418 99.746 461.6 98.9101 460.555 98.318C459.51 97.691 458.291 97.3776 456.898 97.3776C455.504 97.3776 454.268 97.691 453.188 98.318C452.143 98.9101 451.325 99.7634 450.733 100.878C450.141 101.958 449.845 103.246 449.845 104.744V105.998C449.845 107.53 450.176 108.889 450.837 110.073C451.534 111.222 452.492 112.11 453.711 112.737C454.965 113.33 456.427 113.626 458.099 113.626C459.597 113.626 460.903 113.399 462.018 112.946C463.167 112.494 464.212 111.814 465.152 110.909L469.489 115.611C468.2 117.074 466.58 118.206 464.63 119.007C462.679 119.773 460.433 120.156 457.89 120.156ZM488.968 120.156C486.321 120.156 483.935 119.564 481.811 118.38C479.686 117.161 477.997 115.472 476.743 113.312C475.524 111.153 474.915 108.61 474.915 105.684C474.915 102.724 475.524 100.164 476.743 98.0045C477.997 95.8451 479.686 94.1732 481.811 92.989C483.935 91.8048 486.321 91.2127 488.968 91.2127C491.337 91.2127 493.409 91.7352 495.185 92.7801C496.962 93.8249 498.338 95.4097 499.313 97.5343C500.288 99.6589 500.776 102.376 500.776 105.684C500.776 108.958 500.305 111.675 499.365 113.835C498.425 115.959 497.066 117.544 495.29 118.589C493.548 119.634 491.441 120.156 488.968 120.156ZM490.379 113.469C491.702 113.469 492.904 113.155 493.984 112.528C495.064 111.902 495.917 111.013 496.544 109.864C497.206 108.68 497.536 107.287 497.536 105.684C497.536 104.047 497.206 102.654 496.544 101.505C495.917 100.355 495.064 99.4673 493.984 98.8404C492.904 98.2135 491.702 97.9 490.379 97.9C489.021 97.9 487.802 98.2135 486.722 98.8404C485.642 99.4673 484.771 100.355 484.11 101.505C483.483 102.654 483.169 104.047 483.169 105.684C483.169 107.287 483.483 108.68 484.11 109.864C484.771 111.013 485.642 111.902 486.722 112.528C487.802 113.155 489.021 113.469 490.379 113.469ZM497.745 119.738V113.991L497.902 105.632L497.38 97.3253V80.9728H505.53V119.738H497.745Z' fill='#00283D' />

      </svg>
    )
  }

  return icon
}

AdvancedLogo.propTypes = {
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

AdvancedLogo.defaultProps = {
  backgroundColor: WHITE,
  width: 539,
  height: 182
}

export default AdvancedLogo
