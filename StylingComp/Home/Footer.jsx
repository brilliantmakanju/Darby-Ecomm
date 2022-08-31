import styled from "styled-components";


export const FooterCont = styled.footer`
    padding: 20rem 0;
    font-size: 1.4rem;
    padding-top: 10rem;
    background-color: #1f1c1c;
`;

export const FooterDivSubCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    margin-bottom: 100px;
    justify-content: center;
`;

export const FooterDivSubLogo = styled.div`
    left: 10%;
    font-size: 4em;
    position: absolute;
    letter-spacing: -10px;
    /* font-family: ; */

    &::first-letter{
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
    }

    
`;

export const FooterDivSubForm = styled.div`
    display: flex;
    margin-left: 15em;
    flex-direction: column;

    label{
        display: block;
        color: #0b30aa;
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 2px;
        transition: all .5s;
        transform: translateY(.5px) translateX(3rem);
    }
    
    input:placeholder-shown + label{
        opacity: 0;
        visibility: hidden;
        margin-bottom: -20px;
        transform: translateY(-3.5rem) translateX(3.5rem);
    }
`;

export const FooterDivSubFormEmail = styled.input`
    width: 70vh;
    border: none;
    outline: none;
    color: #0b30aa;
    margin-left: 25px;
    font-size: 1.1rem;
    transition: all .5s;
    padding: 1.5rem 2rem;
    background-color: transparent;
    box-shadow: 1px 1px 1px 1px black;
    box-shadow: 2px 2px 2px 2px black;
    transform: skewX(-10deg) skewY(1deg);

    
    &:not(:focus){
        border-bottom: 2px solid #0b30aa;
    }

    &:focus{
        border-bottom: 2px solid green;
        box-shadow: 2px 2px 2px 2px black;
        transform: skewX(-10deg) skewY(1deg);
    }

    &:focus:invalid{
        border-bottom: 2px solid red;
        box-shadow: 2px 2px 2px 2px black;
        transform: skewX(-10deg) skewY(1deg);
    }
`;


export const FooterDivSubFormBtn = styled.button`
    font-weight: 500;
    font-size: 1.1rem;
    padding: 1rem 1rem;
    border-radius: 100px;
    text-transform: capitalize;
    background-color: #0b30aa;
    transition: .5s ease-in-out;
    border: 2px solid transparent;
    box-shadow: 2px 2px 2px 2px black;
    transform: skewX(-15deg) skewY(1deg);

    
`;

export const FooterDivLinkCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const FooterDivAbout = styled.div`
    top: 25px;
    left: 100px;
    display: flex;
    position: absolute;
    flex-direction: column;
`;

export const FooterDivAboutH1 = styled.h1`
    font-size: 1.2rem;
`;

export const FooterDivAboutText = styled.div`
    font-size: 1rem;
    word-wrap: break-word;
`;

export const FooterDivContact = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    flex-direction: column;
`;

export const FooterDivContactH1 = styled.h1`
    font-size: 1.2rem;
`;

export const FooterDivContactUl = styled.ul`
    display: flex;
    font-size: 1rem;
    list-style: none;
    word-wrap: break-word;
    flex-direction: column;
`;

export const FooterDivContactLi = styled.li`
    padding: 1rem ;
    text-align: left;
    display: inline-block;
    
    svg{
        width: 20px;
        margin-right: 20px;
    }
`;

export const FooterDivContactLiA = styled.a`
    color: aqua;
    cursor: pointer;
    text-decoration: none;
`;

export const FooterInfo =styled.div`
    top: 25px;
    right: 100px;
    text-align: left;
    position: absolute;
    display: inline-block;
`;

export const FooterUlInfoH1 =styled.h1`
    font-size: 1.2rem;
`;

export const FooterInfoUl =styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const FooterUlInfoLi =styled.li`
    color: aqua;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    display: inline-block;
`;


