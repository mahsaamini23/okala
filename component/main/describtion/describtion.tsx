import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
        
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
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
