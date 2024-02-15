import { useState } from "react"

export default function FetchSearch() {
    const [term, setTerm] = useState("");
    const [heroes, setHeroes] = useState({});
    function searchTerm(event) {
        event.preventDefault();
        fetch('http://localhost:8080/heroes/search/findByName?name=' + term, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setHeroes(data._embedded.heroes);
            });
    }
    return <> <form className="search-form" onSubmit={searchTerm}>
        <label>Search</label>
        <input type="text" value={term} onChange={e => { setTerm(e.target.value) }} />
        <button type="submit">Go</button>
    </form>
        <div>
            <ul className="heroes">
                {heroes && heroes.length > 0 && heroes.map((hero) => {
                    return <li key={"li" + hero.id}>
                        <a href={'./heroDetails/' + hero.id} key={"a-" + hero.id}>
                            <span key={"s1" + hero.id} className="badge">Id: {hero.id}</span>
                            <span key={"s2" + hero.id} className="name">Name: {hero.name}</span>
                        </a>
                    </li>
                })}
            </ul>
        </div >
    </>;
}