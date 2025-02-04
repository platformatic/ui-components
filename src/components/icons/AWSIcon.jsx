import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AWSIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false
}) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M12.2304 4.40324C12.0551 4.40324 11.8871 4.42245 11.7262 4.47047C11.5677 4.5185 11.4308 4.58573 11.3108 4.67938C11.1907 4.76822 11.0947 4.87867 11.0226 5.00594C10.9506 5.1332 10.9146 5.28207 10.9146 5.45016C10.9146 5.65666 10.9818 5.85355 11.1139 6.02884C11.2459 6.20893 11.4621 6.3458 11.7526 6.43704L12.3313 6.61713C12.5258 6.68196 12.6626 6.7492 12.7347 6.82363C12.8067 6.90047 12.8427 6.99171 12.8427 7.10217C12.8427 7.26545 12.7707 7.39271 12.6362 7.48156C12.5018 7.5704 12.3049 7.61362 12.0527 7.61362C11.8943 7.61362 11.7382 7.59681 11.5773 7.5656C11.4212 7.53438 11.2724 7.48636 11.1379 7.42633C11.0971 7.40952 11.0611 7.39511 11.037 7.38551C11.013 7.3759 10.989 7.3735 10.965 7.3735C10.905 7.3735 10.8738 7.41192 10.8738 7.49596V7.70006C10.8738 7.73608 10.8834 7.7769 10.8978 7.81052C10.9146 7.84894 10.9578 7.88736 11.0226 7.92337C11.1259 7.9834 11.282 8.03623 11.4813 8.08425C11.6806 8.13228 11.8871 8.15629 12.096 8.15629C12.3049 8.15629 12.4874 8.12747 12.6674 8.07225C12.8379 8.01942 12.9868 7.94979 13.1117 7.84894C13.2341 7.75289 13.3302 7.63283 13.4022 7.49836C13.4694 7.3639 13.5079 7.20782 13.5079 7.03494C13.5079 6.82843 13.4478 6.63874 13.3254 6.47546C13.2029 6.31218 12.994 6.18492 12.7059 6.09127L12.1392 5.91118C11.9279 5.84395 11.7814 5.76711 11.6998 5.69027C11.6205 5.61344 11.5797 5.51979 11.5797 5.40693C11.5797 5.24365 11.6445 5.1284 11.767 5.05156C11.8895 4.97472 12.072 4.9387 12.2977 4.9387C12.581 4.9387 12.8379 4.99153 13.0636 5.09478C13.1309 5.126 13.1837 5.1428 13.2149 5.1428C13.2749 5.1428 13.3062 5.09718 13.3062 5.01554V4.82585C13.3062 4.77062 13.2942 4.7274 13.2701 4.69378C13.2461 4.65777 13.2053 4.62415 13.1501 4.59293C13.1093 4.56892 13.054 4.54491 12.982 4.5209C12.91 4.49689 12.8355 4.47768 12.7539 4.45847C12.6698 4.44166 12.5858 4.42725 12.4946 4.41525C12.4057 4.40324 12.3145 4.39844 12.228 4.39844L12.2304 4.40324ZM3.99677 4.41284C3.77827 4.41284 3.56936 4.43686 3.37247 4.48968C3.17557 4.53771 3.00989 4.59774 2.86822 4.66977C2.81299 4.69859 2.77697 4.725 2.75776 4.75381C2.73855 4.78263 2.72895 4.83065 2.72895 4.89548V5.08998C2.72895 5.17402 2.75776 5.21244 2.81299 5.21244C2.8298 5.21244 2.84901 5.20764 2.87782 5.20043C2.90424 5.19323 2.95226 5.17642 3.01709 5.14761C3.15636 5.09238 3.30043 5.04916 3.4493 5.01314C3.59578 4.97712 3.73985 4.96031 3.87912 4.96031C4.18647 4.96031 4.40257 5.02034 4.52984 5.1428C4.6523 5.26526 4.71713 5.47897 4.71713 5.78152V6.07446C4.55865 6.03845 4.40498 6.00483 4.2585 5.98562C4.11203 5.96641 3.97036 5.9544 3.8359 5.9544C3.42529 5.9544 3.10113 6.05765 2.85861 6.26656C2.61609 6.47306 2.49604 6.7492 2.49604 7.08776C2.49604 7.40712 2.59448 7.66165 2.79138 7.85374C2.98588 8.04583 3.25481 8.14188 3.59097 8.14188C4.06161 8.14188 4.453 7.95699 4.76515 7.58961C4.80837 7.68085 4.84919 7.75769 4.89001 7.82493C4.93083 7.88976 4.97886 7.95219 5.03409 8.01222C5.07491 8.04824 5.11332 8.06744 5.15414 8.06744C5.18536 8.06744 5.22378 8.05544 5.2598 8.03143L5.51192 7.86334C5.56475 7.82252 5.58876 7.7817 5.58876 7.74329C5.58876 7.71447 5.58156 7.68326 5.55994 7.65204C5.50472 7.54879 5.4639 7.45274 5.43268 7.3639C5.40387 7.27505 5.38946 7.155 5.38946 7.00852H5.37986V5.71429C5.37986 5.27487 5.2694 4.94831 5.04849 4.7322C4.81798 4.5209 4.47221 4.41284 3.99677 4.41284ZM5.85289 4.50889C5.78806 4.50889 5.75684 4.54491 5.75684 4.60974C5.75684 4.63856 5.76885 4.68898 5.79286 4.76822L6.73172 7.85374C6.75573 7.93058 6.78455 7.9858 6.81576 8.00982C6.84698 8.03863 6.895 8.05064 6.96704 8.05064H7.31041C7.38244 8.05064 7.43767 8.03863 7.47129 8.00982C7.5025 7.981 7.52651 7.93058 7.54812 7.85134L8.16283 5.27967L8.78233 7.85614C8.79914 7.93538 8.82555 7.98821 8.85917 8.01702C8.89039 8.04583 8.94321 8.05784 9.01765 8.05784H9.36102C9.42825 8.05784 9.48108 8.04103 9.51229 8.01702C9.54351 7.99301 9.57232 7.94018 9.59633 7.86094L10.5592 4.77542C10.576 4.7322 10.5832 4.69859 10.5856 4.67457C10.5904 4.65056 10.5952 4.62895 10.5952 4.60974C10.5952 4.54251 10.5592 4.50889 10.4944 4.50889H10.1222C10.0502 4.50889 9.99973 4.5257 9.96612 4.54971C9.9373 4.57372 9.91089 4.62655 9.88688 4.70579L9.19534 7.38071L8.56382 4.70579C8.54702 4.62895 8.5206 4.57372 8.48939 4.54971C8.45817 4.5209 8.40535 4.50889 8.32851 4.50889H8.00915C7.93712 4.50889 7.88189 4.5257 7.85067 4.54971C7.81946 4.57372 7.79545 4.62655 7.77383 4.70579L7.15193 7.34949L6.4796 4.70579C6.45559 4.62895 6.43157 4.57372 6.40036 4.54971C6.37154 4.5209 6.32112 4.50889 6.24428 4.50889H5.85289ZM3.98477 6.42984C4.10723 6.42984 4.23209 6.43944 4.35935 6.45385C4.48662 6.46826 4.60908 6.49227 4.72673 6.52108V6.68917C4.72673 6.82363 4.70993 6.94129 4.68591 7.03494C4.6619 7.13098 4.61388 7.21502 4.55145 7.29186C4.44339 7.41192 4.31613 7.49836 4.17206 7.54639C4.02799 7.59441 3.89112 7.61842 3.76146 7.61842C3.57897 7.61842 3.4373 7.5704 3.34125 7.47195C3.2404 7.3759 3.19478 7.23664 3.19478 7.04934C3.19478 6.85005 3.25961 6.69877 3.38928 6.59072C3.51894 6.48266 3.71584 6.42984 3.98477 6.42984ZM13.1213 8.87904C12.7011 8.88385 12.204 8.97989 11.8294 9.24162C11.7142 9.32566 11.7334 9.43852 11.8606 9.42171C12.2881 9.36889 13.2317 9.25843 13.3974 9.47454C13.5655 9.68584 13.2101 10.5767 13.0492 10.9729C13.0012 11.0929 13.1069 11.1386 13.2125 11.0473C13.9137 10.4566 14.0986 9.22241 13.9545 9.04233C13.8824 8.95348 13.5391 8.87184 13.1189 8.87904H13.1213ZM2.08783 9.11916C1.99899 9.13117 1.96057 9.23682 2.05422 9.32086C3.61979 10.7352 5.69201 11.5852 7.99234 11.5852C9.63475 11.5852 11.5413 11.0689 12.8547 10.1012C13.0708 9.94037 12.8836 9.69785 12.6626 9.7963C11.1883 10.4182 9.58913 10.7232 8.13161 10.7232C5.97055 10.7232 3.88392 10.1277 2.19108 9.14558C2.15507 9.12397 2.11905 9.11676 2.09024 9.11916H2.08783Z' fill='white' />
        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M18.3456 7.0072C18.0827 7.0072 17.8306 7.03602 17.5893 7.10805C17.3516 7.18009 17.1463 7.28094 16.9662 7.42141C16.7861 7.55467 16.642 7.72035 16.534 7.91125C16.4259 8.10214 16.3719 8.32545 16.3719 8.57758C16.3719 8.88733 16.4727 9.18268 16.6708 9.4456C16.8689 9.71574 17.1931 9.92104 17.6289 10.0579L18.4969 10.328C18.7887 10.4253 18.994 10.5261 19.102 10.6378C19.2101 10.753 19.2641 10.8899 19.2641 11.0556C19.2641 11.3005 19.156 11.4914 18.9543 11.6247C18.7526 11.7579 18.4573 11.8228 18.0791 11.8228C17.8414 11.8228 17.6073 11.7976 17.366 11.7507C17.1318 11.7039 16.9085 11.6319 16.7068 11.5418C16.6456 11.5166 16.5916 11.495 16.5556 11.4806C16.5195 11.4662 16.4835 11.4626 16.4475 11.4626C16.3575 11.4626 16.3106 11.5202 16.3106 11.6463V11.9524C16.3106 12.0065 16.3251 12.0677 16.3467 12.1181C16.3719 12.1757 16.4367 12.2334 16.534 12.2874C16.6888 12.3774 16.9229 12.4567 17.2219 12.5287C17.5208 12.6008 17.8306 12.6368 18.1439 12.6368C18.4573 12.6368 18.731 12.5936 19.0012 12.5107C19.2569 12.4315 19.4802 12.327 19.6675 12.1757C19.8512 12.0317 19.9953 11.8516 20.1033 11.6499C20.2042 11.4482 20.2618 11.2141 20.2618 10.9547C20.2618 10.645 20.1717 10.3605 19.9881 10.1155C19.8044 9.87061 19.491 9.67972 19.0588 9.53925L18.2088 9.26912C17.8918 9.16827 17.6721 9.05301 17.5497 8.93775C17.4308 8.8225 17.3696 8.68203 17.3696 8.51275C17.3696 8.26782 17.4668 8.09494 17.6505 7.97968C17.8342 7.86443 18.1079 7.8104 18.4465 7.8104C18.8715 7.8104 19.2569 7.88964 19.5955 8.04451C19.6963 8.09134 19.7756 8.11655 19.8224 8.11655C19.9124 8.11655 19.9592 8.04812 19.9592 7.92566V7.64112C19.9592 7.55828 19.9412 7.49344 19.9052 7.44302C19.8692 7.38899 19.808 7.33857 19.7251 7.29174C19.6639 7.25573 19.5811 7.21971 19.473 7.18369C19.3649 7.14767 19.2533 7.11886 19.1308 7.09004C19.0048 7.06483 18.8787 7.04322 18.7418 7.02521C18.6086 7.0072 18.4717 7 18.342 7L18.3456 7.0072ZM5.99516 7.02161C5.6674 7.02161 5.35405 7.05763 5.0587 7.13687C4.76335 7.2089 4.51483 7.29895 4.30233 7.407C4.21949 7.45022 4.16546 7.48984 4.13665 7.53306C4.10783 7.57628 4.09342 7.64832 4.09342 7.74557V8.03731C4.09342 8.16337 4.13665 8.221 4.21949 8.221C4.2447 8.221 4.27351 8.2138 4.31673 8.20299C4.35635 8.19219 4.42839 8.16697 4.52564 8.12375C4.73454 8.04091 4.95065 7.97608 5.17396 7.92205C5.39367 7.86803 5.60977 7.84282 5.81867 7.84282C6.2797 7.84282 6.60386 7.93286 6.79476 8.11655C6.97845 8.30024 7.07569 8.6208 7.07569 9.07462V9.51404C6.83798 9.46001 6.60746 9.40959 6.38776 9.38077C6.16805 9.35196 5.95554 9.33395 5.75384 9.33395C5.13794 9.33395 4.6517 9.48883 4.28792 9.80218C3.92414 10.1119 3.74405 10.5261 3.74405 11.034C3.74405 11.513 3.89173 11.8948 4.18707 12.183C4.47881 12.4711 4.88221 12.6152 5.38646 12.6152C6.09241 12.6152 6.6795 12.3378 7.14773 11.7868C7.21256 11.9236 7.27379 12.0389 7.33502 12.1397C7.39625 12.237 7.46829 12.3306 7.55113 12.4207C7.61236 12.4747 7.66999 12.5035 7.73122 12.5035C7.77804 12.5035 7.83567 12.4855 7.88969 12.4495L8.26788 12.1974C8.34712 12.1361 8.38314 12.0749 8.38314 12.0173C8.38314 11.9741 8.37233 11.9272 8.33992 11.8804C8.25708 11.7255 8.19585 11.5815 8.14902 11.4482C8.1058 11.3149 8.08419 11.1348 8.08419 10.9151H8.06978V8.97377C8.06978 8.31465 7.9041 7.82481 7.57274 7.50065C7.22697 7.18369 6.70831 7.02161 5.99516 7.02161ZM8.77933 7.16568C8.68208 7.16568 8.63526 7.21971 8.63526 7.31696C8.63526 7.36018 8.65327 7.43581 8.68929 7.55467L10.0976 12.183C10.1336 12.2982 10.1768 12.3811 10.2236 12.4171C10.2705 12.4603 10.3425 12.4783 10.4506 12.4783H10.9656C11.0737 12.4783 11.1565 12.4603 11.2069 12.4171C11.2538 12.3738 11.2898 12.2982 11.3222 12.1794L12.2442 8.32185L13.1735 12.1866C13.1987 12.3054 13.2383 12.3847 13.2888 12.4279C13.3356 12.4711 13.4148 12.4891 13.5265 12.4891H14.0415C14.1424 12.4891 14.2216 12.4639 14.2684 12.4279C14.3153 12.3919 14.3585 12.3126 14.3945 12.1938L15.8388 7.56548C15.864 7.50065 15.8748 7.45022 15.8784 7.4142C15.8856 7.37819 15.8928 7.34577 15.8928 7.31696C15.8928 7.21611 15.8388 7.16568 15.7416 7.16568H15.1833C15.0752 7.16568 14.9996 7.19089 14.9492 7.22691C14.906 7.26293 14.8663 7.34217 14.8303 7.46103L13.793 11.4734L12.8457 7.46103C12.8205 7.34577 12.7809 7.26293 12.7341 7.22691C12.6873 7.18369 12.608 7.16568 12.4928 7.16568H12.0137C11.9057 7.16568 11.8228 7.19089 11.776 7.22691C11.7292 7.26293 11.6932 7.34217 11.6608 7.46103L10.7279 11.4266L9.7194 7.46103C9.68338 7.34577 9.64736 7.26293 9.60054 7.22691C9.55732 7.18369 9.48168 7.16568 9.36642 7.16568H8.77933ZM5.97715 10.0471C6.16084 10.0471 6.34814 10.0615 6.53903 10.0831C6.72992 10.1047 6.91361 10.1407 7.0901 10.184V10.4361C7.0901 10.6378 7.06489 10.8143 7.02887 10.9547C6.99285 11.0988 6.92082 11.2249 6.82717 11.3401C6.66509 11.5202 6.4742 11.6499 6.25809 11.7219C6.04198 11.794 5.83668 11.83 5.64219 11.83C5.36845 11.83 5.15595 11.7579 5.01188 11.6103C4.8606 11.4662 4.79217 11.2573 4.79217 10.9764C4.79217 10.6774 4.88942 10.4505 5.08391 10.2884C5.27841 10.1263 5.57375 10.0471 5.97715 10.0471ZM19.6819 13.7209C19.0516 13.7281 18.306 13.8722 17.7441 14.2648C17.5713 14.3908 17.6001 14.5601 17.791 14.5349C18.4321 14.4557 19.8476 14.29 20.0961 14.6142C20.3482 14.9311 19.8152 16.2674 19.5739 16.8617C19.5018 17.0417 19.6603 17.1102 19.8188 16.9733C20.8705 16.0873 21.1478 14.236 20.9317 13.9658C20.8237 13.8326 20.3086 13.7101 19.6783 13.7209H19.6819ZM3.13175 14.0811C2.99849 14.0991 2.94086 14.2576 3.08133 14.3836C5.42968 16.5051 8.53801 17.7801 11.9885 17.7801C14.4521 17.7801 17.3119 17.0057 19.2821 15.5542C19.6063 15.3129 19.3253 14.9491 18.994 15.0968C16.7825 16.0296 14.3837 16.4871 12.1974 16.4871C8.95582 16.4871 5.82588 15.5938 3.28663 14.1207C3.2326 14.0883 3.17857 14.0775 3.13535 14.0811H3.13175Z' fill='white' />

        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M30.5761 11.012C30.1379 11.012 29.7177 11.06 29.3155 11.1801C28.9193 11.3001 28.5771 11.4682 28.2769 11.7023C27.9768 11.9245 27.7367 12.2006 27.5566 12.5187C27.3765 12.8369 27.2865 13.2091 27.2865 13.6293C27.2865 14.1455 27.4545 14.6378 27.7847 15.076C28.1149 15.5262 28.6551 15.8684 29.3815 16.0965L30.8282 16.5467C31.3144 16.7088 31.6566 16.8769 31.8367 17.063C32.0168 17.2551 32.1068 17.4832 32.1068 17.7593C32.1068 18.1675 31.9267 18.4857 31.5906 18.7078C31.2544 18.9299 30.7622 19.038 30.1319 19.038C29.7357 19.038 29.3455 18.9959 28.9433 18.9179C28.5531 18.8399 28.1809 18.7198 27.8447 18.5697C27.7427 18.5277 27.6526 18.4917 27.5926 18.4677C27.5326 18.4437 27.4725 18.4377 27.4125 18.4377C27.2624 18.4377 27.1844 18.5337 27.1844 18.7438V19.2541C27.1844 19.3441 27.2084 19.4462 27.2444 19.5302C27.2865 19.6262 27.3945 19.7223 27.5566 19.8123C27.8147 19.9624 28.2049 20.0945 28.7032 20.2145C29.2014 20.3346 29.7177 20.3946 30.2399 20.3946C30.7622 20.3946 31.2184 20.3226 31.6686 20.1845C32.0948 20.0525 32.467 19.8784 32.7792 19.6263C33.0853 19.3861 33.3254 19.086 33.5055 18.7498C33.6736 18.4137 33.7697 18.0235 33.7697 17.5912C33.7697 17.075 33.6196 16.6008 33.3134 16.1926C33.0073 15.7844 32.485 15.4662 31.7647 15.2321L30.348 14.7819C29.8197 14.6138 29.4535 14.4217 29.2494 14.2296C29.0513 14.0375 28.9493 13.8034 28.9493 13.5212C28.9493 13.113 29.1114 12.8249 29.4175 12.6328C29.7237 12.4407 30.1799 12.3507 30.7442 12.3507C31.4525 12.3507 32.0948 12.4827 32.6591 12.7409C32.8272 12.8189 32.9593 12.8609 33.0373 12.8609C33.1874 12.8609 33.2654 12.7469 33.2654 12.5428V12.0685C33.2654 11.9305 33.2354 11.8224 33.1754 11.7384C33.1153 11.6483 33.0133 11.5643 32.8752 11.4862C32.7732 11.4262 32.6351 11.3662 32.455 11.3062C32.2749 11.2461 32.0888 11.1981 31.8847 11.1501C31.6746 11.1081 31.4645 11.072 31.2364 11.042C31.0143 11.012 30.7862 11 30.5701 11L30.5761 11.012ZM9.99194 11.036C9.44567 11.036 8.92341 11.096 8.43117 11.2281C7.93892 11.3482 7.52472 11.4982 7.17055 11.6783C7.03248 11.7504 6.94243 11.8164 6.89441 11.8884C6.84639 11.9605 6.82237 12.0805 6.82237 12.2426V12.7289C6.82237 12.939 6.89441 13.035 7.03248 13.035C7.0745 13.035 7.12252 13.023 7.19456 13.005C7.26059 12.987 7.38065 12.945 7.54273 12.8729C7.8909 12.7349 8.25108 12.6268 8.62326 12.5368C8.98944 12.4467 9.34962 12.4047 9.69779 12.4047C10.4662 12.4047 11.0064 12.5548 11.3246 12.8609C11.6307 13.1671 11.7928 13.7013 11.7928 14.4577V15.1901C11.3966 15.1 11.0124 15.016 10.6463 14.968C10.2801 14.9199 9.9259 14.8899 9.58974 14.8899C8.56323 14.8899 7.75283 15.148 7.14653 15.6703C6.54024 16.1866 6.24009 16.8769 6.24009 17.7233C6.24009 18.5217 6.48621 19.158 6.97845 19.6383C7.46469 20.1185 8.13702 20.3586 8.97744 20.3586C10.154 20.3586 11.1325 19.8964 11.9129 18.9779C12.0209 19.206 12.123 19.3981 12.225 19.5662C12.3271 19.7283 12.4471 19.8844 12.5852 20.0345C12.6873 20.1245 12.7833 20.1725 12.8854 20.1725C12.9634 20.1725 13.0594 20.1425 13.1495 20.0825L13.7798 19.6623C13.9119 19.5602 13.9719 19.4582 13.9719 19.3621C13.9719 19.2901 13.9539 19.212 13.8999 19.134C13.7618 18.8759 13.6597 18.6358 13.5817 18.4137C13.5097 18.1915 13.4737 17.8914 13.4737 17.5252H13.4496V14.2896C13.4496 13.1911 13.1735 12.3747 12.6212 11.8344C12.0449 11.3062 11.1805 11.036 9.99194 11.036ZM14.6322 11.2761C14.4701 11.2761 14.3921 11.3662 14.3921 11.5283C14.3921 11.6003 14.4221 11.7264 14.4821 11.9245L16.8293 19.6383C16.8893 19.8304 16.9614 19.9684 17.0394 20.0284C17.1174 20.1005 17.2375 20.1305 17.4176 20.1305H18.276C18.4561 20.1305 18.5942 20.1005 18.6782 20.0284C18.7563 19.9564 18.8163 19.8304 18.8703 19.6323L20.4071 13.2031L21.9558 19.6443C21.9979 19.8424 22.0639 19.9744 22.1479 20.0465C22.226 20.1185 22.358 20.1485 22.5441 20.1485H23.4025C23.5706 20.1485 23.7027 20.1065 23.7807 20.0465C23.8588 19.9864 23.9308 19.8544 23.9908 19.6563L26.398 11.9425C26.44 11.8344 26.458 11.7504 26.4641 11.6903C26.4761 11.6303 26.4881 11.5763 26.4881 11.5283C26.4881 11.3602 26.398 11.2761 26.2359 11.2761H25.3055C25.1254 11.2761 24.9993 11.3182 24.9153 11.3782C24.8433 11.4382 24.7772 11.5703 24.7172 11.7684L22.9883 18.4557L21.4096 11.7684C21.3675 11.5763 21.3015 11.4382 21.2235 11.3782C21.1454 11.3062 21.0134 11.2761 20.8213 11.2761H20.0229C19.8428 11.2761 19.7047 11.3182 19.6267 11.3782C19.5486 11.4382 19.4886 11.5703 19.4346 11.7684L17.8798 18.3776L16.199 11.7684C16.139 11.5763 16.0789 11.4382 16.0009 11.3782C15.9289 11.3062 15.8028 11.2761 15.6107 11.2761H14.6322ZM9.96192 16.0785C10.2681 16.0785 10.5802 16.1025 10.8984 16.1385C11.2165 16.1745 11.5227 16.2346 11.8168 16.3066V16.7268C11.8168 17.063 11.7748 17.3571 11.7148 17.5912C11.6548 17.8314 11.5347 18.0415 11.3786 18.2336C11.1085 18.5337 10.7903 18.7498 10.4302 18.8699C10.07 18.9899 9.72781 19.05 9.40365 19.05C8.94742 19.05 8.59325 18.9299 8.35313 18.6838C8.101 18.4437 7.98695 18.0955 7.98695 17.6273C7.98695 17.129 8.14903 16.7508 8.47319 16.4807C8.79735 16.2106 9.28959 16.0785 9.96192 16.0785ZM32.8032 22.2015C31.7527 22.2135 30.51 22.4536 29.5736 23.108C29.2854 23.3181 29.3335 23.6002 29.6516 23.5582C30.7201 23.4261 33.0793 23.15 33.4935 23.6903C33.9137 24.2185 33.0253 26.4456 32.6231 27.4361C32.503 27.7362 32.7672 27.8503 33.0313 27.6222C34.7842 26.1455 35.2464 23.0599 34.8862 22.6097C34.7061 22.3876 33.8477 22.1835 32.7972 22.2015H32.8032ZM5.21959 22.8018C4.99748 22.8318 4.90143 23.096 5.13554 23.3061C9.04947 26.8418 14.23 28.9669 19.9809 28.9669C24.0869 28.9669 28.8532 27.6762 32.1368 25.257C32.6771 24.8548 32.2089 24.2485 31.6566 24.4946C27.9708 26.0494 23.9728 26.8118 20.329 26.8118C14.9264 26.8118 9.7098 25.3231 5.47771 22.8678C5.38767 22.8138 5.29762 22.7958 5.22559 22.8018H5.21959Z' fill='white' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AWSIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool
}

export default AWSIcon
