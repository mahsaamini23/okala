
import DownloadApp from './DownloadApp/DownloadApp';
import Description from './Description/describtion';
import Footer from './Footer/Footer';
import Header from './Header/header';
import {Container, Divider } from '@mui/material';


export default function Layout({ children }: any) {

    return (
        <>
            <Header />
            <main>{children}</main>
            <Divider/>
            <Container maxWidth="lg">
                <Description />
                <DownloadApp />
                <Footer />
            </Container>
        </>
    )
}