import * as React from "react";
import {useState} from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SimpleAccordion() {
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const handleShowDetail=()=>{
        setShowDetails(current => !current)
    }
    return (
        <Grid pb={3}  sx={{backgroundColor:{xs:'#fff', md:'#fafafa'}, paddingX:{xs:'16px', md:'0'}}} my={2}>
            <Grid>
                {showDetails?
                <Grid pt={2} display={'flex'} justifyContent={{xs:'space-between', md:'center'}} alignItems={'center'}>
                    <Typography sx={{typography: {xs:'caption', md:'subtitle2'}}}>بستن</Typography>
                    <IconButton onClick={handleShowDetail}>
                        <KeyboardArrowUpIcon/>
                    </IconButton>
                </Grid>
                :
                <Grid pt={2} display={'flex'} justifyContent={{xs:'space-between', md:'center'}} alignItems={'center'}>
                    <Typography sx={{typography: {xs:'caption', md:'subtitle2'}}}>فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران</Typography>
                    <IconButton onClick={handleShowDetail}>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </Grid>
                }
            </Grid>
            <Grid display={showDetails ? 'block' : 'none'} mb={5}>
                <Typography my={2} sx={{typography: {xs:'subtitle1', md:'h2'}}}>
                فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران
                </Typography>
                <Typography sx={{typography: {xs:'caption', md:'subtitle2'}}}>
                        شرکت اکالا (توسعه تجارت الکترونک کوروش) یکی از زیرمجموعه‌های
                        هولدینگ بزرگ گروه صنعتی گلرنگ است که به عنوان بزرگ‌ترین سوپرمارکت
                        اینترنتی در ایران فعالیت می‌کند .کالاهایی که از طریق اکالا به فروش
                        می‌رسند در دسته‌بندی‌های متنوع مواد غذایی، نوشیدنی‌ها، خواروبار،
                        محصولات آرایشی و بهداشتی، میوه و سبزیجات، ابزار و ملزومات، لوازم
                        تحریر و لوازم اداری، محصولات مادر و کودک و پوشاک طبقه‌بندی می‌شوند
                        که با تخفیف‌های شگفت‌انگیز و حتی تا 50% تخفیف به فروش می‌رسند.
                        <br />
                        این کالاها از فروشگاه های متنوعی به فروش می‌رسند. این مجموعه‌ها
                        عبارت اند از:
                        <br />• فروشگاه‌های زنجیره‌ای افق کوروش
                        <br />• اُمارکت (با تنوع بیش از 5000 کالا)
                        <br />• اُبیزینس (فروش عمده محصولات)
                        <br />• هایپرفامیلی <br />
                        از بین این مجموعه‌ها، اُمارکت و اُبیزینس در تهران و کرج و
                        هایپرفامیلی در تهران و برخی کلان‌شهرها خدمات‌رسانی می‌کنند. اما
                        فروشگاه‌های زنجیره‌ای افق کوروش در بیش از 220 شهر ایران از طریق
                        اپلیکیشن و وبسایت اکالا به مشتریان خدمت رسانی میکند.
                        <br />
                        کاربران می‌توانند در 7 روز هفته و در 24 ساعت شبانه روز، خرید و
                        سفارش‌های خود را ثبت کنند. مشتریان می‌توانند پیگیری سفارش‌ها و
                        خریدهای خود و هرگونه انتقاد و پیشنهاد از طریق تیم پشتیبانی و شماره
                        تماس 1536 انجام دهند.
                </Typography>
            </Grid>
        </Grid>
    )
}