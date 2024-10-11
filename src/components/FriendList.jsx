/* eslint-disable react/prop-types */
export default function FriendList({ friend }) {
    return (
        <div className="sidebar">
            <li>
                <img src={friend.image} />
                <h3>{friend.name}</h3>
                {friend.balance < 0 && (
                    <p className="red">
                        {" "}
                        You Owe {friend.name} ${Math.abs(friend.balance)}
                    </p>
                )}
                {friend.balance > 0 && (
                    <p className="green">
                        {friend.name} Owes you ${Math.abs(friend.balance)}
                    </p>
                )}
                {friend.balance === 0 && (
                    <p className="blue"> You and {friend.name} are even</p>
                )}

                <span>
                    <button className="button">Select</button>
                </span>
            </li>
        </div>
    );
}
