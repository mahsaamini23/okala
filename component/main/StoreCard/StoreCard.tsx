import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const bull = (
<Box
component="span"
sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
>
•
</Box>
);

export default function BasicCard() {
return (
<Card sx={{ minWidth: 275 }}>
    <CardContent>
    <Grid item xs={2}>
        <Card> 
        <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
        >
            افق کوروش | مفتح افق کوروش اصفهان
        </Typography>
        </Card>
    </Grid>
    <Grid item xs={2}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        افق کوروش | مفتح افق کوروش اصفهان
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        افق کوروش | مفتح افق کوروش اصفهان
        </Typography>
        <Typography variant="h5" component="div">
        ارسال سریع
        </Typography>
    </Grid>
    </CardContent>
    <CardActions>
    <Button size="small">Learn More</Button>
    </CardActions>
</Card>
);
}
