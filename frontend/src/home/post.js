import './post-style';

const Post = ({farmName, text}) => {
    return (
        <div className='post'>
            <h2 className='farmName'>{farmName}</h2>
            <span className='postText'>{text}</span>
        </div>
    );
}