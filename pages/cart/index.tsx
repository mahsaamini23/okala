import { Grid, Box, Typography, Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import emptyCart from '../../assets/image/cart/emptyCart.png'
import { useSelector } from 'react-redux';
import { getShops } from '../../api/api'

import { Shop} from "types/model";

type Props = {}

const index = (props: Props) => {

  //useState
  const [listShop,setListShop] = React.useState<Shop>([{image:'',id:0,subtitle:'',rate:"",title:""}])

  //redux Toolkit
  const total = useSelector((state: any) => state.cart.total)

  React.useEffect(()=>{
    getShops().then(res => setListShop(res.data))
  },[])
  return (
    <>
      {total
        ?
        <Grid container>
          <Grid>
            <Image src={listShop[0].image} alt=""/>
            <Typography> {listShop[0].title}</Typography>
          </Grid>
          <Grid item width={"416px"}>

          </Grid>
        </Grid>

        :
        <Grid container display={"flex"} padding={5} direction="column" alignItems="center" >
          <Grid item >
            <Image width={300} src={emptyCart} alt={''} />
          </Grid>
          <Grid item display={"flex"} alignItems={"center"} flexDirection="column">
            <Typography fontWeight={800}>
              درحال حاضر سبد خریدی ندارید
            </Typography>
            <Typography variant='button' margin={2}>
              می توانید برای مشاهده کالاهای بیشتر به یکی از صفحای زیر بروید
            </Typography>
          </Grid>

          <Grid item>
            <Box display="flex" sx={{ border: "1px solid #e6e6e6" }}>
              <Box paddingX={6} paddingY={1}>
                <Link href={"/#GoToStore"}>
                  <Typography variant={"caption"} color={"#02a0a4"} fontWeight={600}>
                    مشاهده فروشگاه ها
                  </Typography>
                </Link>
              </Box>
              <Divider variant="middle" orientation="vertical" flexItem />
              <Box paddingX={6} paddingY={1}>
                <Link href={"/browse/category"}>
                  <Typography variant={"caption"} color={"#02a0a4"} fontWeight={600}>
                    تخفیف های ویژه
                  </Typography>
                </Link>
              </Box>

            </Box>
          </Grid>

        </Grid>
      }
    </>
  )
}
export default index