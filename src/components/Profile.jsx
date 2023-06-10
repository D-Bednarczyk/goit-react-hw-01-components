import css from 'Profile.module.css';

export const Profile = props => {
  return (
    <>
      <div className={css.profile}>
        <div className="description">
          <img className={css.avatar} src={props.avatar} alt="User avatar" />
          <p className={css.name}>{props.username}</p>
          <p className={css.mediatag}>{props.tag}</p>
          <p className={css.location}>{props.location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.litem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{props.stats.followers}</span>
          </li>
          <li className={css.litem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{props.stats.views}</span>
          </li>
          <li className={css.litem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
