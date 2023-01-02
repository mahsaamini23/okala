import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid } from '@mui/material';
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import checkedIcon from "../../../../assets/image/main/header/Address/checked.icon.svg"
import editIcon from "../../../../assets/image/main/header/Address/Edit.icon.svg"
import deleteIcon from "../../../../assets/image/main/header/Address/Delete.icon.svg"
import Image from 'next/image';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    width: "848px",
    height: "588px",
    padding: "24px",
    borderRadius: "12px",
    bgcolor: "#fff",
};

type props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}
export default function Address({ open, setOpen }: props) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box position="relative">
                        <Typography id="modal-modal-title" variant="h6" component="h6"
                            sx={{
                                ["&::before"]: {
                                    content: "''",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginLeft: "10px",
                                    height: "20px",
                                    borderLeft: "4px solid #7cc8cc",
                                    borderRadius: "100px",
                                }
                            }} >
                            انتخاب آدرس
                        </Typography>
                        <List
                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding dir='rtl' sx={{ flexDirection: "column", alignItems: "start", background: "rgba(224, 242, 244, 1)", ["&:hover"]: { background: "rgba(176, 222, 224, 1)", fontWeight: 800 }, marginBottom:1 }}>
                                <ListItemButton dir='rtl' sx={{ justifyContent: "space-between", width: "100%", flexDirection: "column" }}>
                                    <Grid container flexDirection={"row"}>
                                        <ListItemIcon sx={{ minWidth: "40px" }}>
                                            <Image src={checkedIcon} alt={''} ></Image>
                                        </ListItemIcon>
                                        <Typography>
                                            منطقه ۹، استاد معین، شهید لشکری، آزادی نرسیده به آزادی
                                            - واحد 21
                                            - پلاک 12
                                        </Typography>
                                    </Grid>
                                    <Grid container flexDirection={"row"} justifyContent="space-between" marginTop={5}>
                                        <Grid xs={1} alignSelf="center" justifyContent={"end"}>
                                            <Typography variant={"caption"} fontSize={16}>
                                                09385767575
                                            </Typography>
                                        </Grid>
                                        <Grid xs={4} >
                                            <IconButton size='large' sx={{ background: "white", margin: 2 }}>
                                                <Image src={editIcon} alt={''}></Image>
                                            </IconButton>
                                            <IconButton size='large' sx={{ background: "white" }}>
                                                <Image src={deleteIcon} alt={''}></Image>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding dir='rtl' sx={{ flexDirection: "column", alignItems: "start", ["&:hover"]: { fontWeight: 800 } }}>
                                <ListItemButton dir='rtl' sx={{ justifyContent: "space-between", width: "100%", flexDirection: "column" }}>
                                    <Grid container flexDirection={"row"}>
                                        <ListItemIcon sx={{ minWidth: "40px" }}>
                                            <Image src={checkedIcon} alt={''} ></Image>
                                        </ListItemIcon>
                                        <Typography>
                                            منطقه ۹، استاد معین، شهید لشکری، آزادی نرسیده به آزادی
                                            - واحد 21
                                            - پلاک 12
                                        </Typography>
                                    </Grid>
                                    <Grid container flexDirection={"row"} justifyContent="space-between" marginTop={5}>
                                        <Grid xs={1} alignSelf="center" justifyContent={"end"}>
                                            <Typography variant={"caption"} fontSize={16}>
                                                09385767575
                                            </Typography>
                                        </Grid>
                                        <Grid xs={4} >
                                            <IconButton size='large' sx={{ background: "white", margin: 2 }}>
                                                <Image src={editIcon} alt={''}></Image>
                                            </IconButton>
                                            <IconButton size='large' sx={{ background: "white" }}>
                                                <Image src={deleteIcon} alt={''}></Image>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>

                        </List>
                        <Divider />
                        <Grid position="absolute" display="flex" justifyContent="end" left={10} top ={500} >
                            <Button
                                onClick ={handleClose}
                                sx={{
                                    border: "1px solid rgba(175, 175, 175, 1)",
                                    color: "rgba(240, 20, 54, 1)",
                                    borderRadius: 2, marginLeft: 2,
                                    paddingX: 4,
                                    ["&:hover"]: { bgcolor: "rgba(240, 20, 54, 0.1)" }
                                }}>
                                بستن
                            </Button>
                            <Button
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(240, 20, 54, 1)",
                                    borderRadius: 2,
                                    paddingX: 4,
                                    ["&:hover"]: { bgcolor: "rgba(230, 20, 54, 1)" }
                                }}>
                                + افزودن ادرس جدید
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}