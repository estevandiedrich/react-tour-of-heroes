import { useEffect, useState } from "react";

export default function FetchHeroDetails({ id }) {
    const [heroDetails, setHeroDetails] = useState({name:"",power:""});
    useEffect(() => {
        fetch('http://localhost:8080/heroes/' + id, {
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
                console.log(data);
                setHeroDetails(data);
            });
    }, [id]);
    function onSubmitHero(event) {
        event.preventDefault();
        heroDetails.name = event.currentTarget.elements.name.value;
        heroDetails.power = event.currentTarget.elements.power.value;
        setHeroDetails(heroDetails);
        fetch('http://localhost:8080/heroes/'+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(heroDetails)
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setHeroDetails(data);
            });
    }
    return <div>
        <div>Hero id {heroDetails.id}</div>
        <form className="form" onSubmit={onSubmitHero}>
            <div>
                <label>Hero Name</label>
                <input key="heroName" name="name" type="text" value={heroDetails.name} onChange={e => {setHeroDetails({name:e.target.value,power:heroDetails.power})}}/>
            </div>
            <div>
                <label>Hero Power</label>
                <input key="heroPower" name="power" type="text" value={heroDetails.power} onChange={e => {setHeroDetails({name:heroDetails.name,power:e.target.value})}}/>
            </div>
            <button type="submit" title="update hero">Update hero</button>
        </form>
    </div>;
}