import styled from "styled-components";

export const ProductPeakSection = styled.section`
    padding: 29rem 0;
    margin-top: -25vh;
    padding-bottom: 20rem;
    background-color: #cfe6e7f8;
    /* border: 2px solid red; */
`;

export const ProductsPeakSectionTextCont = styled.div`
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: -10vh;
    user-select: none;
    align-items: center;
    justify-content: center;
`;

export const ProductsPeakSectionText = styled.h2`
    cursor: pointer;
    font-weight: 500;
    font-size: 1.3rem;
    color: transparent;
    letter-spacing: 2px;
    transition: all .5s;
    display: inline-block;
    text-transform: capitalize;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right , #2db6b6, blue);

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4){
        padding: .2em;
    }

    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7){
        padding: .2em;
    }

    &:nth-child(8):hover{
        display: flex;
        stroke: white;
        color: #2db6b6;
        stroke-width: 1.5em;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
    }

    &:hover{
        text-shadow: -0em -.5em #2db6b6;
    }


    /* &:nth-child(1):hover,
    &:nth-child(2):hover,
    &:nth-child(3):hover,
    &:nth-child(4):hover{
        transform: scaleX(1) skewX(20deg) skewY(1deg);
    }

    &:nth-child(5):hover,
    &:nth-child(6):hover,
    &:nth-child(7):hover,
    &:nth-child(8):hover{
        transform: scaleX(1) skewX(-20deg) skewY(1deg);
    } */

    svg{
        font-size: 1.5em;
        color: #2db6b6;
    }
    
`;

export const ProductsPeakSectionContRow = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top: 2em;
    max-width: 144rem;
    align-items: center;
    /* overflow: hidden; */
    justify-content: center;
    
    
`;

export const ProductsPeakSectionCont = styled.div`
    font-size: 1.5rem;
    border-radius: 3px;
    text-align: center;
    position: relative;
    border-radius: 50px;
    transition: transform .3s;
    background-color: transparent;
    
    &:not(:last-child){
        margin-right: 6rem;
    }
    `;

export const ProductsPeakSectionCard = styled.div`
    width: 10em;
    height: 29rem;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
    margin-left: 1em;
    margin-right: 1em;
    position: relative;
    transition: all .8s;
    border-radius: 50px;
    align-items: center;
    transform: scale(.95);
    justify-content: center;
    transition: transform .5s ;
    background-color: #0853b6;
    box-shadow: 2px 2px 6px 5px black;

    &:hover{
        transform: scale(1.05);
    }
`;

export const ProductsPeakSectionCardImgCont = styled.div`
    top: 0;
    left: 0;
    width:100%;
    height: 58%;
    position: absolute ;
    box-shadow: 0 3px 5px black;
`;

export const ProductsPeakSectionCardImg = styled.img`
    top: 0;
    left: 0;
    width:100%;
    height: 80%;
    position: absolute;
    /* background-size: cover; */
    object-fit: fill;
    border: 2.5px solid white;
    box-shadow: 0 3px 5px black;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

export const ProductPeakSectionHeart = styled.div`
    top: 80px;
    width: 50px;
    right: 10px;
    height: 50px;
    display: flex;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    transition: all .5s ;
    justify-content: center;
    border: 2px solid #971010;
    background-color: #cf4b4b;

    svg{
        width: 30px;
        color: #971010;
        
    }

    &:hover{
        background-color: #b12f2f;
    }
`;

export const ProductPeakSectionCart = styled.div`
    top: 150px;
    width: 50px;
    right: 10px;
    height: 50px;
    display: flex;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    transition: all .5s ;
    justify-content: center;
    border: 2px solid #3973c0;
    background-color: #0853b6;

    svg{
        width: 30px;
        color: #3973c0;
    }

    &:hover{
        background-color: #0853b6;
    }
`;

export const ProductsPeakSectionCardInfo = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 53%;
    text-align: left;
    position: absolute;
    /* background-color: red; */
`;

export const ProductsPeakSectionCardInfoPrice = styled.h5`
    top: 2px;
    right: 0;
    padding: 10px;
    font-size: 15px;
    color: #14e9cc;
    position: absolute;
    border-radius: 5px;
`;

export const ProductsPeakSectionCardInfoH1 = styled.h1`
    top: 0;
    left: 0;
    padding: 10px;
    font-size: 15px;
    position: absolute;
    border-radius: 5px;
    text-transform: capitalize;
    /* color: transparent; */
`;

export const ProductPeakSectionSizeCont = styled.div`
    top: 50px;
    left: 10px;
    display: flex;
    position: absolute;
    flex-direction: column;
`;

export const ProductPeakSectionSizeH4 = styled.h4`
    font-size: 15px;
`;

export const ProductPeakSectionSizeUl = styled.ul`
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
`;

export const ProductPeakSectionSizeLi = styled.li`
    width: 30px;
    height: 30px;
    color: blue;
    display: flex;
    font-size: 10px;
    border-radius: 50%;
    align-items: center;
    border: 1px solid white;
    transition: all .5s ;
    justify-content: center;

    &:not(:last-child){
        margin-right: 10px;
    }

    &:hover{
        background-color: white;
        box-shadow: 1px 1px 1px 1px black;
    }
`;

export const ProductPeakSectionColorCont = styled.div`
    top: 110px;
    left: 10px;
    display: flex;
    position: absolute;
    flex-direction: column;
`;

export const ProductPeakSectionColorH4 = styled.h4`
    font-size: 15px;
`;

export const ProductPeakSectionColorUl = styled.ul`
    display: flex;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
`;

export const ProductPeakSectionColorLi = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.Color};

    &:not(:last-child){
        margin-right: 10px;
    }
`;

export const ProductPeakSectionBtn = styled.div`
    left: 10px;
    right: 10px;
    bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    align-items: center;
    justify-content: center;
`;

export const ProductPeakSectionBtnA = styled.a`
    padding: 5px;
    overflow: hidden;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    transition: all .5s;
    border: 2px solid #0e3364;
    background-color: #0853b6;

    &:hover{
        box-shadow: 1px 1px 1px 1px black;
    }
`;

export const ProductsPeakSectionCardPagination = styled.div`
    width: 55vh;
    padding: 15px;
    display: flex;
    bottom: -80px;
    font-size: 20px;
    /* overflow: hidden; */
    user-select: none;
    margin: 0 auto;
    user-select: none;
    position: relative;
    flex-direction: row;
    border-radius: 100px;
    background-color: white;
    animation: fadeInUp 1s .75s;
    animation-fill-mode: both;
    backface-visibility: hidden;
    justify-content: space-between;
    box-shadow: -0px  -0px 5px black;

    &::after{
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        transition: all .5s;
        border-radius: 100px;
        display: inline-block;
        background-color: white;
    }

    &:hover::after{
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
`;

export const ProductsPeakSectionCardPaginationPrev = styled.div`
    float: left;
    cursor: pointer;

    svg{
        width: 10px;
    }
`;

export const ProductsPeakSectionCardPaginationNumb = styled.div`
    display: flex;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const ProductsPeakSectionCardPaginationNumbActive = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%; 
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

export const ProductsPeakSectionCardPaginationNumbUnActive = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;
    transition: 1s ;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:hover{
        border-radius: 50%; 
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: black;
    }
`;

export const ProductsPeakSectionCardPaginationRight = styled.div`
    float: right;
    cursor: pointer;
    svg{
        width: 10px;
    }
`;