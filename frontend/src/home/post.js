import './post-style.css';

const Post = ({farmID, farmName, text}) => {
    return (
        <div className='post'>
            <h2 className='farmName'>{farmName}</h2>
            <span className='postText'>{text}</span>
        </div>
    );
}

export default Post;