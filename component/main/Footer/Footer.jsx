import { Grid, Typography } from "@mui/material";
import FooterCards from "./FooterCards/FooterCards";
import FooterIcons from "./FooterIcons/FooterIcons";

const Footer = () => {
    return (
        <Grid xs={12} container sx={{ gap: '20px', marginTop: '30px' }}>
            <Grid item xs={12} md={3}>
                <Grid>
                    <Typography variant='h1'>راه های ارتباطی</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2' sx={{ marginTop: '25px' }}>تلفن پشتیبانی : 1536</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>آدرس: خیابان احمد قصیر (بخارست)، خیابان پانزدهم غربی (احمدیان)، پلاک 11،
                        طبقه 3</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>ایمیل: info@okala.com</Typography>
                </Grid>
                <Grid>
                <FooterIcons/>
                </Grid>
            </Grid>
            <Grid item xs={5} md={2}>
                <Grid>
                    <Typography variant='h1'>اکالا</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2' sx={{ marginTop: '25px' }}>بلاگ</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>
                        درباره اکالا</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>تماس با اکالا</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>
                        اکالا رنک
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={5} md={3}>
                <Grid>
                    <Typography variant='h1'>خدمات مشتریان</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2' sx={{ marginTop: '25px' }}>حمل و نقل</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>
                        سوالات متداول</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>شرایط مرجوعی کالا</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h2'>حریم خصوصی</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <FooterCards></FooterCards>
            </Grid>
        </Grid>
    )
}
export default Footer