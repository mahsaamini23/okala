import {useState} from "react";
import { brand } from "../../../data/Filter/Filter";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const BrandFilter=()=>{
    const [showBrands, setShowBrand] = useState(true)
    const [searchBrand, SetSearchBrand] = useState('')

    const handleDropDown =()=>{
        setShowBrand(current => !current)
    }

    const handleSearchBrand =(e :React.ChangeEvent<HTMLInputElement>)=>{
        SetSearchBrand(e.target.value)
    }
    return(
        <Grid p={2} boxShadow={'0px 2px rgba(22 22 22 4%) !important'} bgcolor={'#fff'} borderRadius={'12px'}>
            <Grid container item mb={'10px'} height={'33px'} display={'flex'} justifyContent={'space-between'} 
                alignItems={'baseline'} position={'relative'}>
                <Grid>
                    <Typography variant={'subtitle2'} fontWeight={'bold'}>برندهای موجود</Typography>
                </Grid>
                <Grid>
                    <IconButton onClick={handleDropDown}>
                        {showBrands ? 
                        <KeyboardArrowUpIcon/> :
                        <KeyboardArrowDownIcon/>
                        }
                    </IconButton>
                </Grid>
            </Grid>
            <Grid className='scrollbar' container item position={'relative'} display={showBrands ? 'flex' : 'none'} overflow={'scroll'} 
            sx={{overflowX:'hidden', webkitScrollbarCorner:{display:'none'}}}
            >
                <Grid mb={2} px={1}> 
                    <TextField  placeholder="جستجوی نام برند ..." size="small" 
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      fullWidth
                      onChange={handleSearchBrand}
                    />
                </Grid>
                <Grid height={'200px'} width={'280px'}>
                    <Grid display={'flex'} flexWrap={'wrap'} flexDirection={'column'} >
                        {brand.filter(t => searchBrand === "" ? t : t.name.includes(searchBrand)).
                        map(item => (
                        <Grid key={item.id} display={'flex'} justifyContent={'flex-start'} alignItems={'baseline'}>
                            <Grid>
                                <Checkbox/>
                            </Grid>
                            <Grid>
                                <Typography>{item.name}</Typography>
                            </Grid>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BrandFilter;