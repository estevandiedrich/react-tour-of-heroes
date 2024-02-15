import { useEffect, useState } from "react";

export default function FetchHeroes() {
    const [heroes, setHeroes] = useState([]);
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
                console.log(data._embedded.heroes);
                setHeroes(data._embedded.heroes);
            });
    }
    useEffect(() => {
        fetchHeroes();
    }, []);
    function deleteHero(id){
        fetch('http://localhost:8080/heroes/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                console.log("DELETED");
                fetchHeroes();
            });
    }
    return <div>
        <ul className="heroes">
            {heroes && heroes.length > 0 && heroes.map((hero) => {
                return <li key={"li"+hero.id}>
                    <a href={'./heroDetails/' + hero.id} key={"a-"+hero.id}>
                        <span key={"s1"+hero.id} className="badge">Id: {hero.id}</span>
                        <span key={"s2"+hero.id} className="name">Name: {hero.name}</span>
                    </a>
                    <button key={"b"+hero.id} type="button" className="delete" title="delete hero" onClick={() => deleteHero(hero.id)}>X</button>
                </li>
            })}
    </ul>
    </div >;
}