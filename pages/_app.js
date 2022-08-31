import 'animate.css'
import '../public/Global.css'
import '../public/Animateds.scss'
import { Fragment } from "react";
import Footer from '../component/Home/Footer';
import Head from 'next/head';


export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link href='lovers-quarrel/LoversQuarrel-Regular.ttf' rel='stylesheet' />
            </Head>
            <Component {...pageProps} >
            </Component>
            <Footer />
        </Fragment>
    )
}