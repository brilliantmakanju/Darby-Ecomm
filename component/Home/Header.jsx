import Link from 'next/link'
import React from 'react'
import { HomeTop, HomeTopH1Cont, HomeTopH1Main, HomeTopH1Sub, HomeTopH1Sup, HomeTopLogo, HomeTopLogoImg, HomeTopMainBtn, HomeTopMainBtnCont, HomeTopMainSearch, HomeTopMainSearchBtn } from '../../StylingComp/Home/Header'

const Header = () => {
    return (
        <HomeTop>
            <HomeTopLogo>
                <HomeTopLogoImg src='assest/Carousel/shoe9.png' alt='Logo' />
            </HomeTopLogo>

            <HomeTopH1Cont>
                <HomeTopH1Main >
                    <HomeTopH1Sup>
                        Shopping
                    </HomeTopH1Sup>
                    <HomeTopH1Sub>
                        be part of life
                    </HomeTopH1Sub>
                </HomeTopH1Main>

                <HomeTopMainBtnCont >
                    {/* <HomeTopMainSearch type='search' />
                        <HomeTopMainSearchBtn>Search</HomeTopMainSearchBtn> */}
                    <Link href='#'>
                        <HomeTopMainBtn>
                            Time to shop
                        </HomeTopMainBtn>
                    </Link>

                    <Link href='#'>
                        <HomeTopMainBtn>
                            Signup Now
                        </HomeTopMainBtn>
                    </Link>
                </HomeTopMainBtnCont>


            </HomeTopH1Cont>
        </HomeTop>
    )
}

export default Header