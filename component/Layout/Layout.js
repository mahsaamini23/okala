
import DownloadApp from './DownloadApp/DownloadApp';
import Description from './Description/describtion';
import Footer from './Footer/Footer';
import Header from './Header/header';
import { ReactNode } from 'react';



export default function Layout({ children}) {

    return (
        <>
            <Header/>
            <main>{children}</main>;
            <Description/>
            <DownloadApp/>
            <Footer/>
        </>
    )
}