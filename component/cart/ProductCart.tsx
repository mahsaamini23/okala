import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../../Toolkit/slices/cartSlice/cart.slice';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import deleteIcon from '../../assets/image/cart/delete.icon.svg'

type Props = {
    idProduct: number,
    image: string | any,
    price: number,
    title: string,
    order: number,
}

const ProductCard = ({ idProduct, image, price, title, order }: Props) => {

    // Redux Toolkit
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.cart);
    let total = cart.filter((item: { id: number; order: number; }): { id: number; order: number; } | boolean => item.id === idProduct)[0]?.order;

    return (
        <Grid width={'100%'} height={'300px'} px={2} py={4} display={'flex'} flexDirection={'column'} gap={'10px'} border={'1px solid #e9e9e9'}>
            <Image src={image} alt="product" style={{ width: '100px', height: '100px', display: 'flex', alignSelf: 'center' }} />
            <Grid mb={2} position={"relative"} container display={'flex'} alignItems={'flex-end'} justifyContent={"center"}>
                <Box
                    sx={{
                        background: "white",
                        borderRadius: 50,
                        border: "1px solid #f01436"
                    }}
                    component="div"
                    display="flex"
                    right={0}
                    
                >
                    <AddIcon color="error" onClick={() => { dispatch(addProduct(idProduct)) }}/>
                    {total ? <Typography marginX={1}> {total.toLocaleString("fa")}</Typography> : null}
                    {(total === 1) ?
                     <Image onClick={()=>{dispatch(removeProduct(idProduct))}} width={22} src={deleteIcon} alt="" /> : (total > 1 ?
                        <Box display={"flex"} alignItems={"center"}  onClick={()=>{dispatch(removeProduct(idProduct))}}>
                            <RemoveIcon fontSize='small' color={"error"}/>
                        </Box>
                    : null)}
                </Box>
            </Grid>
            <Grid container display={'flex'} justifyContent={'space-between'}>
                <Grid >
                    <Typography variant='subtitle2'>{price.toLocaleString("fa")} ریال</Typography>
                    <Typography variant='caption'> ۱۷۰۰۰</Typography>
                </Grid>
                <Grid width={'25px'} height={'20px'} bgcolor={'#f01436'} color={'#fff'} borderRadius={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant='caption' color={'#fff'} >{order}٪</Typography>
                </Grid>
            </Grid>
            <Typography variant='subtitle2'>{title}</Typography>
        </Grid>
    )
}

export default ProductCard;