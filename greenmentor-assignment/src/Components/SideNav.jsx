import React from 'react'
import "./SideNav.css";
import energy from "../assets/Images/energy.svg"

export const SideNav = () => {
    return (
        <div className='sidenav-container'>
            <div className='sidenav-img'>
                <img src="https://s3-alpha-sig.figma.com/img/7017/0b71/3d08985c3dc4a95e3950693faa9eed19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ic-~0BNRO2zRSZllD1QqbD~tbPRrZj3gPKGtNLZ0Aa5OBbrZ3Y~6eusCcX5-9mwI7LqUrdx2BbIH6JT427RKRZw8G59blcAXx9GPlDbmjNG63EBRM~v-o6CBi4gmoN-EmGSd~MUoQgIEpAZ1wpuSRwNM-zygpRe7FbZTSMcz0MGI~yufsy~SdGuD1vYrZxweO5~y9xuwaysTwN8bekP85vgonpdosGlv-4SpSu2RN5Q~BlDbPz-ufP3KAtwSsB8~UdHj~aNmkdX~rBeFQTF-be55TfZl02MyqRUhbOaT53HkIm2-CMwqMeNuYVcbBJreVg8iIF3yGkoTBiImoN0hiA__" alt="" />
            </div>



            <div className='data-in-section-sidenav' >
                <div>
                    <p>DATA-IN</p>
                </div>
                <div>
                    <img src={energy} alt="" />
                    <p>Energy</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z" fill="white" />
                    </svg>
                    <p>Water and Effluents</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white" />
                    </svg>
                </div>
            </div>



            <div className='analyze-section-sidenav' >
                <div>
                    <p>ANALYZE</p>
                </div>
                <div>
                    <img src={energy} alt="" />
                    <p>Energy</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.66634 2.66634V1.33301H11.333V2.66634H14.6663V3.99967H13.333V13.9997C13.333 14.1765 13.2628 14.3461 13.1377 14.4711C13.0127 14.5961 12.8432 14.6663 12.6663 14.6663H3.33301C3.1562 14.6663 2.98663 14.5961 2.8616 14.4711C2.73658 14.3461 2.66634 14.1765 2.66634 13.9997V3.99967H1.33301V2.66634H4.66634ZM3.99967 3.99967V13.333H11.9997V3.99967H3.99967ZM5.99967 5.99967H7.33301V11.333H5.99967V5.99967ZM8.66634 5.99967H9.99967V11.333H8.66634V5.99967Z" fill="white" />
                    </svg>
                    <p>Waste</p>
                    <p>(βeta)</p>
                </div>
            </div>


            <div className='sidebar-button-div'>
                <button>Open Help Centre</button>
            </div>
        </div>
    )
}
