import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CreateCat from "./CreateCat";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CatModal({active,setActive}) {

    const handleClose = () => setActive(false);

    return (
        <div>
            <Modal
                open={active}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                slots={{ backdrop: Backdrop }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center", color:"white"}}>
                        Добав нового кота
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <CreateCat handleClose={handleClose}/>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}