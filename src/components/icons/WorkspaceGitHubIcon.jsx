import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES } from '../constants'

const WorkspaceGitHubIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  const filledClassName = styles[`filled-${color}`]
  let icon = <></>

  switch (size) {
    case 'small':
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={2} y={2} width={5} height={5} rx={1} stroke='none' />
          <rect x={14} y={14} width={4} height={5.03496} rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <rect x={8} y={14} width={6} height={5.03497} rx={1} transform='rotate(-180 8 14)' stroke='none' />
          <path d='M11.9536 5.69375C12.0927 5.67569 12.2185 5.65322 12.3416 5.6149C12.7748 5.48018 13.0104 5.17439 13.0726 4.71717C13.1038 4.48776 13.1081 4.26057 13.0209 4.04098C12.9823 3.94397 12.9307 3.85456 12.8627 3.77658C12.8412 3.75189 12.8392 3.73151 12.8485 3.7008C12.9099 3.49768 12.8904 3.29787 12.8237 3.09965C12.8118 3.06453 12.7915 3.05851 12.7612 3.05913C12.6421 3.06146 12.5328 3.10174 12.426 3.15123C12.3322 3.19471 12.2429 3.24715 12.1576 3.30659C12.1343 3.3228 12.1145 3.32562 12.0868 3.31838C11.6958 3.21706 11.3041 3.2162 10.9132 3.31838C10.8795 3.32722 10.8577 3.31776 10.8321 3.30094C10.6698 3.19422 10.5028 3.09843 10.3095 3.06551C10.3056 3.0649 10.3017 3.06379 10.2978 3.06306C10.1969 3.04709 10.1851 3.05397 10.156 3.15541C10.1032 3.33975 10.0932 3.52494 10.1513 3.71038C10.1577 3.73089 10.1602 3.74624 10.1439 3.76516C9.92025 4.02539 9.87737 4.33499 9.91681 4.66621C9.93153 4.79012 9.95719 4.91158 10.0029 5.02788C10.1353 5.36548 10.392 5.54613 10.7209 5.63603C10.8221 5.66366 10.9254 5.67987 11.0386 5.69584C10.9516 5.79163 10.9057 5.89945 10.8878 6.02017C10.8842 6.04412 10.8658 6.04645 10.8502 6.05321C10.5688 6.17491 10.3218 6.09447 10.1579 5.82835C10.0775 5.69768 9.97192 5.6014 9.82084 5.56836C9.7795 5.55927 9.73853 5.55915 9.69791 5.57339C9.65515 5.58838 9.65182 5.61564 9.67878 5.64733C9.69826 5.67005 9.72047 5.69203 9.74553 5.7075C9.87892 5.79015 9.96325 5.91456 10.02 6.05898C10.1109 6.29011 10.2864 6.394 10.5142 6.42028C10.6188 6.43232 10.7241 6.42655 10.827 6.40248C10.8664 6.39327 10.8777 6.40014 10.8772 6.44337C10.8755 6.57834 10.8782 6.71343 10.8789 6.8484C10.8795 6.9701 10.8044 7.02647 10.6906 6.98742C10.4046 6.88905 10.144 6.74143 9.91217 6.54273C9.39551 6.10049 9.08812 5.53459 9.01508 4.84489C8.8868 3.63387 9.58768 2.51951 10.7084 2.13364C12.0813 1.66095 13.5547 2.485 13.9216 3.9307C14.2466 5.21086 13.5324 6.56852 12.3144 6.98619C12.1933 7.0277 12.1193 6.97428 12.1195 6.84434C12.1197 6.61727 12.1223 6.3902 12.121 6.16312C12.1199 5.99119 12.0833 5.83068 11.9538 5.69375H11.9536Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M10.8163 6.12131C10.8397 6.12475 10.8652 6.12978 10.8615 6.15876C10.8577 6.18922 10.8309 6.19917 10.8039 6.20003C10.7813 6.20076 10.7565 6.19426 10.7573 6.16589C10.7584 6.12868 10.7897 6.12561 10.8163 6.12131Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M10.2513 6.09384C10.2227 6.08881 10.2011 6.07161 10.1969 6.03686C10.1943 6.01488 10.2045 6.00174 10.2266 6.00284C10.2632 6.00468 10.2839 6.02765 10.2884 6.0629C10.2911 6.08414 10.2758 6.09483 10.2513 6.09397V6.09384Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M10.6195 6.14694C10.644 6.15001 10.6723 6.15394 10.671 6.18489C10.6697 6.21743 10.6407 6.22505 10.6142 6.2237C10.5902 6.22247 10.5642 6.21424 10.5666 6.18243C10.5689 6.15087 10.5966 6.15014 10.6195 6.14694Z' fill='none' className={filledClassName} />
          <path d='M10.4095 6.11356C10.4376 6.1154 10.4646 6.12694 10.4671 6.15961C10.4694 6.18835 10.4435 6.19289 10.4209 6.19117C10.392 6.18884 10.365 6.17877 10.365 6.14303C10.365 6.11663 10.3872 6.11392 10.4095 6.11356Z' fill='none' className={filledClassName} />
          <path d='M10.1574 5.91146C10.1575 5.93 10.1524 5.94585 10.1323 5.9456C10.099 5.94511 10.0838 5.92251 10.0798 5.89132C10.0775 5.87351 10.0835 5.85718 10.1039 5.85742C10.1375 5.85779 10.1505 5.88223 10.1574 5.91158V5.91146Z' fill='none' className={filledClassName} />
          <path d='M10.0548 5.77016C10.0564 5.78993 10.0474 5.80086 10.0317 5.80074C10.0048 5.80062 9.98759 5.7849 9.98331 5.75739C9.98034 5.73884 9.98747 5.72288 10.0077 5.72509C10.0334 5.72804 10.0486 5.74658 10.0548 5.77016Z' fill='none' className={filledClassName} />
          <path d='M9.94862 5.66874C9.94755 5.6879 9.93449 5.69416 9.92036 5.69281C9.90242 5.69097 9.88437 5.68348 9.87985 5.66285C9.87605 5.64516 9.88817 5.63669 9.90408 5.63657C9.92594 5.63644 9.9409 5.64787 9.94862 5.66874Z' fill='none' className={filledClassName} />
        </svg>
      )
      break
    case 'medium':
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={3} y={3} width={7.5} height={7.5} rx={1} stroke='none' strokeWidth={1.5} />
          <rect x={21} y={21} width={6} height={7.55245} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <rect x={12} y={21} width={9} height={7.55245} rx={1} transform='rotate(-180 12 21)' stroke='none' strokeWidth={1.5} />
          <path d='M17.9305 8.54062C18.1391 8.51354 18.3278 8.47983 18.5123 8.42236C19.1623 8.22027 19.5156 7.76158 19.6089 7.07576C19.6558 6.73165 19.6622 6.39085 19.5314 6.06148C19.4735 5.91595 19.396 5.78184 19.2941 5.66487C19.2619 5.62784 19.2588 5.59726 19.2727 5.55121C19.3648 5.24652 19.3356 4.9468 19.2355 4.64948C19.2177 4.5968 19.1872 4.58777 19.1418 4.58869C18.9631 4.59219 18.7992 4.65261 18.639 4.72685C18.4983 4.79206 18.3643 4.87072 18.2364 4.95988C18.2015 4.9842 18.1717 4.98843 18.1302 4.97757C17.5437 4.82559 16.9561 4.8243 16.3698 4.97757C16.3192 4.99083 16.2866 4.97664 16.2481 4.95141C16.0047 4.79133 15.7542 4.64764 15.4642 4.59827C15.4583 4.59735 15.4526 4.59569 15.4467 4.59459C15.2953 4.57064 15.2777 4.58095 15.234 4.73311C15.1547 5.00962 15.1398 5.28741 15.2269 5.56557C15.2365 5.59634 15.2403 5.61936 15.2158 5.64773C14.8804 6.03808 14.8161 6.50248 14.8752 6.99931C14.8973 7.18518 14.9358 7.36737 15.0044 7.54182C15.203 8.04822 15.588 8.3192 16.0814 8.45404C16.2331 8.49549 16.3881 8.5198 16.5579 8.54375C16.4273 8.68744 16.3586 8.84918 16.3317 9.03026C16.3263 9.06618 16.2987 9.06968 16.2754 9.07981C15.8531 9.26237 15.4827 9.14171 15.2369 8.74252C15.1163 8.54652 14.9579 8.40209 14.7313 8.35254C14.6693 8.33891 14.6078 8.33872 14.5469 8.36009C14.4827 8.38257 14.4777 8.42346 14.5182 8.47099C14.5474 8.50507 14.5807 8.53804 14.6183 8.56125C14.8184 8.68523 14.9449 8.87184 15.03 9.08847C15.1663 9.43516 15.4296 9.59101 15.7714 9.63043C15.9281 9.64848 16.0862 9.63982 16.2404 9.60372C16.2996 9.5899 16.3165 9.60022 16.3158 9.66506C16.3133 9.86751 16.3172 10.0701 16.3183 10.2726C16.3192 10.4552 16.2066 10.5397 16.0359 10.4811C15.6069 10.3336 15.216 10.1121 14.8683 9.81409C14.0933 9.15074 13.6322 8.30188 13.5226 7.26734C13.3302 5.45081 14.3815 3.77926 16.0626 3.20046C18.122 2.49142 20.3321 3.72749 20.8824 5.89605C21.3698 7.81629 20.2986 9.85277 18.4715 10.4793C18.29 10.5415 18.179 10.4614 18.1792 10.2665C18.1795 9.92591 18.1835 9.58529 18.1815 9.24468C18.1799 8.98679 18.125 8.74602 17.9306 8.54062H17.9305Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M16.2241 9.18195C16.2592 9.1871 16.2975 9.19466 16.292 9.23813C16.2863 9.28382 16.2461 9.29874 16.2056 9.30003C16.1718 9.30113 16.1345 9.29137 16.1358 9.24882C16.1374 9.193 16.1842 9.18839 16.2241 9.18195Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M15.3769 9.14078C15.3339 9.13323 15.3015 9.10744 15.2953 9.0553C15.2914 9.02233 15.3067 9.00262 15.3398 9.00428C15.3947 9.00704 15.4257 9.04149 15.4325 9.09436C15.4366 9.12623 15.4136 9.14225 15.3769 9.14096V9.14078Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M15.9293 9.2204C15.966 9.225 16.0084 9.2309 16.0064 9.27732C16.0045 9.32614 15.961 9.33756 15.9213 9.33553C15.8853 9.33369 15.8463 9.32135 15.8498 9.27364C15.8534 9.22629 15.8949 9.22519 15.9293 9.2204Z' fill='none' className={filledClassName} />
          <path d='M15.6142 9.17035C15.6562 9.17311 15.6968 9.19043 15.7006 9.23943C15.704 9.28254 15.6651 9.28935 15.6313 9.28677C15.5878 9.28327 15.5474 9.26817 15.5474 9.21456C15.5474 9.17495 15.5807 9.1709 15.6142 9.17035Z' fill='none' className={filledClassName} />
          <path d='M15.2359 8.86719C15.2361 8.89501 15.2284 8.91877 15.1983 8.9184C15.1484 8.91767 15.1256 8.88377 15.1196 8.83698C15.1162 8.81027 15.1251 8.78577 15.1557 8.78614C15.2062 8.78669 15.2256 8.82335 15.2359 8.86738V8.86719Z' fill='none' className={filledClassName} />
          <path d='M15.0823 8.65522C15.0847 8.68488 15.0713 8.70128 15.0476 8.70109C15.0073 8.70091 14.9815 8.67733 14.9751 8.63607C14.9706 8.60825 14.9813 8.5843 15.0116 8.58762C15.0503 8.59204 15.0731 8.61986 15.0823 8.65522Z' fill='none' className={filledClassName} />
          <path d='M14.9228 8.50313C14.9212 8.53187 14.9016 8.54126 14.8804 8.53924C14.8535 8.53647 14.8264 8.52524 14.8197 8.49429C14.814 8.46776 14.8321 8.45505 14.856 8.45487C14.8888 8.45468 14.9112 8.47181 14.9228 8.50313Z' fill='none' className={filledClassName} />
        </svg>
      )
      break
    case 'large':
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={5} y={5} width={12.5} height={12.5} rx={1} stroke='none' strokeWidth={2} />
          <rect x={35} y={35} width={10} height={12.5874} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <rect x={20} y={35} width={15} height={12.5874} rx={1} transform='rotate(-180 20 35)' stroke='none' strokeWidth={2} />
          <path d='M29.8841 14.2344C30.2318 14.1892 30.5463 14.1331 30.8539 14.0373C31.9371 13.7005 32.5259 12.936 32.6815 11.7929C32.7596 11.2194 32.7703 10.6514 32.5524 10.1025C32.4559 9.85991 32.3267 9.6364 32.1568 9.44144C32.1031 9.37973 32.0981 9.32877 32.1212 9.25201C32.2747 8.7442 32.226 8.24467 32.0592 7.74914C32.0295 7.66133 31.9787 7.64628 31.903 7.64782C31.6051 7.65365 31.332 7.75436 31.065 7.87809C30.8304 7.98677 30.6072 8.11787 30.394 8.26647C30.3358 8.307 30.2862 8.31406 30.217 8.29594C29.2395 8.04265 28.2602 8.0405 27.283 8.29594C27.1987 8.31805 27.1443 8.29441 27.0802 8.25235C26.6746 7.98554 26.2571 7.74607 25.7737 7.66378C25.7639 7.66225 25.7544 7.65949 25.7446 7.65764C25.4922 7.61773 25.4628 7.63492 25.39 7.88852C25.2579 8.34936 25.233 8.81235 25.3782 9.27596C25.3942 9.32723 25.4004 9.36561 25.3597 9.41289C24.8006 10.0635 24.6934 10.8375 24.792 11.6655C24.8288 11.9753 24.893 12.2789 25.0073 12.5697C25.3384 13.4137 25.98 13.8653 26.8023 14.0901C27.0552 14.1591 27.3136 14.1997 27.5965 14.2396C27.3789 14.4791 27.2643 14.7486 27.2194 15.0504C27.2105 15.1103 27.1645 15.1161 27.1256 15.133C26.4219 15.4373 25.8046 15.2362 25.3948 14.5709C25.1938 14.2442 24.9298 14.0035 24.5521 13.9209C24.4488 13.8982 24.3463 13.8979 24.2448 13.9335C24.1379 13.9709 24.1296 14.0391 24.197 14.1183C24.2457 14.1751 24.3012 14.2301 24.3638 14.2688C24.6973 14.4754 24.9081 14.7864 25.05 15.1475C25.2772 15.7253 25.7161 15.985 26.2856 16.0507C26.5469 16.0808 26.8103 16.0664 27.0674 16.0062C27.166 15.9832 27.1942 16.0004 27.193 16.1084C27.1889 16.4459 27.1954 16.7836 27.1972 17.121C27.1987 17.4253 27.011 17.5662 26.7265 17.4685C26.0115 17.2226 25.36 16.8536 24.7804 16.3568C23.4888 15.2512 22.7203 13.8365 22.5377 12.1122C22.217 9.08468 23.9692 6.29876 26.7711 5.3341C30.2033 4.15237 33.8868 6.21249 34.804 9.82676C35.6164 13.0272 33.831 16.4213 30.7859 17.4655C30.4833 17.5692 30.2983 17.4357 30.2986 17.1109C30.2992 16.5432 30.3058 15.9755 30.3025 15.4078C30.2998 14.978 30.2084 14.5767 29.8844 14.2344H29.8841Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M27.0404 15.3033C27.0989 15.3118 27.1627 15.3244 27.1535 15.3969C27.144 15.473 27.0769 15.4979 27.0095 15.5001C26.9531 15.5019 26.891 15.4856 26.8931 15.4147C26.8958 15.3217 26.9739 15.314 27.0404 15.3033Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M25.6282 15.2346C25.5566 15.222 25.5026 15.1791 25.4922 15.0922C25.4857 15.0372 25.5112 15.0044 25.5664 15.0071C25.6579 15.0117 25.7096 15.0691 25.7208 15.1573C25.7277 15.2104 25.6894 15.2371 25.6282 15.2349V15.2346Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M26.5488 15.3673C26.61 15.375 26.6807 15.3848 26.6774 15.4622C26.6741 15.5436 26.6017 15.5626 26.5355 15.5592C26.4755 15.5562 26.4105 15.5356 26.4164 15.4561C26.4223 15.3772 26.4915 15.3753 26.5488 15.3673Z' fill='none' className={filledClassName} />
          <path d='M26.0237 15.2839C26.0938 15.2885 26.1615 15.3174 26.1677 15.399C26.1734 15.4709 26.1086 15.4822 26.0522 15.4779C25.9798 15.4721 25.9124 15.4469 25.9124 15.3576C25.9124 15.2916 25.9679 15.2848 26.0237 15.2839Z' fill='none' className={filledClassName} />
          <path d='M25.3933 14.7787C25.3936 14.825 25.3808 14.8646 25.3306 14.864C25.2475 14.8628 25.2095 14.8063 25.1994 14.7283C25.1937 14.6838 25.2086 14.6429 25.2596 14.6436C25.3437 14.6445 25.376 14.7056 25.3933 14.779V14.7787Z' fill='none' className={filledClassName} />
          <path d='M25.1369 14.4254C25.1408 14.4748 25.1185 14.5021 25.079 14.5018C25.0119 14.5015 24.9688 14.4622 24.9582 14.3935C24.9507 14.3471 24.9686 14.3072 25.019 14.3127C25.0835 14.3201 25.1215 14.3664 25.1369 14.4254Z' fill='none' className={filledClassName} />
          <path d='M24.8714 14.1719C24.8688 14.2198 24.8361 14.2354 24.8008 14.232C24.7559 14.2274 24.7108 14.2087 24.6995 14.1571C24.69 14.1129 24.7203 14.0917 24.7601 14.0914C24.8147 14.0911 24.8521 14.1197 24.8714 14.1719Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    case 'extra-large':
      icon = (
        <svg
          width={120}
          height={120}
          viewBox='0 0 120 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={15} y={15} width={37.5} height={37.5} rx={1} stroke='none' strokeWidth={6.5} />
          <rect x={105} y={105} width={30} height={37.7622} rx={1} transform='rotate(-180 105 105)' stroke='none' strokeWidth={6.5} />
          <rect x={60} y={105} width={45} height={37.7622} rx={1} transform='rotate(-180 60 105)' stroke='none' strokeWidth={6.5} />
          <path d='M89.6524 42.7031C90.6955 42.5677 91.6388 42.3992 92.5617 42.1118C95.8113 41.1014 97.5778 38.8079 98.0446 35.3788C98.2789 33.6582 98.3109 31.9543 97.6571 30.3074C97.3676 29.5797 96.9801 28.9092 96.4705 28.3243C96.3093 28.1392 96.2942 27.9863 96.3636 27.756C96.8242 26.2326 96.6781 24.734 96.1775 23.2474C96.0884 22.984 95.9361 22.9389 95.7089 22.9435C94.8154 22.961 93.9959 23.2631 93.1951 23.6343C92.4913 23.9603 91.8215 24.3536 91.1819 24.7994C91.0073 24.921 90.8585 24.9422 90.6509 24.8878C87.7184 24.1279 84.7806 24.1215 81.849 24.8878C81.596 24.9541 81.433 24.8832 81.2405 24.757C80.0237 23.9566 78.7712 23.2382 77.321 22.9914C77.2916 22.9867 77.2631 22.9785 77.2337 22.9729C76.4765 22.8532 76.3884 22.9048 76.1701 23.6656C75.7737 25.0481 75.6989 26.4371 76.1345 27.8279C76.1826 27.9817 76.2013 28.0968 76.0792 28.2387C74.4019 30.1904 74.0803 32.5124 74.376 34.9965C74.4865 35.9259 74.6789 36.8368 75.0219 37.7091C76.0151 40.2411 77.9401 41.596 80.4068 42.2702C81.1657 42.4774 81.9407 42.599 82.7896 42.7188C82.1367 43.4372 81.7928 44.2459 81.6583 45.1513C81.6316 45.3309 81.4935 45.3484 81.3768 45.3991C79.2656 46.3118 77.4137 45.7085 76.1844 43.7126C75.5813 42.7326 74.7894 42.0105 73.6563 41.7627C73.3463 41.6945 73.0389 41.6936 72.7343 41.8005C72.4136 41.9128 72.3887 42.1173 72.5909 42.3549C72.737 42.5253 72.9035 42.6902 73.0915 42.8063C74.0919 43.4261 74.7243 44.3592 75.1501 45.4424C75.8316 47.1758 77.1482 47.955 78.8568 48.1521C79.6407 48.2424 80.4308 48.1991 81.2022 48.0186C81.498 47.9495 81.5826 48.0011 81.579 48.3253C81.5666 49.3375 81.5862 50.3507 81.5915 51.363C81.596 52.2758 81.033 52.6985 80.1796 52.4056C78.0346 51.6678 76.0801 50.5607 74.3413 49.0704C70.4663 45.7537 68.1609 41.5094 67.6131 36.3367C66.651 27.254 71.9076 18.8963 80.3132 16.0023C90.61 12.4571 101.66 18.6375 104.412 29.4803C106.849 39.0815 101.493 49.2639 92.3577 52.3964C91.45 52.7077 90.895 52.3071 90.8959 51.3326C90.8977 49.6295 90.9173 47.9265 90.9075 46.2234C90.8995 44.9339 90.6251 43.7301 89.6532 42.7031H89.6524Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M81.121 45.9102C81.2965 45.9359 81.488 45.9737 81.4604 46.1911C81.4319 46.4195 81.2306 46.4941 81.0284 46.5006C80.8591 46.5061 80.6729 46.4573 80.6792 46.2445C80.6872 45.9654 80.9215 45.9424 81.121 45.9102Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M76.8847 45.7035C76.67 45.6657 76.5079 45.5368 76.4767 45.2761C76.4571 45.1113 76.5337 45.0127 76.6994 45.021C76.9738 45.0348 77.1288 45.207 77.1626 45.4714C77.1831 45.6307 77.0682 45.7109 76.8847 45.7044V45.7035Z' fill='none' className={filledClassName} />
          <path opacity={0.1} d='M79.6462 46.1016C79.8297 46.1246 80.0417 46.1541 80.0319 46.3862C80.0221 46.6303 79.8047 46.6874 79.6061 46.6772C79.4261 46.668 79.2311 46.6063 79.2489 46.3678C79.2667 46.131 79.4743 46.1255 79.6462 46.1016Z' fill='none' className={filledClassName} />
          <path d='M78.0712 45.8516C78.2814 45.8654 78.4845 45.952 78.5032 46.197C78.5201 46.4125 78.3259 46.4466 78.1567 46.4337C77.9393 46.4162 77.7371 46.3406 77.7371 46.0726C77.7371 45.8746 77.9037 45.8543 78.0712 45.8516Z' fill='none' className={filledClassName} />
          <path d='M76.1799 44.336C76.1808 44.475 76.1424 44.5939 75.9919 44.592C75.7425 44.5883 75.6285 44.4188 75.5982 44.1849C75.5812 44.0513 75.6258 43.9288 75.779 43.9307C76.0311 43.9334 76.1282 44.1167 76.1799 44.3369V44.336Z' fill='none' className={filledClassName} />
          <path d='M75.4111 43.2761C75.4227 43.4244 75.3559 43.5064 75.2374 43.5054C75.0361 43.5045 74.9069 43.3866 74.8748 43.1803C74.8526 43.0412 74.906 42.9215 75.0575 42.9381C75.2508 42.9602 75.3648 43.0992 75.4111 43.2761Z' fill='none' className={filledClassName} />
          <path d='M74.6144 42.5157C74.6063 42.6594 74.5084 42.7064 74.4024 42.6963C74.2678 42.6825 74.1324 42.6263 74.0986 42.4715C74.0701 42.3389 74.161 42.2753 74.2803 42.2744C74.4442 42.2735 74.5565 42.3592 74.6144 42.5157Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

WorkspaceGitHubIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

WorkspaceGitHubIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default WorkspaceGitHubIcon