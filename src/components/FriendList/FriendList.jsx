import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friend} key={id}>
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
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          ></FriendListItem>
        ))}
      </ul>
    </>
  );
};
