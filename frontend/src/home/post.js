import './post-style.css';

const Post = ({farmUserName, farmName, text}) => {
    return (
        <div className='post'>
            <button className='postButton' onClick={() => {
                window.location.href = `http://localhost:3000/farm/${farmUserName}`;
            }}>
                <h2 className='farmName'>{farmName}</h2>
            </button>
            <div className = "line"></div>
            <br/>
            <span className='postText'>{text}</span>
        </div>
    );
}

export default Post;