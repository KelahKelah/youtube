import React from 'react';
import './Content.css';
import Error from '../Error/Error';

const ContentList = (props) => {
    const {photos, error, notification } = props
    const myContentList = photos.length ? (photos.map((p,i) => {
        return( <div key={i} className='px-0 mb-4 mt-3'>
                    <img src={p.url} alt="Photo" style={{width:'315px',height:'180px'}} />
                    <div style={{ width:"84%", height:'50%'}}>
                        <img src={p.thumbnailUrl} alt={p.title} style={{margin: '17px', borderRadius: '50%', width: '35px', height: '35px'}} />
                        <span style={{lineHeight:'1.0', overflowWrap:'break-word' }}>Ye hsh UJQN SNIEJ  ISOJDEIO QNHAUWE</span>
                    </div>
                </div>
                )
    }) 
    ) : ( 
        <div>
            <div style={{textAlign:'center'}}>You have no content to display!</div>
        </div>
    )
     
    return(!error ?
        <div className={'d-flex name'}>
            {myContentList}
        </div> : (<Error />)
    )
}
export default ContentList;