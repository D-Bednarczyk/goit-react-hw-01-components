import css from './FriendList.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, key }) => {
  return (
    <li className={css.friend} key={key}>
      <span
        style={{ backgroundColor: clsx(isOnline ? 'green' : 'red') }}
        className={css.dot}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <span className="name">{name}</span>
    </li>
  );
};

export const FriendList = props => {
  return (
    <>
      <ul className={css.ullist}>
        {props.friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendListItem>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
