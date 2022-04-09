// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/Vs Services.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

function Logo() {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
         *
         */
        <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
    );
}

export default Logo;
