export default function Description({ username, tag, location, avatar }) {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
}
