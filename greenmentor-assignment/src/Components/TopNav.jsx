import React, { useContext } from 'react'
import "./TopNav.css";
import { Fakecontext } from './ContextAPI';

export const TopNav = () => {
  const {value}=useContext(Fakecontext)

  return (
    <div className='top-navbar-container'>
      <div>
        <div className='tnb-category-img'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C" />
            <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C" />
            <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C" />
            <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C" />
            <path d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z" fill="#02AB6C" />
          </svg>
        </div>
        <p>{value}</p>
      </div>


      <div>
        <img className='profile-img' src="https://s3-alpha-sig.figma.com/img/b270/0d23/767117420f0f997824b701ee2fce525b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4i3kXNB6MQGcPoEeb9QxMjz6dbw1fpFjujfUGGbjo603Q5vY-EklfYygLXWdxCI53s5vi3cjwm97mbsAXzQKS4arCB2AkLWpaaTztNU5-XBkZMyVxyglLxEBu1JKnPF9iBEzVOmEeNBkv4c2BQbfWfDL8hIQjcpklLa-LZZT7lTix9KnSK3ujpw15mv0pxwBYn2ZPmpT0X9AKjRK7jzoW6zG0BUUxKuQRxBx984rjwThMCTeq2r6RnyZn-69y85-DUdsUb7C4gD7QXba24fUA3K6ZI-wCIPo8yGlw6ueLEd~BwjVKQNlUgsmXMUL3XPFWgYoAZRTxWk9YMi8Nen7A__" alt="" />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 8L12 16L19 8H5Z" fill="#474444" />
          </svg>
        </div>
        <div className='bell-icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z" fill="black" fill-opacity="0.84" />
          </svg>
          <div className='notification-text'>1</div>
        </div>
      </div>
    </div>
  )
}
