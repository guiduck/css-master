import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;

    color: var(--white);
}

html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
}

*, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
    background: var(--primary);
}

:root{
    --primary: #FF223E;
    --secondary: #5D1EB2;
    --white: #FFFFFF;
    --gray: #A7B8C3;
    --black: #000000;
}
`;
