import React from 'react';
import './Content.css';
import ContentList from './contentList';

const Content = ({photos}) => {
    return (
        <>
            <div>
                <ContentList photos={photos} />
                {/* <AddList /> */}
            </div>

        </>
    )
}
export default Content; 