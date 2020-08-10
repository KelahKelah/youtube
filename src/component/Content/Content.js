import React from 'react';
import './Content.css';
import ContentList from './contentList';
// import { construct } from 'core-js/fn/reflect';
 
const Content = ({photos, error, notification}) => {
    return (
        <>
            <div>
                <ContentList photos={photos} error={error} notification={notification} />
            </div>
        </>
    )
}
export default Content; 