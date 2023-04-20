import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CatModal from "./CatModal";

export default function DashBoard() {
    const [anchorEl, setAnchorEl] = React.useState();
    const open = Boolean(anchorEl);

    const [active, setActive] = React.useState(false);

    const handleOpen = () =>{
        setActive(true)
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                className="addcat"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Меню
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                ClassName="db"
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleOpen}>Добавити кота</MenuItem>
                <MenuItem onClick={handleClose}>Курс wlkn/usd</MenuItem>
                <MenuItem onClick={handleClose}>Автори</MenuItem>
            </Menu>
            <CatModal active={active} setActive={setActive}/>
        </div>
    );
}