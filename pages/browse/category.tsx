import { GetStaticPaths } from "next";
import params from "../../data/CategorySlider/CategorySlider";
import BrandFilter from "../../component/store/BrandFilter/BrandFilter";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const Categories =()=>{
    return(
        <Grid container mt={3} mb={4} mx={'auto'} px={3}>
            <Grid container item display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'caption'}>نام فروشگاه</Typography>
                <Typography variant={'caption'}>تعداد کالا</Typography>
            </Grid>
            <Grid container item>
                <Grid md={3} bgcolor={'blue'} height={'700px'}>
                    
                </Grid>
                <Grid md={9}></Grid>
            </Grid>
            <Grid container mt={4} mb={28} bgcolor={'red'}>hello</Grid>
        </Grid>
    )
}

export default Categories;

