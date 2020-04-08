import React from 'react';
import './Content.css';
import ContentList from './contentList';
 
const Content = ({photos, error}) => {
    return (
        <>
            <div>
                <ContentList photos={photos} error={error} />
                {/* <AddList /> */}
            </div>

        </>
    )
}
export default Content; 