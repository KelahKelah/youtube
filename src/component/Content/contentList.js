import React from 'react';
import './Content.css';

const ContentList = ({photos}) => {
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div style={{margin: '1%', padding: '2%'}} key={i}>
                    <img src={p.thumbnailUrl} alt="Photo" className="" style={{width:'315px',height:'180px', padding: '2%'}} />
                    <div>{p.title}</div>
                </div>
                )
    })
    ) : (
        <div>
            <p style={{textAlign:'center'}}>You have no content to display!</p>
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