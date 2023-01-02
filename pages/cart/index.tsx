import { Grid, Box, Typography, Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import emptyCart from '../../assets/image/cart/emptyCart.png'

type Props = {}

const index = (props: Props) => {
  return (
    <Grid container display={"flex"} padding={5} direction="column" alignItems="center" >
      <Grid item >
        <Image width={300} src={emptyCart} alt={''} />
      </Grid>
      <Grid item display={"flex"} alignItems={"center"} direction="column">
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
  )
}
export default index