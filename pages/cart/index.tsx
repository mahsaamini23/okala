import { Grid, Box, Typography, Divider, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import emptyCart from '../../assets/image/cart/emptyCart.png'
import { useSelector } from 'react-redux';
import { getProductList, getShops } from '../../api/api'

import { Shop } from "types/model";
import ProductCard from '../../component/cart/ProductCart'
import { productListType } from '../../data/ProductList/productList'


const index = () => {

  //useState
  const [listShop, setListShop] = React.useState<Shop>([{ image: '', id: 0, subtitle: '', rate: "", title: "" }])
  const [productsList, setProductsList] = React.useState([])

  //redux Toolkit
  const total = useSelector((state: any) => state.cart.total)
  const cart = useSelector((state: any) => state.cart.cart)

  // get Shops
  React.useEffect(() => {
    getShops().then(res => setListShop(res.data))
  }, [])

  //get productList
  React.useEffect(() => {
    getProductList().then(res => {
      setProductsList(res.data)
    })
  }, []);

  // Product id in cart
  const idProducts = cart?.reduce((ids: any[], item: { id: any }) => [...ids, item.id], [])

  // Total Price
  const totalPrice = productsList.filter((item: any) => idProducts.includes(item.idProduct)).reduce((total, item: productListType) => total + item.price * cart[idProducts.indexOf(item.idProduct)].order, 0)

  // Total Order
  const totalOrder = productsList.filter((item: any) => idProducts.includes(item.idProduct)).reduce((total, item: productListType) => total + item.order * cart[idProducts.indexOf(item.idProduct)].order, 0)

  // Shops
  const idShops = productsList.filter((item: any) => idProducts.includes(item.idProduct)).reduce((idShops: any[], item: productListType) => idShops.includes(item.idShop)? idShops:[...idShops, item.idShop], [])

  console.log(productsList)
  return (
    <Container maxWidth="lg">
      {total
        ?
        <Grid container direction={"row"} justifyContent={"start"}>
            <Grid item display={"flex"} flexGrow={1} flexDirection="column" sx={{ background: "white" }} borderRadius="10px" padding={4} margin={2}>
            {idShops.map(id => {
            return(
              <Box key={"shops"+id}>
              <Box display={"flex"} alignItems={"center"} marginX={3}>
                <Image width={70} src={listShop[id].image} alt="" />
                <Typography marginRight={2}> {listShop[id].title}</Typography>
              </Box>
              {productsList.filter((item: productListType) => (idProducts.includes(item.idProduct) && item.idShop === id)).map((product: productListType) => (
                <Box key={"product"+product.idProduct}>
                  <Box display={"flex"} justifyContent={"center"} width="100%">
                    <ProductCard idProduct={product.idProduct} image={product.image} price={product.price} title={product.title} order={product.order} />
                  </Box>
                  <Divider light />
                </Box>
              ))}
              </Box>
            )})}
            </Grid>
          <Grid item width={"416px"} zIndex={600} sx={{ background: "white" }} borderRadius={2} padding={4} margin={2}>
            {/* Title */}
            <Typography paddingY={2}>
              ???????????? ????????????
            </Typography>
            {/* Total Price */}
            <Box display={"flex"} justifyContent="space-between" paddingY={2}>
              <Typography>
                ?????????? ???????? ?????? ({total.toLocaleString("fa")}????????)
              </Typography>
              <Typography>
                {totalPrice.toLocaleString("fa")}  ????????
              </Typography>
            </Box>
            <Divider light />
            {/* benfit */}
            <Box display={"flex"} justifyContent="space-between" paddingY={2}>
              <Typography>
                ?????? ?????? ???? ?????? ????????
              </Typography>
              <Typography>
                {totalOrder.toLocaleString("fa")} ????????
              </Typography>
            </Box>
            <Divider light />

            <Typography paddingY={2}>
              ?????????? ??????????
            </Typography>
            <Divider light />

            <Box display={"flex"} justifyContent="space-between" paddingY={2}>
              <Typography>
                ???????? ???????? ????????????
              </Typography>
              <Typography>
                {(totalPrice - totalOrder).toLocaleString("fa")} ????????
              </Typography>
            </Box>
            <Button fullWidth  sx={{background:"#f01436", ["&:hover"]:{background:"#e11436"}}}>
              <Typography variant="button" color="white">
              ???????????? ???????? ??????????
              </Typography>

            </Button>
          </Grid>
        </Grid>

        :
        <Grid container display={"flex"} padding={5} direction="column" alignItems="center" >
          <Grid item >
            <Image width={300} src={emptyCart} alt={''} />
          </Grid>
          <Grid item display={"flex"} alignItems={"center"} flexDirection="column">
            <Typography fontWeight={800}>
              ?????????? ???????? ?????? ?????????? ????????????
            </Typography>
            <Typography variant='button' margin={2}>
              ???? ???????????? ???????? ???????????? ?????????????? ?????????? ???? ?????? ???? ?????????? ?????? ??????????
            </Typography>
          </Grid>

          <Grid item>
            <Box display="flex" sx={{ border: "1px solid #e6e6e6" }}>
              <Box paddingX={6} paddingY={1}>
                <Link href={"/#GoToStore"}>
                  <Typography variant={"caption"} color={"#02a0a4"} fontWeight={600}>
                    ???????????? ?????????????? ????
                  </Typography>
                </Link>
              </Box>
              <Divider variant="middle" orientation="vertical" flexItem />
              <Box paddingX={6} paddingY={1}>
                <Link href={"/browse/category"}>
                  <Typography variant={"caption"} color={"#02a0a4"} fontWeight={600}>
                    ?????????? ?????? ????????
                  </Typography>
                </Link>
              </Box>

            </Box>
          </Grid>

        </Grid>
      }
    </Container>
  )
}
export default index