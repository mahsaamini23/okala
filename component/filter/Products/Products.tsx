
import { useState } from "react"; 

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductCard from "./ProductCard/ProductCard";


type Item={
    idProduct: number,
    idShop: number,
    idCategory: number,
    idSubCategory: number,
    idBrand: number,
    type: string,
    points: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        avg: number
    },
    image: string|any,
    price: number,
    order: number,
    entity: number,
    title: string,
    date: Date,
    purches:number
}

const Products=({productsList}:any) =>{
    const [filterBtn, setFilterBtn] = useState([{title:'پرفروشترین'}, {title:'بیشترین تخفیف'},{title:'جدیدترین'},{title:'ارزانترین'},{title:'گرانترین'}]);

    return(
        <Grid pb={'16px'}>
            <Grid container display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                    <Grid>
                        <SwapVertIcon sx={{fontSize:25}}/>
                    </Grid>
                    <Grid>
                        <Typography p={'9px'} sx={{fontSize:'12px', color:'rgba(0, 0, 0, 0.87)',}}>نمایش بر اساس :</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        {filterBtn.map((Btn, index) => (
                            <Button  key={index} sx={{
                                fontSize:'12px',
                                '&:hover': {
                                    backgroundColor: '#e0f2f4',
                                    color: '#000',
                                },
                                '&:active': {
                                    backgroundColor:'#e0f2f1',
                                    color:'#02a0a4'
                                }
                                }} 
                            >
                                {Btn.title}
                            </Button>
                        ))}
                    </Grid>
                </Grid>
            </Grid> 
            <Grid my={2} container item display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                {productsList.map((product : Item )=>(
                    <ProductCard image={product.image} price={product.price} title={product.title} order={product.order} />
                ))}
            </Grid>
            <Grid mt={7}>
                <Stack spacing={2} display={'flex'} justifyContent={'center'}>
                    <Pagination count={5} variant="outlined" shape="rounded" sx={{alignSelf:'center'}} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Products;