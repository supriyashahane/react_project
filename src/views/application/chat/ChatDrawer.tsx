import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Typography, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import UserList from './UserList';
import AvatarStatus from './AvatarStatus';
import UserAvatar from './UserAvatar';
import MainCard from 'ui-component/cards/MainCard';
import { appDrawerWidth as drawerWidth, gridSpacing } from 'store/constant';
import { DefaultRootStateProps } from 'types';
import { UserProfile } from '_mockApis/user-profile/types';

// assets
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ==============================|| CHAT DRAWER ||============================== //

export interface ChatDrawerProps {
    handleDrawerOpen: () => void;
    openChatDrawer: boolean | undefined;
    setUser: (u: UserProfile) => void;
}

const ChatDrawer = ({ handleDrawerOpen, openChatDrawer, setUser }: ChatDrawerProps) => {
    const theme = useTheme();
    const customization = useSelector((state: DefaultRootStateProps) => state.customization);
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

    // show menu to set current user status
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>();
    const handleClickRightMenu = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleCloseRightMenu = () => {
        setAnchorEl(null);
    };

    // set user status on status menu click
    const [status, setStatus] = React.useState('available');
    const handleRightMenuItemClick = (userStatus: string) => () => {
        setStatus(userStatus);
        handleCloseRightMenu();
    };

    const drawerBG = theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50';

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                zIndex: { xs: 1100, lg: 0 },
                '& .MuiDrawer-paper': {
                    height: matchDownLG ? '100%' : 'auto',
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    position: 'relative',
                    border: 'none',
                    borderRadius: matchDownLG ? 'none' : `${customization.borderRadius}px`
                }
            }}
            variant={matchDownLG ? 'temporary' : 'persistent'}
            anchor="left"
            open={openChatDrawer}
            ModalProps={{ keepMounted: true }}
            onClose={handleDrawerOpen}
        >
            <MainCard
                sx={{
                    bgcolor: matchDownLG ? 'transparent' : drawerBG
                }}
                border={!matchDownLG}
                content={false}
            >
                <Box sx={{ p: 3, pb: 2 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                                <Grid item>
                                    <UserAvatar user={{ online_status: status, avatar: 'avatar-5.png', name: 'User 1' }} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" variant="h4">
                                        John Doe{' '}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={handleClickRightMenu} size="large">
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseRightMenu}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                    >
                                        <MenuItem onClick={handleRightMenuItemClick('available')}>
                                            <AvatarStatus status="available" mr={1} />
                                            Available
                                        </MenuItem>
                                        <MenuItem onClick={handleRightMenuItemClick('do_not_disturb')}>
                                            <AvatarStatus status="do_not_disturb" mr={1} />
                                            Do not disturb
                                        </MenuItem>
                                        <MenuItem onClick={handleRightMenuItemClick('offline')}>
                                            <AvatarStatus status="offline" mr={1} />
                                            Offline
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                id="input-search-header"
                                placeholder="Search Mail"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchTwoToneIcon fontSize="small" />
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
                <PerfectScrollbar
                    style={{
                        overflowX: 'hidden',
                        height: matchDownLG ? 'calc(100vh - 190px)' : 'calc(100vh - 445px)',
                        minHeight: matchDownLG ? 0 : 520
                    }}
                >
                    <Box sx={{ p: 3, pt: 0 }}>
                        <UserList setUser={setUser} />
                    </Box>
                </PerfectScrollbar>
            </MainCard>
        </Drawer>
    );
};

export default ChatDrawer;
