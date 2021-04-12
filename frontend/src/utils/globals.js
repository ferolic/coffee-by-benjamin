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
        min-height : 120vh;
        margin : 0;
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing : antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x : hidden;
        box-sizing : border-box;
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

    .menu-mobile-svg, .close-sv {
        cursor : pointer;
        fill : rgb(19, 19, 19);
    }

    .branding-svg {
        width: 152px;
        fill : rgb(19, 19, 19);
    }

    .cart-svg {
        fill : rgb(19, 19, 19);
        transition : opacity 0.2s ease 0s;
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

    .mt-50{
        margin-top : 50px;
    }

    .mb-32{
        margin-bottom : 32px;
    }

    .mr-10 {
        margin-right : 10px;
    }
    
    .link-secondary > a {
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
`;
