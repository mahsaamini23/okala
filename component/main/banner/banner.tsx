import * as React from "react";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";

type Props = { image: StaticImageData };

export default function Banner({ image }: Props) {
  return (
    <Box sx={{ borderRadius: 20 }}>
      <Image
        src={image}
        style={{ width: "100%", borderRadius: "20px", height:"50%" }}
        alt="banner"
      />
    </Box>
  );
}
