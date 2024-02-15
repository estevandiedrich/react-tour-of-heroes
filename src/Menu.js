export default function Menu() {
    return <div>
        <nav>
            <a href={process.env.PUBLIC_URL+'/dashboard'}>Dashboard</a>
            <a href={process.env.PUBLIC_URL+'/heroes'}>Heroes</a>
            <a href={process.env.PUBLIC_URL+'/search'}>Search</a>
            <a href={process.env.PUBLIC_URL+'/newHero'}>New Hero</a>
            <a href={process.env.PUBLIC_URL+'/newAddress'}>New Address</a>
        </nav>
    </div>;
}