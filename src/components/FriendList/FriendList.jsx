import PropTypes from "prop-types";

const FriendList = ({ avatar, name, isOnline });

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
};

export default FriendList;