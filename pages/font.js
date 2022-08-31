import { createGlobalStyle } from "styled-components";

import LoversQuarrel from "../public/lovers-quarrel/LoversQuarrel-Regular.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "LoverQuarrels";
        src: url(${LoversQuarrel}) format('truetype');
    }
`;