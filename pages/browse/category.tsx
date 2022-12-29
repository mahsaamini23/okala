import {useState} from "react";
import { GetStaticPaths } from "next";

import BrandFilter from "../../component/filter/BrandFilter/BrandFilter";
import PriceFilter from "../../component/filter/PriceFilter/PriceFilter";
import AvailableFilter from "../../component/filter/AvailableFilter/AvailableFilter";
import AllFilter from "../../component/filter/AllFilters/AllFilters";
import Products from "../../component/filter/Products/Products";
import Header from '../../component/Layout/Header/header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

interface stateInterface {
    showAllFilter: boolean,
    setShowAllFilter: (value : boolean) => void,
}

const Categories =(): JSX.Element=>{
    const [showAllFilter, setShowAllFilter] = useState<boolean>(false)
    return(
        <Grid bgcolor={'#fafafa'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Container maxWidth="lg">
      <Header />
      <Grid mt={3} mb={4} mx={'auto'} px={3} bgcolor={'#fafafa'}>
            <Grid container item mb={4} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'caption'}>نام فروشگاه</Typography>
                <Typography variant={'caption'}>تعداد کالا</Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'space-between'} gap={'15px'}>
                <Grid mb={3} height={'700px'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                    <AllFilter style={{boxShadow:"0px 2px rgb(22 22 22 / 4%)"}} showAllFilter={showAllFilter} setShowAllFilter={setShowAllFilter}/>
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

        </Grid>
      </Container>
    </Grid>
        
    )
}

export default Categories;

