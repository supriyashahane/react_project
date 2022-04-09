import { useLocation } from 'react-router-dom';

// project imports
import Profile from './Profile';

// ==============================|| PROFILE 3 ||============================== //

const Profile3 = () => {
    const location = useLocation();
    console.log(location.state);

    return <Profile />;
};

export default Profile3;
