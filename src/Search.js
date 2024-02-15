import FetchSearch from "./FetchSearch";
import Menu from "./Menu";

export default function Search({ title }) {
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu />
        </header>
        <div className="App-body">
            <FetchSearch/>
        </div>
    </div>;
}