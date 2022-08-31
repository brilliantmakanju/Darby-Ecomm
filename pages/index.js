import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import AboutFeature from '../component/Home/AboutFeature'
import Header from '../component/Home/Header'
import ProductPeak from '../component/Home/ProductPeak'


export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <Header />
      <main>
        <ProductPeak />
        <AboutFeature />
      </main>
      
    </Fragment>
  )
}
