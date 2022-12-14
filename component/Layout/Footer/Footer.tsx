import { Container, Grid, Typography } from "@mui/material";
import FooterCards from "./FooterCards/FooterCards";
import FooterIcons from "./FooterIcon/FooterIcons";
import FooterMobile from "./FooterMobile/FooterMobile";

const Footer = () => {
    return (
        <>
            <FooterMobile />
            <Container maxWidth="lg">
                <Grid container sx={{ gap: '20px', marginTop: 'auto' }}>
                    <Grid item xs={12} md={3}>
                        <Grid>
                            <Typography variant='h1'>راه های ارتباطی</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2' sx={{ marginTop: '25px' }}>تلفن پشتیبانی : 1536</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>آدرس: خیابان احمد قصیر (بخارست)، خیابان پانزدهم غربی (احمدیان)، پلاک 11،
                                طبقه 3</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>ایمیل: info@okala.com</Typography>
                        </Grid>
                        <Grid>
                            <FooterIcons />
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <Grid>
                            <Typography variant='h1'>اکالا</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2' sx={{ marginTop: '25px' }}>بلاگ</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>
                                درباره اکالا</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>تماس با اکالا</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>
                                اکالا رنک
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={3}>
                        <Grid>
                            <Typography variant='h1'>خدمات مشتریان</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2' sx={{ marginTop: '25px' }}>حمل و نقل</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>
                                سوالات متداول</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>شرایط مرجوعی کالا</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='subtitle2'>حریم خصوصی</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterCards></FooterCards>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Footer