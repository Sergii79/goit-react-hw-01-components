import { PropTypes } from "prop-types";
import { FriendCard } from "./FrienCard";
import { Section, } from "./Friend.styles";

export const FriendList = ( { friends }) => {
    return (
        <Section>
            <ul className="friend-list"> 
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <FriendCard friend={friend} />
                    </li>
                ))}                   
            </ul>
        </Section>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    ).isRequired,
};