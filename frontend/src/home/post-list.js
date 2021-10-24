import Post from "./post";
import './home-page-style.css';

const PostList = ({posts}) => {
    return (
        <div className='postList'>
            {posts.map((post) => {
                return <li key={post[0]}><Post farmUserName={post[0]}farmName={post[1]} text={post[2]}/></li>
            })}
        </div>
    )
}

export default PostList;