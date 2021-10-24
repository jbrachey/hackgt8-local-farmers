import './post-style.css';

const Post = ({farmUserName, farmName, text}) => {
    return (
        <div className='post'>
            <button className='postButton' onClick={() => {
                console.log(farmUserName);
            }

            }>
                <h2 className='farmName'>{farmName}</h2>
            </button>
            <div className = "line"></div>
            <br/>
            <span className='postText'>{text}</span>
        </div>
    );
}

export default Post;