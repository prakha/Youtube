const VideoCard = ({info}) => {

    const {statistics, snippet} = info;

    const {thumbnails, title, channelTitle} = snippet;

    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt = "img" className="rounded-lg" src = {thumbnails.medium.url} />
            <ul>
                <li className="font-boald">{channelTitle}</li>
                <li>{title}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard;