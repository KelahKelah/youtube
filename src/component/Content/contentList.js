import React from 'react';
import './Content.css';

const ContentList = ({photos}) => {
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div className="m-3 p-4"key={i}>
                    <img src={p.url} alt="Photo" style={{width:'315px',height:'180px', padding: '2%'}} />
                    <div>
                        <img src={p.thumbnailUrl} alt="Photo" style={{margin: '20px', border: 'solid 1px #f8f8f8', borderRadius: '50%', width: '35px', height: '35px',backgroundColor:'#f8f8f8'}} />
                        <span style={{lineHeight:'1.5'}}>{p.title}</span>
                    </div>
                </div>
                )
    })
    ) : (
        <div>
            <div style={{textAlign:'center'}}>You have no content to display!</div>
        </div>
    )
    
    return(
        <div className={'d-flex wrap'}>
            {myContentList}
        </div>
    )
}
export default ContentList;