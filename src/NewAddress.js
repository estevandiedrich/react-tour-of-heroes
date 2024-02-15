import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function NewAddress({ title }) {
    const [selectedHero, setSelectedHero] = useState();
    const [heroes, setHeroes] = useState([]);
    const [address, setAddress] = useState({});
    function onSubmitAddress(event) {
        event.preventDefault();
        console.log(event.currentTarget.elements.address.value);
        address.address = event.currentTarget.elements.address.value;
        address.hero = selectedHero;
        setAddress(address);
        fetch('http://localhost:8080/addresses/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(address)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setAddress(data);
            });
    }
    const fetchHeroes = () => {
        fetch('http://localhost:8080/heroes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setHeroes(data._embedded.heroes);
                setSelectedHero(data._embedded.heroes[0]);
            });
    };
    useEffect(() => {
        fetchHeroes();
    }, []);
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu />
        </header>
        <div className="App-body">
        <div>Address id {address.id}</div>
            <form className="form" onSubmit={onSubmitAddress}>
                <div>
                    <label>Hero</label>
                    <select
                        defaultValue={selectedHero}
                        onChange={e => {
                            const hero = heroes.find(hero => {
                                return hero.id === parseInt(e.target.value);
                            });
                            setSelectedHero(hero)}}>
                        {heroes.map(hero => {
                            return <option key={hero.id} value={hero.id}>{hero.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Address</label>
                    <input key="address" name="address" type="text" value={address.address} />
                </div>
                <button type="submit" title="add address">Add new address</button>
            </form>
        </div>
    </div>;
}