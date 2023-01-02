import {useState, useEffect } from "react";

import { getProductList } from "../../api/api";

import BrandFilter from "../../component/filter/BrandFilter/BrandFilter";
import PriceFilter from "../../component/filter/PriceFilter/PriceFilter";
import SwitchFilter from "../../component/filter/SwitchFilter/SwitchFilter";
import AllFilter from "../../component/filter/AllFilters/AllFilters";
import Products from "../../component/filter/Products/Products";
import Filter from "../../component/filterMobile/Filter/Filter";
import CategoryFilter from "../../component/filter/CategoryFilter/CategoryFilter";
import ShowBased from "../../component/filterMobile/Show‌‌Based/ShowBased";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MobileAllFilters from "../../component/filterMobile/MobileAllFilters/MobileAllFilters";

const Categories =(): JSX.Element=>{
    //logic for desktop
    const [showAllFilter, setShowAllFilter] = useState<boolean>(false)
    const [productsList, setProductsList] = useState([])
    //get productList
    useEffect(() => { getProductList().then(res => {
        console.log(res);
        setProductsList(res.data)
    })}, []);
    // console.log(productsList)


    // logic for mobile
    const [openShowBased, setOpenShowBased] = useState<boolean>(false)
    const [openAllFilters, setOpenAllFilters] = useState<boolean>(false)
    const [openCategory, setOpenCategory] = useState<boolean>(false)
    const [openBrand, setOpenBrand] = useState<boolean>(false)

    return(
        <Grid>
            {/* content for desktop */}
            <Grid pt={2} mb={4} mx={'auto'} px={4} bgcolor={'#fafafa'} sx={{display:{xs:'none', md:'block'}}}>
                <Grid container item pb={4} display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'caption'}>نام فروشگاه</Typography>
                    <Typography variant={'caption'}>تعداد کالا</Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'space-between'} gap={'15px'}>
                    <Grid mb={3} width={'300px'} height={'700px'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                        <AllFilter showAllFilter={showAllFilter} setShowAllFilter={setShowAllFilter}/>
                        <BrandFilter setShowAllFilter={setShowAllFilter}/>
                        <SwitchFilter/>
                        <PriceFilter setShowAllFilter={setShowAllFilter}/>
                    </Grid>
                    <Grid mb={2} container item display={'flex'} flexDirection={'column'}
                    bgcolor={'#fff'} borderRadius={'4px'} padding={'25px 16px'} boxShadow={'0px 2px 10px 5px #e9e9e9'}
                    >
                        <Products/>
                    </Grid>
                </Grid>
            </Grid>
            {/* content for mobile */}
            <Grid mt={3} sx={{display:{xs:'block',md:'none'}}}>
                <ShowBased setOpenShowBased={setOpenShowBased} setOpenAllFilters={setOpenAllFilters}/>
                <Filter header={"فیلترها"} title={"حذف همه فیلترها"} openFilter={openAllFilters} setOpenFilter={setOpenAllFilters} nameBtn={"اعمال فیلتر"} children={<MobileAllFilters setOpenCategory={setOpenCategory} setOpenBrand={setOpenBrand}/>}/>
                <Filter header={"دسته بندی نتایج"} title={"حذف فیلتر"} openFilter={openCategory} setOpenFilter={setOpenCategory} nameBtn={"ثبت فیلتر"} children={<CategoryFilter/>}/>
                <Filter header={"برند"} title={"حذف فیلتر"} openFilter={openBrand} setOpenFilter={setOpenBrand} nameBtn={"ثبت فیلتر"} children={<BrandFilter/>}/>
            </Grid>
        </Grid>
    )
}

export default Categories;

