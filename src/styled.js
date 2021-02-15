import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
};

html {
	line-height: 1.15; 
	-webkit-text-size-adjust: 100%; 
};

body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 14px;
    letter-spacing: 1.2px;
    background-color: ${colors.backLayout};
    color: ${colors.fontMain};
};

a,
a:hover,
a:active {
    text-decoration: none;
    outline: none;
};

ul {
    list-style: none;
};

small {
    font-size: 80%;
};

button,
select { 
  text-transform: none;
};

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer; 
    *overflow: visible; 
};

input[type="search"] {
    -webkit-appearance: textfield; 
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
};

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
};


 table {
    border-collapse: separate;
    border-spacing: 0px 5px;
};
`;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
