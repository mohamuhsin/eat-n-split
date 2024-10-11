/* eslint-disable react/prop-types */
export default function Bill() {
    return (
        <div className="form">
            <h2>Split a bill with Anthony</h2>
            <form className="form">
                <label htmlFor="bill">💰Bill Value</label>
                <input type="number" name="bill" id="bill" />

                <label htmlFor="expense">Your Expense</label>
                <input type="number" name="expense" id="expense" />

                <label htmlFor="whos-expense">Friend</label>
                <input type="whos-expense" name="whos-expense" id="whos-expense" />

                <label htmlFor="bill"></label>
                <select label="Friend">
                    <option>Friend</option>
                    <option>You</option>
                </select>
                <button>Add Friend</button>
            </form>
        </div>
    );
}
