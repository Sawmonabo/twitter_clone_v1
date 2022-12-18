import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import './Home.css';

function Home({}) {
  return (
    <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  );
}

export default Home;
