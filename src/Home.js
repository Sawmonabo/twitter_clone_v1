import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function Home() {
  return (
    <div>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;
