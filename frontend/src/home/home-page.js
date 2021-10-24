import MainHeader from "../header/main-header";
import PostList from "./post-list";
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
            <MainHeader/>
            <PostList posts={posts}/>
        </div>
    )
}

export default HomePage;