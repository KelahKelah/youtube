import React from 'react';
import './Content.css';

const ContentList = ({photos}) => {
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div style={{margin: '1%'}} key={i}>
                    <img src={p.thumbnailUrl} alt="Photo" className="" style={{width:'400px',height:'280px', padding: '2%'}} />
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
        <div className={'wrapper d-flex'}>
            {myContentList}
        </div>
    )
}
// const styleItem = {
//     width:'30vw'
// }
export default ContentList;