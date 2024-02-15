import FetchHeroes from "./FetchHeroes";
import Menu from "./Menu";

export default function Heroes({ title }) {
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu />
        </header>
        <div className="App-body">
            <FetchHeroes />
        </div>
    </div>;
}