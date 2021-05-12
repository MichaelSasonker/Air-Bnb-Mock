import React from 'react';
import { Link }  from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

const linksURL = ['/signUpPage', '/logInPage', '/signUpAsHostPage']

const options = [
  'Sign Up',
  'Log In',
  'Host your home',
];

const ITEM_HEIGHT = 32;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
        <AccountBoxRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {
          options.map((option, index) => (
            <MenuItem key={option === 'Sign Up'} selected={option} onClick={handleClose}>
              {console.log(option)}
              <Link to={`${linksURL[index]}`}>
                  {option}
              </Link>
            </MenuItem>
            ))
        }
      </Menu>
    </div>
  );
}
