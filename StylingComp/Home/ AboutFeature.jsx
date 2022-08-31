import styled from "styled-components";

export const AboutFeatureCont = styled.section`
    padding: 20vh 0;
    padding-bottom: 10vh;
    background-image: linear-gradient( to right bottom , #0fc9b081, #e70c0c87) ,url(assest/FormSidePic.jpeg);
    background-size: cover;
    background-position: top;
    margin-top: -15vh;
    overflow: hidden;
    clip-path: polygon(0 15vh, 100% 0, 100% 80vh, 0 100%);
`;

export const AboutFeatureRow = styled.div`
    margin: 0 auto;
    margin-left: 2em;
    margin-top: 1em;
    max-width: 114rem;
    margin-right: 2em;
    margin-bottom: 80px;
    transform:skewY(-7deg);

    &::after{
        content: "";
        display: table;
        clear: both;
    }
    
    & > *{
        transform: skewY(7deg);
    }
`;

export const AboutFeatureBox = styled.div`
    float: left;
    padding: 2.5rem;
    font-size: 1.5rem;
    border-radius: 3px;
    margin: 0 auto;
    text-align: center;
    transition: transform .3s;
    background-color: white;
    width: calc((100% - 3 * 6rem) / 4);
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .5);

    &:not(:last-child){
        margin-right: 6rem;
    }
    
    
    
    &:hover{
        transform: translateY(-1.5rem) scaleX(1.03);
    }

    svg{
        width: 2em;
        stroke: #467066;
        stroke-width: 10px;
        color: transparent;
        -webkit-background-clip: text;
        background-image: linear-gradient( to right bottom , #0fc9b081, #e70c0c87);
    }
`;

export const AboutFeatureBoxH3 = styled.h3`
    font-size: 15px;

`;

export const AboutFeatureBoxP = styled.p`
    width:9.6em;
    height: auto;
    font-size: 25px;
    margin-left: -1.5em;
    /* background-color: red; */
`;
