import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id}) =>
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
            />
            )}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.string,
            id: PropTypes.number,
        })
    ),
};

export default FriendList;