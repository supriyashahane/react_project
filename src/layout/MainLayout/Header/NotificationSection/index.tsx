import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Chip } from '@mui/material';

// assets
import { IconBell } from '@tabler/icons';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
    const getitem1 = localStorage.getItem('kanha');
    console.log(getitem1);
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = React.useRef<any>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px' }} href="/sample-page">
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                            color: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                                color: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.secondary.light
                            }
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                    >
                        <IconBell stroke={1.5} size="1.8rem" />
                    </Avatar>
                    <Chip
                        label={getitem1}
                        size="small"
                        sx={{
                            bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.warning.dark,
                            color: theme.palette.background.default
                        }}
                        className="test1"
                    />
                </ButtonBase>
            </Box>
        </>
    );
};

export default NotificationSection;
