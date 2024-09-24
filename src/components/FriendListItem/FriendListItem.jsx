import style from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={style.friend_box}>
      <img
        className={style.friend_avatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={style.friend_name}>{name}</p>
      {isOnline ? (
        <p className={style.friend_online}>Online</p>
      ) : (
        <p className={style.friend_offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;

{
  /* <p className={style.friend_status isOnline}>Online</p> */
}

{
  /* <p className={style.friend_status}>Offline</p> */
}
