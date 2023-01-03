import { Grid } from '@mui/material'
import React from 'react'
import StoreCards from '../../component/main/StoreCards/StoreCards'

type Props = {}

const index = (props: Props) => {
    return (
        <Grid display={"flex"} width={"100%"} padding={5} justifyContent="center">
            <StoreCards withButton={false} />
        </Grid>
    )
}

export default index