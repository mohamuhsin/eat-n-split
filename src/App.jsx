import Bill from "./components/Bill";
import Friends from "./components/Friends";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friends />
        <Bill />
      </div>
    </div>
  );
}
