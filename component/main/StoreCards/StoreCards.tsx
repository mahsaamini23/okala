import * as React from 'react';
import StoreCard from "./StoreCard/StoreCard";
import infoStoreCards from "../../../data/StoreCards/StoreCards";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import StoreIcon from '@mui/icons-material/Store';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Shop } from "types/model";
import { getShops } from '../../../api/api';
import { useRouter } from 'next/navigation';

type Props = {
    withButton: boolean
}

const StoreCards = ({ withButton }: Props): JSX.Element => {
    // useState
    const [listShop, setListShop] = React.useState<Shop>([{ image: '', id: 0, subtitle: '', rate: "", title: "" }])

    // Router
    const router = useRouter();

    // get Shops
    React.useEffect(() => {
        getShops().then(res => setListShop(res.data))
    }, [])

    return (
        <Grid container>
            <Button id="GoToStore"></Button>
            <Grid container item xs={12}>
                <Grid item xs={1} md={0.25}>
                    <StoreIcon />
                </Grid>
                <Grid item xs={11} md={11.75}>
                    <Typography variant='h1'>فروشگاه‌های محله شما</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'secondary.main' }}>۳ فروشگاه</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent={!withButton?"center":""} sx={{ gap: { xs: '10px', md: '20px' }, marginTop: '20px', marginBottom: { xs: '0', md: '30px' } }} >
                {listShop.map(item => (
                    <StoreCard key={item.id} id={item.id} image={item.image} title={item.title} rate={item.rate} subtitle={item.subtitle}></StoreCard>
                ))}
            </Grid>
            {withButton ? <Grid item md={12} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginTop: '20px' }}>
                <Button
                 sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '12px 40px', fontWeight: 'bold', margin: '0 px' }}
                 onClick={()=> router.push("/all-stores")}
                 >
                    <Typography>مشاهده همه فروشگاه ها</Typography>
                    <ArrowBackIosIcon sx={{ fontSize: "small", color: '#757575' }} />
                </Button>
            </Grid> : null}
        </Grid>
    )
}
export default StoreCards