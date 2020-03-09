import React from 'react';


const ContentList = ({photos}) => {
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div key={i}>
                    <div>{p.title}</div>
                    <div>{p.url}</div>
                    <div>{p.thumbnailUrl}</div>
                </div>
                )
    })
    ) : (
        <div>
            <p>You have no content to display!</p>
        </div>
    )
    
    return(
        <div>
            <p>{myContentList}</p>
        </div>
    )
}
export default ContentList;