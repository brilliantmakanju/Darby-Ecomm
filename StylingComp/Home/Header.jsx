import React from "react";
import styled from "styled-components";

export const HomeTop = styled.header`
    height: 98vh;
    background-image: linear-gradient( to right bottom , #0000ff81, #80808088) ,url(assest/FormSidePic.jpeg);
    background-size: cover;
    position: relative;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const HomeTopLogo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const HomeTopLogoImg = styled.img`
    height: 100px;
`;

export const HomeTopH1Cont = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);
    `;

export const HomeTopH1Main = styled.h1`
    color: white;
    text-transform: uppercase;
    backface-visibility: hidden;
`;

export const HomeTopH1Sup = styled.span`
    display: block;
    font-size: 2em;
    font-weight: 1000;
    letter-spacing: 28px;
    animation-name: bounceInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;

    @keyframes bounceInLeft {
        0%{
            opacity: 0;
            transform: translateX(-100px);
        }
        80%{
            transform: translateX(10px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const HomeTopH1Sub = styled.span`
    display: block;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 17.5px;
    animation-name: bounceInRight;
    animation-duration: 1s;
    margin-bottom: 30px;

    @keyframes bounceInRight {
        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        80%{
            transform: translateX(-10px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const HomeTopMainSearch = styled.input`
    width: 93vh;
    height: 8vh;
    outline: none;
    font-size: 1.2em;
    font-weight: 700;
    padding-left: 1em;
    padding-right: 7em;
    margin-bottom: 40px;
    border-radius: 100px;
    display: inline-block;
    border: 1px solid blue;
    background-color: transparent;
`;

export const HomeTopMainSearchBtn = styled.button`
    width: 20vh;
    height: 8vh;
    border: 1px solid blue;
    margin-left: -12.1em;
    border-radius: 100px;
`;

export const HomeTopMainBtnCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    user-select: none;
    backface-visibility: hidden;
    justify-content: space-evenly;
`;

export const HomeTopMainBtn = styled.a`
    opacity: 0;
    color: black;
    cursor: pointer;
    padding: 15px 40px;
    border-radius: 100px;
    display: inline-block;
    animation: fadeInUp 1s .75s;
    animation-fill-mode: both;
    text-transform: uppercase;
    background-color: white;
    transition: all .2s ;
    position: relative;

    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,.4);
    }

    &:active{
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0,0,0,.4);
    }

    &::after{
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .5s;
    }

    &:hover::after{
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
`;


