import React from 'react';

const ContentList = ({photos}) => {
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div style={{margin: '2%'}} key={i}>
                    <img src={p.thumbnailUrl} alt="Photo" className="" style={{width:'330px',height:'300px', padding: '3%'}} />
                    <div>{p.title}</div>
                </div>
                )
    })
    ) : (
        <div>
            <p>You have no content to display!</p>
        </div>
    )
    
    return(
        <div className="d-flex flex-wrap">
            {myContentList}
        </div>
    )
}
const styleItem = {
    width:'30vw'
}
export default ContentList;