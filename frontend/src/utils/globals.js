import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
    }

    *, :after , :before {
        box-sizing :  inherit;
    }

    body {
        margin : 0;
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing : antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x : hidden;
        box-sizing : border-box;
        width : 100%;
        height : 100%;
    }

    html {
        line-height : 1.15;
        -webkit-text-size-adjust: 100%;
    }

    a {
        text-decoration : none;
        background-color : transparent;
        cursor : pointer;
    }

    a:hover {
        text-decoration : none;
    }

    h1 {
        font-size : 2em;
        margin : 0.67em 0;
    }

    img {
        border-style : none;
    }

    button, select{
        text-transform : none;
    }

    button, input {
        overflow: visible;
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    input[type="text"], button , input:focus, textarea,button:focus {
        outline: none;
        box-shadow:none !important;
        border:1px solid #ccc !important;
    }

    .menu-mobile-svg, .close-sv {
        cursor : pointer;
        fill : rgb(19, 19, 19);
    }

    .branding-svg {
        width: 152px;
        fill : rgb(19, 19, 19);
    }
    .p-relative {
        position : relative;
    }
    
    .cart-svg {
        fill : rgb(19, 19, 19);
        transition : opacity 0.2s ease 0s;
        position : relative;

        @media ${(props) => props.theme.mediaQueries.large}{
            display : inline-block;
            margin-left: 10px;
            transform : translate(0px , 2px);
        }
    }

    .cart-svg:hover {
        opacity: 0.6;
    }

    .footer-svg-icon {
        fill : rgb(24, 24, 24);
        cursor : pointer;
    }

    .navbar-scrolled {
        animation : 0.5s ease 0s 1 normal none running animateNavbar;
        box-shadow: rgb(0 0 0 / 12%) 0 2px 8px;
        background-color : white !important;
        position : fixed;
        top : 0;


        @keyframes animateNavbar {
            0% {
                opacity : 0;
            }
            100% {
                opacity : 1;
            }
        }
    }
    
    .navbar-wrapper {
        @media ${(props) => props.theme.mediaQueries.large}{
            padding-top : 40px;
        }
    }
    
    .mt-50{
        margin-top : 50px;
    }

    .mb-32{
        margin-bottom : 32px;
    }

    .mr-10 {
        margin-right : 10px;
    }
    
    .pt-20 {
        padding-top : 20px;
    }
    
    .link-secondary > a {
        color : ${(props) => props.theme.colors.linkSecondary};
    }

    .link-secondary > a:hover{
        color : ${(props) => props.theme.colors.linkSecondary};
    }
    
    .title {
        font-size: 32px;
        line-height: 46px;
        font-weight: 800;
        text-align: center;
        margin: 0 auto 30px;
        max-width: 700px;

        @media ${(props) => props.theme.mediaQueries.large} {
            font-size: 48px;
            line-height: 68px;
        }
    }

    .desc {
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        color: ${(props) => props.theme.colors.textSecondary};
        margin: 0 auto;
        max-width: 900px;
    }

    .show-on-mobile {
        display : none;
        @media ${(props) => props.theme.mediaQueries.medium}{
            display : block;
        }
    }

    .link-btn {
        display : flex;
        flex : 1 ;
        justify-content : center;
    }

    .tabs-wrapper {
        width: 100%;
        max-width: 2100px;
        padding-left: 25px;
        padding-right: 25px;
        margin-left: auto;
        margin-right: auto;

        @media ${(props) => props.theme.mediaQueries.large} {
            padding-left: 50px;
            padding-right: 50px;
        }
    }

    .styled-ol {
        display: flex;
        justify-content: space-around;
        padding-left: 0px;
    }

    .styled-li {
        display: inline-block;
        list-style: none;
        margin: 20px;
        font-size: 20px;
        line-height: 32px;
        width: 25%;
        padding-bottom: 10px;
        border-bottom: 3px solid rgb(239, 239, 239);
        position: relative;
        font-weight: 600;
        color: ${(props) => props.theme.colors.textSecondary};
        cursor : pointer;
        
        &::after {
            width: 100%;
            height: 3px;
            border-radius: 3px;
            background-color: none;
            content: '';
            position: absolute;
            bottom: -3px;
            display: block;
        }
    }


    .styled-li.react-tabs__tab--selected{
        color : ${(props) => props.theme.colors.textPrimary};
        
        &::after {
            background-color : rgb(138, 199, 196);
        }
    }

    .overflow-hidden {
        overflow : hidden;
    }

    .row-reverse{
        @media ${(props) => props.theme.mediaQueries.large}{
            flex-direction : row-reverse !important ;
        }
    }

    .w-48 {
        margin-bottom : 30px;
        @media ${(props) => props.theme.mediaQueries.large}{
            width : 48%;
            flex: unset;
            min-width: unset;
        }
    }

    .fw-600 {
        font-weight: 600;
    }

    .navbar-scrolled {
        position : fixed;
        top : 0;
        background: #fff;
    }

    .minh-75 {
        min-height: 75vh;
    }

    .checkout-link {
        color : ${(props) => props.theme.colors.textPrimary};
        font-family : inherit;
        font-size :18px;
    }
    .checkout-link:hover {
        color : ${(props) => props.theme.colors.textPrimary};
    }
    
    .checkout-link-icon {
        font-size : 12px;
    }
`;
