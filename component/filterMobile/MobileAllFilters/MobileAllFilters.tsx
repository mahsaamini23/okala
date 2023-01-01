import * as React from 'react';
import PriceFilter from "../../filter/PriceFilter/PriceFilter";
import SwitchFilter from "../../filter/SwitchFilter/SwitchFilter";
import Accordion from "../Accordion/Accordion";

import Grid from "@mui/material/Grid";

const MobileAllFilters=({setOpenCategory, setOpenBrand}:any) : JSX.Element =>{
    return(
        <Grid mb={10} overflow={'scroll'} sx={{overflowX:'hidden'}}>
            <Accordion title={"دسته بندی"} setOpenAccordion={setOpenCategory}/>
            <Accordion title={"برند"} setOpenAccordion={setOpenBrand}/>
            <PriceFilter/>
            <SwitchFilter/>
        </Grid>
    )
}

export default MobileAllFilters;

