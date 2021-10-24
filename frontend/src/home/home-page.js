import MainHeader from "../header/main-header";
import PostList from "./post-list";
import './home-page-style.css';

/*const getPosts = async () => {
    
}*/

const HomePage = () => {
    // Place holder, later get posts from api based on farms user is following
    // const posts = await getPosts();
    const posts = [['180deg', '180 Degree Farm', "This season's apples look better than ever!!"],
                ['mobley', 'Mobley Farm', "Looking for volunteers, call our number if you are interested!"],
                ['statefarm', 'State Farm', 'Like a good neighbor, State Farm is there!']];

    return (
        <div className='home'>
            <MainHeader/>
            <h3>See posts from local farmers!</h3>
            <PostList posts={posts}/>
        </div>
    )
}

export default HomePage;