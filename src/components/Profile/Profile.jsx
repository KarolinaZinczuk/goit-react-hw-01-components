import PropTypes from "prop-types";


const Profile = ({ username, tag, location, avatar, stats });

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.object,
    stats:PropTypes.string  
};

export default Profile;