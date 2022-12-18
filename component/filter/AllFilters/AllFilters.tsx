import React,{useState} from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { Typography } from "@mui/material";

const items=[
    {id:1, title:'گلستان'},
    {id:2, title:'اویلا'},
    {id:3, title:'زر'},
    {id:4, title:'حمید'},
]

type props ={
    id:number,
    title:String,
}

interface stateInterface {
    showAllFilter: boolean,
    setShowAllFilter: (value : boolean) => void,
}


const AllFilter =({showAllFilter, setShowAllFilter}:stateInterface) : JSX.Element=>{
    const [state, setState] = useState(items);

    const handleAllDelete =()=>{
        setShowAllFilter(false)
    }

    const handleDelete=(id:number)=>{
        setState(items.filter((item:props) => item.id !== id))
    }

    return(
        <Grid display={showAllFilter ? 'flex' : 'none'} flexDirection={'column'} p={2} bgcolor={'#fff'} boxShadow={'0px 2px rgba(22 22 22 4%) !important'} borderRadius={'4px'}>
            <Grid mb={2} display={'flex'} justifyContent={'space-between'}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'5px'}>
                    <Grid width='4px' height='16px' bgcolor={'#7cc8cc'} borderRadius={'5px'}></Grid>
                    <Grid>
                        <Typography variant={'subtitle2'} fontWeight={'bold'} >فیلترهای اعمال شده</Typography>
                    </Grid>
                </Grid>
                <Typography variant={'caption'} color={'#f01436'} onClick={handleAllDelete}>حذف همه</Typography>
            </Grid>
            <Grid width={'300px'} display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'} gap={'10px'}>
            {state.map((item :props) => (
                <Chip key={item.id} label={item.title} onDelete={()=> handleDelete(item.id)} sx={{paddingLeft:'10px'}} deleteIcon={<ClearIcon sx={{fontSize:10}}/>}/>
            ))}
            </Grid>
        </Grid>
    )
}

export  default AllFilter;