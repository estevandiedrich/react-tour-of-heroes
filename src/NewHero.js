import { useState } from "react";
import Menu from "./Menu";

export default function NewHero({ title }) {
    const [newHero, setNewHero] = useState({});
    function onSubmitHero(event) {
        event.preventDefault();
        newHero.name = event.currentTarget.elements.name.value;
        newHero.power = event.currentTarget.elements.power.value;
        setNewHero(newHero);
        fetch('http://localhost:8080/heroes/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHero)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setNewHero(data);
            });
    }
    return <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
            <Menu/>
        </header>
        <div className="App-body">
            <div>Hero id {newHero.id}</div>
            <form className="form" onSubmit={onSubmitHero}>
                <div>
                    <label>Hero Name</label>
                    <input key="name" name="name" type="text" value={newHero.name} />
                </div>
                <div>
                    <label>Hero Power</label>
                    <input key="power" name="power" type="text" value={newHero.power} />
                </div>
                <button type="submit" title="add hero">Add new hero</button>
            </form>
        </div>
    </div>;
}