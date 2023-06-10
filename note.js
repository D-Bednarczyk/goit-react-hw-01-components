const FriendsRow = ({ friends }) => {
  console.log(friends);
  return friends.friends.friends.map((liitem, index) => (
    <li class="item">
      <span class="status">{liitem.isOnline}</span>
      <img class="avatar" src={liitem.avatar} alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  ));
};
const tab = friends.map(f => console.log(f.name));
console.log(tab);

const FriendsLoop = ({ friends }) => {
  //console.log(friends);
  return friends.map((liitem, index) => (
    <li className="item" key={liitem.id}>
      <span className="status">{liitem.isOnline}</span>
      <img
        className="avatar"
        src={liitem.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{liitem.name}</p>
    </li>
  ));
};
