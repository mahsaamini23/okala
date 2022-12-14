import { GetStaticPaths } from "next";
import params from "../../data/CategorySlider/CategorySlider";
import BrandFilter from "../../component/filter/BrandFilter/BrandFilter";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const Categories =()=>{
    return(
        <Grid container mt={3} mb={4} mx={'auto'} px={3} bgcolor={'#fafafa'}>
            <Grid container item mb={4} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'caption'}>نام فروشگاه</Typography>
                <Typography variant={'caption'}>تعداد کالا</Typography>
            </Grid>
            <Grid container item>
                <Grid md={3} height={'700px'}>
                    <BrandFilter/>
                </Grid>
                <Grid md={9}></Grid>
            </Grid>
            <Grid container mt={4} mb={28} bgcolor={'red'}>hello</Grid>
        </Grid>
    )
}

export default Categories;

