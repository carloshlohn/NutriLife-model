import { createGlobalStyle } from "styled-components";

const MyStyles = createGlobalStyle`

    *{ 
    font-family: 'Arial', sans-serif;
    color: black;
    background-color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
        color: black;
        font-size: 16px;
    }
    `
    export default MyStyles;