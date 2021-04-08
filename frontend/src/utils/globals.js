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

    .link-secondary > a {
        color : ${(props) => props.theme.colors.linkSecondary};
    }
`;
