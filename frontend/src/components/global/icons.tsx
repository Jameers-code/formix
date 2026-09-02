import { Activity, Box, Calendar, FileText, Hash, LucideProps, MessageCircle, Sparkles, Users } from "lucide-react";

const Icons = {
    logo: (props: LucideProps) => (
        // <svg {...props} width="243" height="219" viewBox="0 0 243 219" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M149.718 6.17182e-07C166.624 8.01123e-07 175.077 9.53674e-07 182.038 4.01924C189 8.03848 193.226 15.359 201.679 30L230.038 79.1192C238.491 93.7602 242.718 101.081 242.718 109.119C242.718 117.158 238.491 124.478 230.038 139.119L201.679 188.238C193.226 202.879 189 210.2 182.038 214.219C175.077 218.238 166.624 218.238 149.718 218.238H93C76.094 218.238 67.641 218.238 60.6795 214.219C53.718 210.2 49.4915 202.879 41.0385 188.238L12.6795 139.119C4.2265 124.478 -4.998e-08 117.158 0 109.119C4.99803e-08 101.081 4.2265 93.7602 12.6795 79.1192L41.0385 30C49.4915 15.359 53.718 8.03848 60.6795 4.01924C67.641 -4.76837e-07 76.094 -1.83863e-07 93 0L149.718 6.17182e-07Z" fill="#FF4E10" />
        //     <path d="M119.205 53.3631C119.421 51.5456 122.058 51.5456 122.274 53.3631L124.083 68.61C126.419 88.298 141.942 103.82 161.63 106.156L176.877 107.966C178.694 108.181 178.694 110.819 176.877 111.034L161.63 112.844C141.942 115.18 126.419 130.702 124.083 150.39L122.274 165.637C122.058 167.454 119.421 167.454 119.205 165.637L117.396 150.39C115.06 130.702 99.5377 115.18 79.8498 112.844L64.6029 111.034C62.7854 110.819 62.7854 108.181 64.6029 107.966L79.8498 106.156C99.5377 103.82 115.06 88.298 117.396 68.61L119.205 53.3631Z" fill="white" />
        // </svg>
        <svg {...props} width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_iiii_155_525)">
                <path d="M0 250C0 137.132 0 80.6975 32.6936 43.7941C36.1668 39.8737 39.8737 36.1668 43.7941 32.6936C80.6975 0 137.132 0 250 0V0C362.868 0 419.302 0 456.206 32.6936C460.126 36.1668 463.833 39.8737 467.306 43.7941C500 80.6975 500 137.132 500 250V250C500 362.868 500 419.302 467.306 456.206C463.833 460.126 460.126 463.833 456.206 467.306C419.302 500 362.868 500 250 500V500C137.132 500 80.6975 500 43.7941 467.306C39.8737 463.833 36.1668 460.126 32.6936 456.206C0 419.302 0 362.868 0 250V250Z" fill="url(#paint0_radial_155_525)" />
                <g filter="url(#filter1_d_155_525)">
                    <rect x="92" y="120" width="160" height="60" rx="30" fill="white" />
                </g>
                <g filter="url(#filter2_d_155_525)">
                    <rect x="92" y="220" width="315" height="60" rx="30" fill="white" />
                </g>
                <g filter="url(#filter3_d_155_525)">
                    <rect x="92" y="320" width="220" height="60" rx="30" fill="white" />
                </g>
            </g>
            <defs>
                <filter id="filter0_iiii_155_525" x="0" y="-4" width="504" height="508" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_155_525" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect1_innerShadow_155_525" result="effect2_innerShadow_155_525" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_155_525" result="effect3_innerShadow_155_525" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect3_innerShadow_155_525" result="effect4_innerShadow_155_525" />
                </filter>
                <filter id="filter1_d_155_525" x="86" y="116" width="172" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_525" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_155_525" result="shape" />
                </filter>
                <filter id="filter2_d_155_525" x="86" y="216" width="327" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_525" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_155_525" result="shape" />
                </filter>
                <filter id="filter3_d_155_525" x="86" y="316" width="232" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_525" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_155_525" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_155_525" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(44.8111) scale(643.471)">
                    <stop stopColor="#FF8C66" />
                    <stop offset="0.770196" stopColor="#FF4E10" />
                </radialGradient>
            </defs>
        </svg>
    ),
    dashboard: (props: LucideProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="currentColor" strokeWidth="2"></path>
                <path d="M21 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 21L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    ),
    home: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17.99V14.99" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    google: (props: LucideProps) => (
        <svg {...props} viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <defs> </defs>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                        <g id="Google" transform="translate(401.000000, 860.000000)">
                            <path
                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                id="Fill-1" fill="#FBBC05"> </path>
                            <path
                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                id="Fill-2" fill="#EB4335"> </path>
                            <path
                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                id="Fill-3" fill="#34A853"> </path>
                            <path
                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                id="Fill-4" fill="#4285F4"> </path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    ),
    project: (props: LucideProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path
                    d="M22 12.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    ),
    settings: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 13.3189V11.5589C2 10.5189 2.85 9.6589 3.9 9.6589C5.71 9.6589 6.45 8.3789 5.54 6.8089C5.02 5.9089 5.33 4.7389 6.24 4.2189L7.97 3.2289C8.76 2.7589 9.78 3.0389 10.25 3.8289L10.36 4.0189C11.26 5.5889 12.74 5.5889 13.65 4.0189L13.76 3.8289C14.23 3.0389 15.25 2.7589 16.04 3.2289L17.77 4.2189C18.68 4.7389 18.99 5.9089 18.47 6.8089C17.56 8.3789 18.3 9.6589 20.11 9.6589C21.15 9.6589 22.01 10.5089 22.01 11.5589V13.3189C22.01 14.3589 21.16 15.2189 20.11 15.2189C18.3 15.2189 17.56 16.4989 18.47 18.0689C18.99 18.9789 18.68 20.1389 17.77 20.6589L16.04 21.6489C15.25 22.1189 14.23 21.8389 13.76 21.0489L13.65 20.8589C12.75 19.2889 11.27 19.2889 10.36 20.8589L10.25 21.0489C9.78 21.8389 8.76 22.1189 7.97 21.6489L6.24 20.6589C5.33 20.1389 5.02 18.9689 5.54 18.0689C6.45 16.4989 5.71 15.2189 3.9 15.2189C2.85 15.2189 2 14.3589 2 13.3189Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    inbox: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    email: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    calendar: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 9.08997H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    calenderCheck: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 9.08997H20.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.4399 19L17.4299 19.99L19.5599 18.02" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    bell: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
    ),
    document: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12.2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 16.2H12.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    edit: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    form: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.37 8.87988H17.62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.37 15.8799H17.62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    box: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21.6099V12.5399" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.49 13.14V9.48004L7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    boxRemove: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21.6099V12.5399" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.92999 21.52L4.59 18.56C3.38 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38 6.11002 4.59 5.44002L9.92999 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.54 22 16.27 21.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C21.21 14 23 15.79 23 18Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.07 19.0399L17.95 16.9299" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.05 16.96L17.93 19.0699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    message: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 9.5H17" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 14.5H14" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    messageCheck: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 7.42993V13.4299C22 14.9299 21.5 16.1799 20.62 17.0599C19.75 17.9299 18.5 18.4299 17 18.4299V20.5599C17 21.3599 16.11 21.84 15.45 21.4L11 18.4299H8.88C8.96 18.1299 9 17.8199 9 17.4999C9 16.4799 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.4999 5 13.4999C3.88 13.4999 2.86 13.96 2.13 14.71C2.04 14.31 2 13.8799 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.44 17.5L4.42999 18.49L6.56 16.52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    logout: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.8999 7.56023C9.2099 3.96023 11.0599 2.49023 15.1099 2.49023H15.2399C19.7099 2.49023 21.4999 4.28023 21.4999 8.75023V15.2702C21.4999 19.7402 19.7099 21.5302 15.2399 21.5302H15.1099C11.0899 21.5302 9.2399 20.0802 8.9099 16.5402" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0001 12H3.62012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    notification: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    activity: (props: LucideProps) => (
        <Activity {...props} />
    ),
    users: (props: LucideProps) => (
        <Users {...props} />
    ),
    stars: (props: LucideProps) => (
        <svg {...props} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.000408814 14.48C-0.00466469 14.6987 0.062077 14.9129 0.190409 15.09C0.317094 15.2706 0.499913 15.4042 0.71041 15.47L2.42041 16.04C2.94713 16.2149 3.42627 16.5093 3.82041 16.9C4.2141 17.2918 4.50889 17.7717 4.68041 18.3L5.28041 20C5.34291 20.2041 5.46906 20.3828 5.64041 20.51C5.82329 20.6342 6.03935 20.7004 6.26041 20.7C6.48226 20.7095 6.70097 20.6449 6.88203 20.5163C7.06309 20.3878 7.19621 20.2026 7.26041 19.99L7.83041 18.28C8.00193 17.7517 8.29671 17.2718 8.69041 16.88C9.0878 16.4911 9.56571 16.1941 10.0904 16.01L11.8004 15.45C12.0029 15.3791 12.1801 15.2504 12.3104 15.08C12.4417 14.8994 12.5149 14.6832 12.5204 14.46C12.5299 14.2382 12.4653 14.0195 12.3367 13.8384C12.2082 13.6573 12.023 13.5242 11.8104 13.46L10.0904 12.89C9.55699 12.7176 9.07213 12.4211 8.67575 12.0247C8.27936 11.6283 7.98278 11.1434 7.81041 10.61L7.24041 8.92001C7.18212 8.71207 7.05808 8.52858 6.88683 8.397C6.71559 8.26541 6.50635 8.1928 6.29041 8.19001C6.07541 8.19001 5.86441 8.24901 5.68041 8.36001C5.49841 8.48501 5.35841 8.66301 5.28041 8.87001L4.70041 10.61C4.52804 11.1434 4.23146 11.6283 3.83507 12.0247C3.43868 12.4211 2.95383 12.7176 2.42041 12.89L0.72041 13.49C0.513586 13.5578 0.334526 13.6912 0.21041 13.87C0.0749422 14.0446 0.00109667 14.2591 0.000408814 14.48ZM9.99941 8.12002C10.0009 8.31605 10.0601 8.50731 10.1694 8.67001C10.2876 8.831 10.4513 8.9529 10.6394 9.02001L11.8994 9.44002C12.2524 9.56202 12.5724 9.76002 12.8394 10.02C13.1004 10.2862 13.2986 10.6074 13.4194 10.96L13.8494 12.2C13.9104 12.3913 14.0336 12.5568 14.1994 12.67C14.3638 12.7848 14.5589 12.8475 14.7594 12.85C14.9644 12.8466 15.1634 12.7803 15.3294 12.66C15.4867 12.5404 15.605 12.3768 15.6694 12.19L16.0794 10.94C16.1997 10.59 16.3981 10.272 16.6594 10.01C16.9155 9.74132 17.2354 9.5418 17.5894 9.43002L18.8394 9.01002C19.0334 8.94896 19.202 8.82602 19.3194 8.66002C19.399 8.53535 19.45 8.39458 19.4686 8.24784C19.4872 8.10111 19.4731 7.95207 19.4272 7.81146C19.3813 7.67086 19.3047 7.54219 19.2031 7.43472C19.1015 7.32726 18.9772 7.24369 18.8394 7.19002L17.5894 6.78002C17.2357 6.65652 16.9144 6.4548 16.6495 6.18989C16.3846 5.92498 16.1829 5.60371 16.0594 5.25002L15.6494 4.02002C15.5905 3.83569 15.4793 3.67242 15.3294 3.55001C15.1701 3.42999 14.9786 3.36034 14.7794 3.35001C14.5776 3.34459 14.3789 3.40037 14.2094 3.51001C14.0426 3.62262 13.9136 3.78294 13.8394 3.97001L13.4194 5.25002C13.2959 5.60371 13.0942 5.92498 12.8293 6.18989C12.5644 6.4548 12.2431 6.65652 11.8894 6.78002L10.6394 7.21001C10.4525 7.27423 10.2912 7.39696 10.1794 7.56001C10.061 7.72262 9.99796 7.9189 9.99941 8.12002ZM4.21041 2.76001C4.21946 2.94234 4.27825 3.11872 4.38041 3.27001C4.48447 3.41262 4.63177 3.51783 4.80041 3.57001L5.42041 3.78001C5.54084 3.82158 5.65025 3.89 5.74034 3.98009C5.83043 4.07018 5.89884 4.17958 5.94041 4.30001L6.16041 4.93001C6.2208 5.08342 6.32088 5.21802 6.45041 5.32001C6.59784 5.43812 6.78152 5.5017 6.97041 5.50001C7.14327 5.48929 7.31116 5.43789 7.46041 5.35001C7.60991 5.23987 7.72169 5.08618 7.78041 4.91001L7.99041 4.29001C8.02653 4.16705 8.09571 4.05636 8.19041 3.97001C8.27857 3.87751 8.38863 3.80872 8.51041 3.77001L9.13041 3.57001C9.29539 3.50569 9.44033 3.39871 9.55041 3.26001C9.65416 3.11014 9.70995 2.93229 9.71041 2.75001C9.7046 2.56709 9.64552 2.38984 9.54041 2.24001C9.4327 2.10115 9.2867 1.99686 9.12041 1.94001L8.51041 1.74001C8.38724 1.69799 8.27466 1.62976 8.18041 1.54001C8.09067 1.44577 8.02243 1.33318 7.98041 1.21001L7.77041 0.590014C7.71041 0.435014 7.61541 0.298014 7.49041 0.190014C7.34694 0.0841265 7.17776 0.0185276 7.00041 1.43241e-05C6.81169 -0.00106625 6.62701 0.0546856 6.47041 0.160014C6.32945 0.266065 6.21905 0.407516 6.15041 0.570014L5.94041 1.21001C5.89839 1.33318 5.83015 1.44577 5.74041 1.54001C5.6474 1.62638 5.5388 1.69426 5.42041 1.74001L4.79041 1.95001C4.6302 2.01305 4.48897 2.11639 4.38041 2.25001C4.27132 2.3978 4.21182 2.57633 4.21041 2.76001Z" fill="currentColor" />
        </svg>
    ),
    trash: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.33 16.5H13.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 12.5H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    phone: ({ color = "currentColor", ...props }: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke={color} strokeWidth={2} strokeMiterlimit="10" />
        </svg>
    ),
    number: (props: LucideProps) => (
        <Hash {...props} />
    ),
    text: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66992 7.17003V5.35003C2.66992 4.20003 3.59992 3.28003 4.73992 3.28003H19.2599C20.4099 3.28003 21.3299 4.21003 21.3299 5.35003V7.17003" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 20.7201V4.11011" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.06006 20.72H15.9401" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    textLarge: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.98999 5.93007V4.42007C1.98999 3.40007 2.81999 2.57007 3.83999 2.57007H16.76C17.78 2.57007 18.61 3.40007 18.61 4.42007V5.93007" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3 18.1001V3.32007" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.8999 18.1001H12.4799" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.6799 10.3401H20.6899C21.4199 10.3401 22.0099 10.9301 22.0099 11.6601V12.4601" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.0801 21.4301V10.8701" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.9399 21.4299H18.2199" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    dropdown: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    radio: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16.23C14.3362 16.23 16.23 14.3362 16.23 12C16.23 9.66386 14.3362 7.77002 12 7.77002C9.66386 7.77002 7.77002 9.66386 7.77002 12C7.77002 14.3362 9.66386 16.23 12 16.23Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    image: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    video: (props: LucideProps) => (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export default Icons;
