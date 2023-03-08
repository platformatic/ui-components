import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'

const ApiIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
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
          <path d='M9.21956 2.34803V3.1061C9.21956 3.25037 9.31095 3.38072 9.44868 3.43134L10.4321 3.79709C10.5659 3.84645 10.7178 3.81228 10.8156 3.7085L11.288 3.20987C11.427 3.06307 11.6638 3.0618 11.8041 3.20861L12.9445 4.3957C13.072 4.52858 13.0733 4.73487 12.9484 4.86901L12.3409 5.52457C12.2443 5.62835 12.2212 5.77895 12.2817 5.9055L12.6936 6.77874C12.7515 6.9015 12.8776 6.98123 13.0153 6.98123H13.646C13.8417 6.98123 14 7.13689 14 7.32925V8.79477C14 8.98713 13.8417 9.1428 13.646 9.1428H12.9832C12.83 9.1428 12.6936 9.24024 12.6459 9.38325L12.3113 10.3919C12.2714 10.5109 12.2997 10.6412 12.3859 10.7336L12.9304 11.3246C13.063 11.4689 13.0501 11.6929 12.9008 11.8207L11.6458 12.9002C11.5017 13.0243 11.2828 13.0129 11.1528 12.8749L10.7152 12.4117C10.62 12.3105 10.472 12.2738 10.3394 12.3193L9.42551 12.6332C9.28263 12.6826 9.18739 12.8142 9.18739 12.9622V13.652C9.18739 13.8443 9.02907 14 8.83342 14H7.16529C6.96964 14 6.81133 13.8443 6.81133 13.652V12.9622C6.81133 12.8142 6.71608 12.6826 6.57321 12.6332L5.65934 12.3193C5.52676 12.2738 5.37874 12.3092 5.28349 12.4117L4.84587 12.8749C4.71586 13.0129 4.49705 13.0243 4.35289 12.9002L3.09793 11.8207C2.94862 11.6929 2.93575 11.4689 3.06833 11.3246L3.61279 10.7336C3.69774 10.6412 3.72605 10.5109 3.68744 10.3919L3.35278 9.38325C3.30516 9.24024 3.16872 9.1428 3.01555 9.1428H2.35396C2.15832 9.1428 2 8.98713 2 8.79477V7.32925C2 7.13689 2.15832 6.98123 2.35396 6.98123H2.98466C3.12239 6.98123 3.24853 6.90276 3.30645 6.77874L3.71833 5.9055C3.77883 5.77768 3.75437 5.62835 3.65912 5.52457L3.05159 4.86901C2.92674 4.73487 2.92803 4.52731 3.05545 4.3957L4.19586 3.20861C4.33616 3.06307 4.57299 3.06307 4.712 3.20987L5.18438 3.7085C5.28221 3.81228 5.43409 3.84645 5.56795 3.79709L6.55132 3.43134C6.68905 3.38072 6.78044 3.25037 6.78044 3.1061V2.34803C6.78044 2.15566 6.93875 2 7.1344 2H8.8656C9.06125 2 9.21956 2.15566 9.21956 2.34803Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.25 9.3L5.50353 6.5H6.14636L7.40391 9.3H6.7209L5.69236 6.828H5.9495L4.91694 9.3H4.25ZM4.87676 8.7L5.04953 8.208H6.49591L6.67269 8.7H4.87676Z' fill='none' />
          <path d='M7.6957 9.3V6.5H8.91307C9.16484 6.5 9.3818 6.54133 9.56394 6.624C9.74607 6.704 9.8867 6.82 9.9858 6.972C10.0849 7.124 10.1345 7.30533 10.1345 7.516C10.1345 7.724 10.0849 7.904 9.9858 8.056C9.8867 8.208 9.74607 8.32533 9.56394 8.408C9.3818 8.488 9.16484 8.528 8.91307 8.528H8.05729L8.34657 8.236V9.3H7.6957ZM8.34657 8.308L8.05729 8H8.87691C9.07779 8 9.22779 7.95733 9.32689 7.872C9.426 7.78667 9.47555 7.668 9.47555 7.516C9.47555 7.36133 9.426 7.24133 9.32689 7.156C9.22779 7.07067 9.07779 7.028 8.87691 7.028H8.05729L8.34657 6.72V8.308Z' fill='none' />
          <path d='M10.5991 9.3V6.5H11.25V9.3H10.5991Z' fill='none' />
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
          <path d='M13.8293 3.52204V4.65914C13.8293 4.87555 13.9664 5.07108 14.173 5.14702L15.6481 5.69563C15.8489 5.76967 16.0767 5.71841 16.2234 5.56275L16.932 4.81481C17.1405 4.5946 17.4958 4.5927 17.7062 4.81291L19.4168 6.59355C19.608 6.79287 19.6099 7.1023 19.4226 7.30352L18.5113 8.28686C18.3665 8.44252 18.3318 8.66842 18.4225 8.85826L19.0403 10.1681C19.1272 10.3522 19.3164 10.4718 19.523 10.4718H20.4691C20.7625 10.4718 21 10.7053 21 10.9939V13.1922C21 13.4807 20.7625 13.7142 20.4691 13.7142H19.4747C19.245 13.7142 19.0403 13.8604 18.9689 14.0749L18.4669 15.5879C18.4071 15.7663 18.4495 15.9618 18.5789 16.1004L19.3956 16.9869C19.5944 17.2033 19.5751 17.5393 19.3512 17.7311L17.4687 19.3503C17.2525 19.5364 16.9243 19.5193 16.7293 19.3124L16.0728 18.6176C15.93 18.4657 15.7079 18.4107 15.5091 18.479L14.1383 18.9498C13.924 19.0238 13.7811 19.2213 13.7811 19.4434V20.478C13.7811 20.7665 13.5436 21 13.2501 21H10.7479C10.4545 21 10.217 20.7665 10.217 20.478V19.4434C10.217 19.2213 10.0741 19.0238 9.85981 18.9498L8.48901 18.479C8.29014 18.4107 8.06811 18.4638 7.92524 18.6176L7.2688 19.3124C7.0738 19.5193 6.74558 19.5364 6.52934 19.3503L4.64689 17.7311C4.42293 17.5393 4.40363 17.2033 4.60249 16.9869L5.41918 16.1004C5.54661 15.9618 5.58908 15.7663 5.53116 15.5879L5.02918 14.0749C4.95774 13.8604 4.75308 13.7142 4.52333 13.7142H3.53094C3.23748 13.7142 3 13.4807 3 13.1922V10.9939C3 10.7053 3.23748 10.4718 3.53094 10.4718H4.47699C4.68358 10.4718 4.87279 10.3541 4.95967 10.1681L5.5775 8.85826C5.66824 8.66653 5.63156 8.44252 5.48868 8.28686L4.57739 7.30352C4.39011 7.1023 4.39204 6.79097 4.58318 6.59355L6.29379 4.81291C6.50424 4.5946 6.85949 4.5946 7.068 4.81481L7.77657 5.56275C7.92331 5.71841 8.15113 5.76967 8.35192 5.69563L9.82699 5.14702C10.0336 5.07108 10.1707 4.87555 10.1707 4.65914V3.52204C10.1707 3.2335 10.4081 3 10.7016 3H13.2984C13.5919 3 13.8293 3.2335 13.8293 3.52204Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.375 13.95L8.25529 9.75H9.21955L11.1059 13.95H10.0813L8.53854 10.242H8.92424L7.37541 13.95H6.375ZM7.31515 13.05L7.57429 12.312H9.74386L10.009 13.05H7.31515Z' fill='none' />
          <path d='M11.5435 13.95V9.75H13.3696C13.7473 9.75 14.0727 9.812 14.3459 9.936C14.6191 10.056 14.83 10.23 14.9787 10.458C15.1274 10.686 15.2017 10.958 15.2017 11.274C15.2017 11.586 15.1274 11.856 14.9787 12.084C14.83 12.312 14.6191 12.488 14.3459 12.612C14.0727 12.732 13.7473 12.792 13.3696 12.792H12.0859L12.5199 12.354V13.95H11.5435ZM12.5199 12.462L12.0859 12H13.3154C13.6167 12 13.8417 11.936 13.9903 11.808C14.139 11.68 14.2133 11.502 14.2133 11.274C14.2133 11.042 14.139 10.862 13.9903 10.734C13.8417 10.606 13.6167 10.542 13.3154 10.542H12.0859L12.5199 10.08V12.462Z' fill='none' />
          <path d='M15.8987 13.95V9.75H16.875V13.95H15.8987Z' fill='none' />
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
          <path d='M23.0489 5.87007V7.76524C23.0489 8.12592 23.2774 8.4518 23.6217 8.57836L26.0801 9.49272C26.4148 9.61611 26.7945 9.53069 27.039 9.27125L28.22 8.02468C28.5675 7.65767 29.1596 7.6545 29.5104 8.02151L32.3614 10.9892C32.6799 11.3215 32.6832 11.8372 32.371 12.1725L30.8522 13.8114C30.6109 14.0709 30.5529 14.4474 30.7042 14.7638L31.7339 16.9468C31.8787 17.2537 32.194 17.4531 32.5383 17.4531H34.1151C34.6042 17.4531 35 17.8422 35 18.3231V21.9869C35 22.4678 34.6042 22.857 34.1151 22.857H32.4579C32.075 22.857 31.7339 23.1006 31.6148 23.4581L30.7782 25.9798C30.6784 26.2772 30.7492 26.603 30.9648 26.834L32.326 28.3115C32.6574 28.6722 32.6252 29.2322 32.252 29.5518L29.1146 32.2506C28.7542 32.5606 28.2071 32.5322 27.8821 32.1873L26.7881 31.0293C26.5499 30.7762 26.1799 30.6845 25.8484 30.7984L23.5638 31.583C23.2066 31.7064 22.9685 32.0354 22.9685 32.4056V34.1299C22.9685 34.6108 22.5727 35 22.0836 35H17.9132C17.4241 35 17.0283 34.6108 17.0283 34.1299V32.4056C17.0283 32.0354 16.7902 31.7064 16.433 31.583L14.1483 30.7984C13.8169 30.6845 13.4469 30.773 13.2087 31.0293L12.1147 32.1873C11.7897 32.5322 11.2426 32.5606 10.8822 32.2506L7.74482 29.5518C7.37155 29.2322 7.33938 28.6722 7.67081 28.3115L9.03196 26.834C9.24434 26.603 9.31513 26.2772 9.2186 25.9798L8.38196 23.4581C8.2629 23.1006 7.92181 22.857 7.53888 22.857H5.88491C5.3958 22.857 5 22.4678 5 21.9869V18.3231C5 17.8422 5.3958 17.4531 5.88491 17.4531H7.46165C7.80596 17.4531 8.12131 17.2569 8.26612 16.9468L9.29583 14.7638C9.44707 14.4442 9.38593 14.0709 9.14781 13.8114L7.62898 12.1725C7.31685 11.8372 7.32007 11.3183 7.63864 10.9892L10.4896 8.02151C10.8404 7.65767 11.4325 7.65767 11.78 8.02468L12.961 9.27125C13.2055 9.53069 13.5852 9.61611 13.9199 9.49272L16.3783 8.57836C16.7226 8.4518 16.9511 8.12592 16.9511 7.76524V5.87007C16.9511 5.38916 17.3469 5 17.836 5H22.164C22.6531 5 23.0489 5.38916 23.0489 5.87007Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.625 23.25L13.7588 16.25H15.3659L18.5098 23.25H16.8022L14.2309 17.07H14.8737L12.2924 23.25H10.625ZM12.1919 21.75L12.6238 20.52H16.2398L16.6817 21.75H12.1919Z' fill='none' />
          <path d='M19.2392 23.25V16.25H22.2827C22.9121 16.25 23.4545 16.3533 23.9098 16.56C24.3652 16.76 24.7167 17.05 24.9645 17.43C25.2123 17.81 25.3361 18.2633 25.3361 18.79C25.3361 19.31 25.2123 19.76 24.9645 20.14C24.7167 20.52 24.3652 20.8133 23.9098 21.02C23.4545 21.22 22.9121 21.32 22.2827 21.32H20.1432L20.8664 20.59V23.25H19.2392ZM20.8664 20.77L20.1432 20H22.1923C22.6945 20 23.0695 19.8933 23.3172 19.68C23.565 19.4667 23.6889 19.17 23.6889 18.79C23.6889 18.4033 23.565 18.1033 23.3172 17.89C23.0695 17.6767 22.6945 17.57 22.1923 17.57H20.1432L20.8664 16.8V20.77Z' fill='none' />
          <path d='M26.4978 23.25V16.25H28.125V23.25H26.4978Z' fill='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ApiIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['green', 'white', 'main-dark-blue', 'red']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large'])
}

ApiIcon.defaultProps = {
  color: 'main-dark-blue',
  size: 'medium'
}

export default ApiIcon
