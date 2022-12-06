import React from "react";
import Card from '@mui/material/Card';
import Image from "next/image";

type Props={
    image:'string',
    id:'number',
}

const CardAdsSlider=({id, image}:Props)=>{
    return(
        <Card key={id}>
            <Image src={image} alt='ads slider'/>
        </Card>
    )
}

export default CardAdsSlider;