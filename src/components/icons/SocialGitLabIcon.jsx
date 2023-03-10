import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const SocialGitLabIcon = ({ color, size }) => {
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
          <g clip-path='url(#clip0_852_2118)'>
            <path d='M8.21846 13.8988L8.21422 13.9059C8.25805 13.9031 8.30046 13.8932 8.34146 13.8763C10.4339 12.5321 12.3863 10.9935 14.4122 9.55918C14.6483 9.39151 14.7233 9.16467 14.62 8.88005C14.3755 8.19951 14.1394 7.51616 13.899 6.83421C13.9047 6.78631 13.8905 6.74404 13.858 6.7074C13.4183 5.30265 12.9843 3.89648 12.5319 2.49596C12.4725 2.31138 12.4753 2.01831 12.211 1.99999C11.8929 1.97745 11.8872 2.28602 11.8179 2.49736C11.3542 3.89648 10.8962 5.29701 10.4353 6.69613L10.4409 6.68909C8.81084 6.68909 7.17934 6.68909 5.54925 6.68768L5.55349 6.69472C5.08412 5.27306 4.61192 3.8514 4.14537 2.42973C4.08741 2.25079 4.06479 2.03381 3.84282 2.0014C3.58976 1.96618 3.5629 2.19021 3.50634 2.36774C3.04687 3.81476 2.58598 5.26179 2.12508 6.7074C2.09115 6.74263 2.07702 6.78349 2.08267 6.83139C1.85223 7.49221 1.63168 8.15724 1.38709 8.81242C1.25985 9.1534 1.34609 9.39856 1.63168 9.60427C3.635 11.0372 5.63691 12.4715 7.64023 13.9045C7.73071 13.9651 7.82119 14.0242 7.91167 14.0848C7.9654 14.1849 8.01912 14.1849 8.07567 14.0876C8.12233 14.0242 8.16898 13.9594 8.21564 13.896L8.21846 13.8988Z' fill='none' className={filledClassName} />
            <path d='M5.55212 6.69049C7.18221 6.69049 8.81371 6.69049 10.4438 6.6919C9.90514 8.31082 9.33963 9.9227 8.83916 11.5529C8.60164 12.3264 8.20861 13.0661 8.21427 13.9059L8.21851 13.8988C8.17185 13.9622 8.1252 14.0271 8.07854 14.0905C8.02199 14.1877 7.96686 14.1877 7.91455 14.0876C7.84951 13.8411 7.7972 13.5903 7.71803 13.3479C6.99842 11.1274 6.27456 8.90964 5.55354 6.69049H5.55212Z' fill='none' className={filledClassName} />
            <path d='M5.55205 6.6905C6.27449 8.90965 6.99834 11.1288 7.71654 13.3479C7.79571 13.5903 7.84802 13.8411 7.91306 14.0877C7.82258 14.0271 7.73209 13.9679 7.64303 13.9073C7.64303 13.7594 7.57658 13.6438 7.48468 13.5283C6.45545 12.2278 5.45309 10.9062 4.39841 9.62682C3.62931 8.69407 2.9917 7.65284 2.08405 6.83281C2.0784 6.7849 2.09112 6.74263 2.12647 6.70882C3.27021 6.70459 4.41255 6.69895 5.55629 6.69473L5.55205 6.68768V6.6905Z' fill='none' className={filledClassName} />
            <path d='M8.21417 13.9059C8.20852 13.0662 8.60155 12.3279 8.83906 11.5529C9.33954 9.92131 9.90505 8.31085 10.4437 6.69193C10.4437 6.69193 10.438 6.69756 10.438 6.69897C11.579 6.7032 12.7199 6.70602 13.8594 6.71024C13.8919 6.74688 13.906 6.78774 13.9004 6.83705C13.7887 6.92018 13.653 6.98358 13.571 7.08926C12.5262 8.42779 11.4871 9.77196 10.4494 11.1161C9.74105 12.0334 8.95216 12.8886 8.34141 13.8777C8.30041 13.8932 8.258 13.9031 8.21417 13.9073V13.9059Z' fill='none' className={filledClassName} />
            <path d='M2.08556 6.83563C2.9932 7.65425 3.6294 8.6969 4.39991 9.62964C5.45459 10.909 6.45695 12.2306 7.48618 13.5311C7.57808 13.6467 7.64453 13.7608 7.64453 13.9101C5.64262 12.4758 3.6393 11.0414 1.63597 9.60992C1.34898 9.40562 1.26415 9.15904 1.39139 8.81807C1.63597 8.16289 1.85652 7.49785 2.08697 6.83704L2.08556 6.83563Z' fill='none' className={filledClassName} />
            <path d='M8.34143 13.8777C8.95218 12.8872 9.74248 12.032 10.4494 11.1161C11.4871 9.77194 12.5248 8.42778 13.571 7.08924C13.653 6.98357 13.7901 6.92017 13.9004 6.83704C14.1393 7.51898 14.3768 8.20234 14.6214 8.88288C14.7232 9.16749 14.6497 9.39434 14.4136 9.56201C12.3862 10.9964 10.4338 12.535 8.34284 13.8791L8.34143 13.8777Z' fill='none' className={filledClassName} />
            <path d='M5.55775 6.69755C4.41401 6.70177 3.27168 6.70741 2.12793 6.71164C2.58882 5.26461 3.04971 3.81759 3.50919 2.37056C3.56574 2.19303 3.5926 1.96759 3.84567 2.00423C4.06763 2.03523 4.09025 2.25362 4.14822 2.43256C4.61476 3.85563 5.08697 5.27588 5.55634 6.69755H5.55775Z' fill='none' className={filledClassName} />
            <path d='M13.8608 6.71023C12.7199 6.706 11.579 6.70318 10.4395 6.69895C10.8989 5.29843 11.3584 3.8979 11.8221 2.50019C11.8928 2.28884 11.8985 1.98027 12.2152 2.00282C12.4795 2.02113 12.4767 2.31561 12.5361 2.49878C12.9885 3.89931 13.4225 5.30547 13.8622 6.71023H13.8608Z' fill='none' className={filledClassName} />
            <path d='M8.07849 14.0919C8.12515 14.0285 8.1718 13.9637 8.21846 13.9003C8.1718 13.9637 8.12515 14.0285 8.07849 14.0919Z' fill='none' className={filledClassName} />
          </g>
          <defs>
            <clipPath id='clip0_852_2118'>
              <rect width={13.3333} height={12.1637} fill='none' className={filledClassName} transform='translate(1.33337 2)' />
            </clipPath>
          </defs>

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
          <g clip-path='url(#clip0_315_245)'>
            <path d='M12.3277 20.8483L12.3213 20.8589C12.3871 20.8546 12.4507 20.8398 12.5122 20.8145C15.6508 18.7982 18.5794 16.4903 21.6183 14.3388C21.9725 14.0873 22.0849 13.747 21.9301 13.3201C21.5632 12.2993 21.209 11.2743 20.8485 10.2513C20.857 10.1795 20.8358 10.1161 20.787 10.0611C20.1275 7.95399 19.4765 5.84474 18.7978 3.74395C18.7088 3.46708 18.713 3.02748 18.3165 3.00001C17.8393 2.96619 17.8308 3.42904 17.7269 3.74606C17.0313 5.84474 16.3442 7.94553 15.6529 10.0442L15.6614 10.0336C13.2163 10.0336 10.769 10.0336 8.32388 10.0315L8.33024 10.0421C7.62618 7.9096 6.91788 5.77711 6.21806 3.64462C6.13111 3.3762 6.09718 3.05073 5.76424 3.00212C5.38464 2.94928 5.34434 3.28532 5.25952 3.55162C4.5703 5.72216 3.87896 7.8927 3.18763 10.0611C3.13673 10.114 3.11552 10.1752 3.12401 10.2471C2.77834 11.2383 2.44751 12.2359 2.08064 13.2186C1.88978 13.7301 2.01914 14.0979 2.44751 14.4064C5.4525 16.5558 8.45536 18.7073 11.4603 20.8567C11.5961 20.9476 11.7318 21.0364 11.8675 21.1273C11.9481 21.2773 12.0287 21.2773 12.1135 21.1315C12.1835 21.0364 12.2535 20.9392 12.3235 20.8441L12.3277 20.8483Z' fill='none' className={filledClassName} />
            <path d='M8.32812 10.0358C10.7733 10.0358 13.2205 10.0358 15.6656 10.0379C14.8577 12.4663 14.0094 14.8841 13.2587 17.3294C12.9024 18.4897 12.3129 19.5992 12.3213 20.8589L12.3277 20.8483C12.2577 20.9434 12.1877 21.0406 12.1178 21.1357C12.0329 21.2816 11.9502 21.2816 11.8718 21.1315C11.7742 20.7616 11.6957 20.3854 11.577 20.0219C10.4976 16.6911 9.41179 13.3645 8.33025 10.0358H8.32812Z' fill='none' className={filledClassName} />
            <path d='M8.32807 10.0358C9.41173 13.3645 10.4975 16.6932 11.5748 20.0219C11.6936 20.3854 11.772 20.7616 11.8696 21.1315C11.7339 21.0406 11.5981 20.9518 11.4645 20.861C11.4645 20.639 11.3649 20.4657 11.227 20.2924C9.68318 18.3417 8.17963 16.3593 6.59761 14.4402C5.44397 13.0411 4.48755 11.4793 3.12608 10.2492C3.1176 10.1774 3.13668 10.1139 3.1897 10.0632C4.90532 10.0569 6.61882 10.0484 8.33444 10.0421L8.32807 10.0315V10.0358Z' fill='none' className={filledClassName} />
            <path d='M12.3213 20.8589C12.3128 19.5992 12.9023 18.4918 13.2586 17.3294C14.0093 14.882 14.8576 12.4663 15.6655 10.0379C15.6655 10.0379 15.6571 10.0463 15.6571 10.0484C17.3684 10.0548 19.0798 10.059 20.7891 10.0653C20.8379 10.1203 20.8591 10.1816 20.8506 10.2556C20.683 10.3803 20.4795 10.4754 20.3565 10.6339C18.7893 12.6417 17.2306 14.6579 15.674 16.6742C14.6116 18.05 13.4282 19.3329 12.5121 20.8166C12.4506 20.8398 12.387 20.8546 12.3213 20.861V20.8589Z' fill='none' className={filledClassName} />
            <path d='M3.12815 10.2534C4.48962 11.4814 5.44392 13.0453 6.59968 14.4445C8.1817 16.3635 9.68525 18.3459 11.2291 20.2967C11.3669 20.47 11.4666 20.6412 11.4666 20.8652C8.46375 18.7137 5.45876 16.5622 2.45378 14.4149C2.02328 14.1084 1.89604 13.7386 2.0869 13.2271C2.45378 12.2443 2.7846 11.2468 3.13027 10.2556L3.12815 10.2534Z' fill='none' className={filledClassName} />
            <path d='M12.5121 20.8166C13.4282 19.3308 14.6137 18.0479 15.674 16.6742C17.2306 14.6579 18.7871 12.6417 20.3564 10.6339C20.4794 10.4754 20.6851 10.3802 20.8505 10.2556C21.2089 11.2785 21.5652 12.3035 21.9321 13.3243C22.0848 13.7512 21.9745 14.0915 21.6203 14.343C18.5793 16.4945 15.6507 18.8024 12.5142 20.8187L12.5121 20.8166Z' fill='none' className={filledClassName} />
            <path d='M8.33651 10.0463C6.62089 10.0526 4.90739 10.0611 3.19177 10.0674C3.88311 7.8969 4.57445 5.72637 5.26366 3.55583C5.34849 3.28953 5.38878 2.95138 5.76838 3.00633C6.10133 3.05282 6.13526 3.38041 6.2222 3.64882C6.92202 5.78343 7.63033 7.91381 8.33439 10.0463H8.33651Z' fill='none' className={filledClassName} />
            <path d='M20.7912 10.0653C19.0798 10.059 17.3684 10.0548 15.6592 10.0484C16.3484 7.94764 17.0376 5.84685 17.7332 3.75028C17.8392 3.43326 17.8477 2.97041 18.3227 3.00422C18.7193 3.0317 18.7151 3.47342 18.8041 3.74817C19.4827 5.84896 20.1338 7.95821 20.7933 10.0653H20.7912Z' fill='none' className={filledClassName} />
            <path d='M12.1177 21.1378C12.1877 21.0427 12.2576 20.9455 12.3276 20.8504C12.2576 20.9455 12.1877 21.0427 12.1177 21.1378Z' fill='none' className={filledClassName} />
          </g>
          <defs>
            <clipPath id='clip0_315_245'>
              <rect width={20} height={18.2456} fill='none' className={filledClassName} transform='translate(2 3)' />
            </clipPath>
          </defs>
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
          <g clip-path='url(#clip0_852_2190)'>
            <path d='M20.5462 34.7471L20.5356 34.7647C20.6451 34.7577 20.7512 34.733 20.8537 34.6908C26.0846 31.3304 30.9657 27.4838 36.0306 23.898C36.6208 23.4788 36.8081 22.9117 36.5501 22.2001C35.9387 20.4988 35.3484 18.7904 34.7476 17.0855C34.7617 16.9658 34.7263 16.8601 34.6451 16.7685C33.5458 13.2566 32.4608 9.74122 31.3297 6.2399C31.1813 5.77846 31.1884 5.04579 30.5274 5C29.7322 4.94364 29.718 5.71506 29.5449 6.24343C28.3856 9.74122 27.2404 13.2425 26.0882 16.7403L26.1023 16.7227C22.0271 16.7227 17.9483 16.7227 13.8731 16.7192L13.8837 16.7368C12.7103 13.1827 11.5298 9.62851 10.3634 6.07435C10.2185 5.627 10.162 5.08454 9.60706 5.00352C8.97439 4.91546 8.90724 5.47553 8.76586 5.91936C7.61717 9.53692 6.46494 13.1545 5.31271 16.7685C5.22788 16.8566 5.19254 16.9587 5.20668 17.0785C4.63056 18.7305 4.07919 20.3931 3.46773 22.0311C3.14963 22.8835 3.36523 23.4964 4.07919 24.0107C9.0875 27.593 14.0923 31.1789 19.1006 34.7612C19.3268 34.9127 19.553 35.0606 19.7792 35.2121C19.9135 35.4622 20.0478 35.4622 20.1892 35.2191C20.3058 35.0606 20.4225 34.8986 20.5391 34.7401L20.5462 34.7471Z' fill='none' className={filledClassName} />
            <path d='M13.8801 16.7263C17.9553 16.7263 22.0341 16.7263 26.1093 16.7298C24.7627 20.7771 23.3489 24.8068 22.0977 28.8823C21.5039 30.8161 20.5213 32.6654 20.5355 34.7647L20.5461 34.7471C20.4295 34.9056 20.3128 35.0677 20.1962 35.2262C20.0548 35.4692 19.917 35.4692 19.7862 35.2191C19.6236 34.6027 19.4928 33.9757 19.2949 33.3699C17.4959 27.8185 15.6862 22.2741 13.8837 16.7263H13.8801Z' fill='none' className={filledClassName} />
            <path d='M13.8801 16.7263C15.6862 22.2741 17.4959 27.822 19.2914 33.3699C19.4893 33.9757 19.6201 34.6027 19.7826 35.2191C19.5564 35.0677 19.3302 34.9197 19.1076 34.7683C19.1076 34.3984 18.9414 34.1096 18.7117 33.8207C16.1386 30.5695 13.6327 27.2654 10.996 24.067C9.07328 21.7352 7.47925 19.1321 5.21013 17.082C5.196 16.9623 5.22781 16.8566 5.31617 16.772C8.17553 16.7615 11.0314 16.7474 13.8907 16.7368L13.8801 16.7192V16.7263Z' fill='none' className={filledClassName} />
            <path d='M20.5356 34.7647C20.5214 32.6654 21.504 30.8196 22.0978 28.8822C23.349 24.8032 24.7627 20.7771 26.1094 16.7298C26.1094 16.7298 26.0952 16.7439 26.0952 16.7474C28.9475 16.7579 31.7998 16.765 34.6486 16.7756C34.7299 16.8671 34.7652 16.9693 34.7511 17.0926C34.4719 17.3004 34.1326 17.4589 33.9276 17.7231C31.3156 21.0694 28.7178 24.4299 26.1235 27.7903C24.3528 30.0834 22.3805 32.2215 20.8537 34.6943C20.7512 34.733 20.6451 34.7577 20.5356 34.7683V34.7647Z' fill='none' className={filledClassName} />
            <path d='M5.2137 17.0891C7.48282 19.1356 9.07332 21.7422 10.9996 24.0741C13.6363 27.2725 16.1422 30.5766 18.7153 33.8278C18.945 34.1166 19.1111 34.4019 19.1111 34.7753C14.1064 31.1895 9.09806 27.6036 4.08975 24.0248C3.37226 23.514 3.16019 22.8976 3.47829 22.0452C4.08975 20.4072 4.64112 18.7446 5.21724 17.0926L5.2137 17.0891Z' fill='none' className={filledClassName} />
            <path d='M20.8536 34.6943C22.3805 32.218 24.3563 30.0799 26.1235 27.7903C28.7178 24.4299 31.3121 21.0694 33.9275 17.7231C34.1325 17.4589 34.4754 17.3004 34.7511 17.0926C35.3484 18.7975 35.9422 20.5058 36.5536 22.2072C36.8081 22.9187 36.6243 23.4858 36.0341 23.905C30.9657 27.4909 26.0846 31.3374 20.8572 34.6978L20.8536 34.6943Z' fill='none' className={filledClassName} />
            <path d='M13.8943 16.7439C11.0349 16.7544 8.17907 16.7685 5.3197 16.7791C6.47193 13.1615 7.62416 9.54395 8.77285 5.92639C8.91423 5.48256 8.98139 4.91897 9.61405 5.01056C10.169 5.08805 10.2255 5.63403 10.3704 6.08138C11.5368 9.63906 12.7173 13.1897 13.8907 16.7439H13.8943Z' fill='none' className={filledClassName} />
            <path d='M34.6521 16.7756C31.7998 16.765 28.9475 16.758 26.0988 16.7474C27.2474 13.2461 28.3961 9.74474 29.5554 6.25047C29.7322 5.7221 29.7463 4.95068 30.538 5.00704C31.199 5.05283 31.1919 5.78903 31.3403 6.24695C32.4714 9.74827 33.5564 13.2637 34.6556 16.7756H34.6521Z' fill='none' className={filledClassName} />
            <path d='M20.1962 35.2297C20.3128 35.0712 20.4294 34.9092 20.5461 34.7507C20.4294 34.9092 20.3128 35.0712 20.1962 35.2297Z' fill='none' className={filledClassName} />
          </g>
          <defs>
            <clipPath id='clip0_852_2190'>
              <rect width={33.3333} height={30.4094} fill='none' className={filledClassName} transform='translate(3.33337 5)' />
            </clipPath>
          </defs>
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SocialGitLabIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

SocialGitLabIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default SocialGitLabIcon
