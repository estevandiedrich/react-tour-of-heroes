import { useEffect, useState } from "react";

export default function FetchDashboard() {
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
    return <div className="heroes-menu">
        {heroes && heroes.length > 0 && heroes.map((hero) => {
            return <a className="heroes-menu-a" href={'./heroDetails/' + hero.id} key={"a-"+hero.id}>{hero.name}</a>
        })
        }
    </div>;
}