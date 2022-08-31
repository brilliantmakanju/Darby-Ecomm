import { faArrowCircleDown, faArrowLeft, faArrowRight, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { ProductPeakSection, ProductPeakSectionBtn, ProductPeakSectionBtnA, ProductPeakSectionCart, ProductPeakSectionColorCont, ProductPeakSectionColorH4, ProductPeakSectionColorLi, ProductPeakSectionColorUl, ProductPeakSectionHeart, ProductPeakSectionSizeCont, ProductPeakSectionSizeH4, ProductPeakSectionSizeLi, ProductPeakSectionSizeUl, ProductsPeakSectionCard, ProductsPeakSectionCardImg, ProductsPeakSectionCardImgCont, ProductsPeakSectionCardInfo, ProductsPeakSectionCardInfoH1, ProductsPeakSectionCardInfoPrice, ProductsPeakSectionCardPagination, ProductsPeakSectionCardPaginationNumb, ProductsPeakSectionCardPaginationNumbActive, ProductsPeakSectionCardPaginationNumbUnActive, ProductsPeakSectionCardPaginationPrev, ProductsPeakSectionCardPaginationRight, ProductsPeakSectionCont, ProductsPeakSectionContRow, ProductsPeakSectionText, ProductsPeakSectionTextCont } from '../../StylingComp/Home/ProductPeak'

const ProductPeak = () => {

    const products = [
        {
            id:"1",
            url: "assest/Shoe2.jpg",
            name: "Shoe",
            color: [
                "red",
                "gray"
            ]

        },
        {
            id:'2',
            url: "assest/Shoe.jpg",
            name: "Camera",
            color: [
                "yellow",
                "blue"
            ]
        }
        // {
        //     url: "assest/Shoe3.jpg",
        //     name: "Cloth",
        //     color: "red"
        //     // ""
        // },
        // {
        //     url: "assest/Shoe4.jpg",
        //     name: "Sneakers",
        //     color: "orange"
        //     // ""
        // },
        // {
        //     url: "assest/Shoe.jpg",
        //     name: "len",
        //     color: "yellow"
        //     // ""
        // },
        // {
        //     url: "assest/Shoe2.jpg",
        //     name: "Nike Shoe",
        //     color: "lightblue"
        //     // ""
        // },
        // {
        //     url: "assest/Shoe4.jpg",
        //     name: "Sneakers",
        //     color: "green"
        //     // ""
        // },
        // {
        //     url: "assest/p3.png",
        //     name: "Nike Cloth",
        //     color: "lightgreen"
        //     // ""
        // },
        // {
        //     url: "assest/Shoe2.jpg",
        //     name: "Sneakers",
        //     color: "white"
        //     // ""
        // },
        // {
        //     url: "assest/p6.png",
        //     name: "Nike Cloth",
        //     color: "black"
        //     // ""
        // }
    ]

    const GetColor = (color) => {

        let colour = 0

        for (let i = 0; i < color.length; i++) {
            // let colour = color[i]
            return color[i]
        }
        return 1
    }

    return (
        <ProductPeakSection >
            {/* MTNHyNetFlex */}
            <ProductsPeakSectionTextCont>
                <ProductsPeakSectionText>
                    Shoes
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    Cloth
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    Men
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    women
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    kids
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    Sport
                </ProductsPeakSectionText>
                <ProductsPeakSectionText>
                    accessories
                </ProductsPeakSectionText>
                {/* <ProductsPeakSectionText>
                    kitchen utlitiy
                </ProductsPeakSectionText> */}
                {/* <ProductsPeakSectionText>
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                </ProductsPeakSectionText> */}
            </ProductsPeakSectionTextCont>
            <ProductsPeakSectionCont>
                <ProductsPeakSectionContRow>
                    {products.map((product) => (
                        <ProductsPeakSectionCard key={product.id}>
                            <ProductsPeakSectionCardImgCont>
                                <ProductsPeakSectionCardImg src={product.url} />
                            </ProductsPeakSectionCardImgCont>
                            <ProductPeakSectionHeart>
                                <FontAwesomeIcon icon={faHeart} />
                            </ProductPeakSectionHeart>
                            <ProductPeakSectionCart>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </ProductPeakSectionCart>
                            <ProductsPeakSectionCardInfo>
                                <ProductsPeakSectionCardInfoH1>
                                    {product.name}
                                </ProductsPeakSectionCardInfoH1>
                                <ProductsPeakSectionCardInfoPrice>
                                    $10.09
                                </ProductsPeakSectionCardInfoPrice>
                                <ProductPeakSectionSizeCont>
                                    <ProductPeakSectionSizeH4>
                                        Size
                                    </ProductPeakSectionSizeH4>
                                    <ProductPeakSectionSizeUl>
                                        <ProductPeakSectionSizeLi>
                                            XS
                                        </ProductPeakSectionSizeLi>
                                        <ProductPeakSectionSizeLi>
                                            S
                                        </ProductPeakSectionSizeLi>
                                        <ProductPeakSectionSizeLi>
                                            M
                                        </ProductPeakSectionSizeLi>
                                        <ProductPeakSectionSizeLi>
                                            L
                                        </ProductPeakSectionSizeLi>
                                        <ProductPeakSectionSizeLi>
                                            XL
                                        </ProductPeakSectionSizeLi>
                                    </ProductPeakSectionSizeUl>
                                </ProductPeakSectionSizeCont>
                                <ProductPeakSectionColorCont>
                                    <ProductPeakSectionColorH4>
                                        Color
                                    </ProductPeakSectionColorH4>
                                    <ProductPeakSectionColorUl>
                                        <ProductPeakSectionColorLi Color={product.color[1]} />
                                    </ProductPeakSectionColorUl>
                                </ProductPeakSectionColorCont>
                                <ProductPeakSectionBtn>
                                    <ProductPeakSectionBtnA>
                                        Order Now
                                    </ProductPeakSectionBtnA>
                                </ProductPeakSectionBtn>
                            </ProductsPeakSectionCardInfo>
                        </ProductsPeakSectionCard>
                    ))}
                </ProductsPeakSectionContRow>
                <ProductsPeakSectionCardPagination>
                    <ProductsPeakSectionCardPaginationPrev>
                        <span style={{ fontWeight: '1000' }}>&#x2039; </span>Prev
                    </ProductsPeakSectionCardPaginationPrev>
                    <ProductsPeakSectionCardPaginationNumb>
                        <ProductsPeakSectionCardPaginationNumbUnActive>
                            1
                        </ProductsPeakSectionCardPaginationNumbUnActive>
                        <ProductsPeakSectionCardPaginationNumbActive>
                            2
                        </ProductsPeakSectionCardPaginationNumbActive>

                    </ProductsPeakSectionCardPaginationNumb>
                    <ProductsPeakSectionCardPaginationRight>
                        Next <span style={{ fontWeight: '1000' }}>&#x203A; </span>
                    </ProductsPeakSectionCardPaginationRight>
                </ProductsPeakSectionCardPagination>
            </ProductsPeakSectionCont>
        </ProductPeakSection>
    )
}

export default ProductPeak