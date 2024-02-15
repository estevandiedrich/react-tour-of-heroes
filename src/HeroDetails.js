import { useParams } from 'react-router-dom';
import FetchHeroDetails from './FetchHeroDetails';
import Menu from './Menu';
export default function HeroDetails({ title }) {
    const { id } = useParams();
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu />
        </header>
        <div className="App-body">
            <FetchHeroDetails id={id} />
        </div>
    </div>;
}