import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css.listItem} key={friend.id}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p className={friend.isOnline ? css.online : css.offline}>
              {friend.isOnline === true ? `Online` : `Offline`}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
