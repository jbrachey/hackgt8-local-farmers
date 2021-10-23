import Post from "./post";
import './home-page-style.css';

const HomePage = () => {
    // Place holder, later get posts from api
    const posts = [[1, 'Local Organic Farm', 'Got some new tomatoes for yall'],
                [2, 'Other farm nearby', 'Come here for all your apple needs'],
                [3, 'Small farm', 'Veggies veggies veggies!!!!']];

    return (
        <div className='home'>
            {posts.map((post) => {
            return <li key={post[0]}><Post farmID={post[0]}farmName={post[1]} text={post[2]}/></li>
        })}
        </div>
    )
}

export default HomePage;