import FetchDashboard from "./FetchDashboard";
import Menu from "./Menu";

export default function Dashboard({title}) {
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu />
        </header>
        <div className="App-body">
            <FetchDashboard/>
        </div>
    </div>;
}