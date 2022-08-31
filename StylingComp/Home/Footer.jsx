import styled from "styled-components";


export const FooterCont = styled.footer`
    padding: 10rem 0;
    font-size: 1.4rem;
    background-color: #1f1c1c;
`;

export const FooterDivSubCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
`;

export const FooterDivSubLogo = styled.div`
    font-size: 1em;
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
        transition: all 1s;
        margin-bottom: 2px;
        transform: translateY(.5px) translateX(2rem);
    }
    
    input:placeholder-shown + label{
        opacity: 0;
        visibility: hidden;
        margin-bottom: -20px;
        transform: translateY(-3.5rem) translateX(2rem);
    }
`;

export const FooterDivSubFormEmail = styled.input`
    width: 70vh;
    border: none;
    outline: none;
    color: #0b30aa;
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
    align-items: center;
    justify-content: center;
`;

export const FooterDivAbout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterDivAboutH1 = styled.h1`
    font-size: 1.2rem;
`;

export const FooterDivAboutText = styled.div`
    font-size: 1rem;
    word-wrap: break-word;
`;

export const FooterDivContact = styled.div``;

export const FooterUlInfo =styled.ul``;