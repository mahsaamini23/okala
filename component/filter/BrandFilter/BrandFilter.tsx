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
import { items } from "../../main/SearchBar/data/data";


interface stateInterface {
    showAllFilter: boolean,
    setShowAllFilter: (value : boolean) => void,
}

const BrandFilter=({setShowAllFilter}:stateInterface) :JSX.Element=>{

    const [showBrands, setShowBrand] = useState(true)
    const [searchBrand, SetSearchBrand] = useState('')
    const [brands, setBrands] = useState(brand)
    const [filterItem, setFilterItem] = useState([])

    const handleDropDown =()=>{
        setShowBrand(current => !current)
    }

    const handleSearchBrand =(e :React.ChangeEvent<HTMLInputElement>)=>{
        SetSearchBrand(e.target.value)
    }

    const handleCheckBox =(Id:number)=>{

        setShowAllFilter(true)
    }

    return(
        <Grid p={2} boxShadow={'0px 2px rgba(22 22 22 4%) !important'} bgcolor={'#fff'} borderRadius={'4px'}>
            <Grid mb={'10px'} height={'33px'} display={'flex'} justifyContent={'space-between'} 
                alignItems={'baseline'} position={'relative'}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'5px'}>
                    <Grid width='4px' height='16px' bgcolor={'#7cc8cc'} borderRadius={'5px'}></Grid>
                    <Grid>
                        <Typography variant={'subtitle2'} fontWeight={'bold'}>برندهای موجود</Typography>
                    </Grid>
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
            <Grid position={'relative'} display={showBrands ? 'flex' : 'none'} flexDirection={'column'} overflow={'scroll'} 
            style={{
                overflowX:'hidden', 
                // '&::-webkit-scrollbar': { width: '10px', height:'60px' },
                
                }}
            >
                <Grid mb={2}  px={1}> 
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
                        {brands.filter(t => searchBrand === "" ? t : t.name.includes(searchBrand)).
                        map(item => (
                        <Grid key={item.id} display={'flex'} justifyContent={'flex-start'} alignItems={'baseline'}>
                            <Grid>
                                <Checkbox  onChange={()=>handleCheckBox(item.id)}/>
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