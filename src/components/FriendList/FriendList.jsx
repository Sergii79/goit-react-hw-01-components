import { PropTypes } from "prop-types";
import { FriendCard } from "./FrienCard";

export const FriendList = ( { friends }) => {
    return (
        <div>
            <ul className="friend-list"> 
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <FriendCard friend={friend} />
                    </li>
                ))}                   
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    ).isRequired,
};