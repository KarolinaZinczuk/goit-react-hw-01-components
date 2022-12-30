import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend-list}>
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
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        })
    ),
};

export default FriendList;