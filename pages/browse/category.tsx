import {useState} from "react";
import { GetStaticPaths } from "next";

import BrandFilter from "../../component/filter/BrandFilter/BrandFilter";
import PriceFilter from "../../component/filter/PriceFilter/PriceFilter";
import AllFilter from "../../component/filter/AllFilters/AllFilters";
import Products from "../../component/filter/Products/Products";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface stateInterface {
    showAllFilter: boolean,
    setShowAllFilter: (value : boolean) => void,
}

const Categories =(): JSX.Element=>{
    const [showAllFilter, setShowAllFilter] = useState<boolean>(false)
    return(
        <Grid mt={3} mb={4} mx={'auto'} px={3} bgcolor={'#fafafa'}>
            <Grid container item mb={4} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'caption'}>نام فروشگاه</Typography>
                <Typography variant={'caption'}>تعداد کالا</Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'space-between'} gap={'15px'}>
                <Grid mb={3} height={'700px'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                    <AllFilter showAllFilter={showAllFilter} setShowAllFilter={setShowAllFilter}/>
                    <BrandFilter setShowAllFilter={setShowAllFilter}/>
                    <AvailableFilter setShowAllFilter={setShowAllFilter}/>
                    <PriceFilter setShowAllFilter={setShowAllFilter}/>
                </Grid>
                <Grid container item display={'flex'} flexDirection={'column'}
                bgcolor={'#fff'} borderRadius={'4px'} padding={'25px 16px'}
                >
                    <Products/>
                </Grid>
            </Grid>
            <Grid container mt={4} mb={28}>footer</Grid>
        </Grid>
    )
}

export default Categories;

