
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CategoryFilter =() : JSX.Element =>{
    const [list, setList] = useState([{id:1, title:'تخم مرغ'},{id:2, title:'ماهی'},{id:3, title:'گوشت گاو و گوساله'},{id:4, title:'گوشت مرغ'}])
    return(
        <Grid p={2} boxShadow={'0px 2px 10px 5px #e9e9e9'} bgcolor={'#fff'} borderRadius={'4px'}>
            <Grid pr={2}>
                <KeyboardArrowLeftIcon sx={{fontSize:20}}/>
                <Typography variant='subtitle2'>پروتیین</Typography>
            </Grid>
            {list.map((item)=>(
                <Grid key={item.id} pr={2}>
                    <KeyboardArrowLeftIcon  sx={{fontSize:20}} />
                    <Typography variant='subtitle2'>{item.title}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}

export default CategoryFilter;