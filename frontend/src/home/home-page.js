import Post from "./post";
import './home-page-style.css';

const getPosts = async () => {

}

const HomePage = () => {
    // Place holder, later get posts from api
    // const posts = await getPosts();
    const posts = [['loffarm', 'Local Organic Farm', 'Got some new tomatoes for yall'],
                ['cool_farm', 'Other farm nearby', 'Come here for all your apple needs'],
                ['smol', 'Small farm', 'Veggies veggies veggies!!!!']];

    return (
        <div className='home'>
            {posts.map((post) => {
            return <li key={post[0]}><Post farmUserName={post[0]}farmName={post[1]} text={post[2]}/></li>
        })}
        </div>
    )
}

export default HomePage;