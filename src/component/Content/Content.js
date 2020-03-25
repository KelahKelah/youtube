import React from 'react';
import './Content.css';
import ContentList from './contentList';

const Content = ({photos}) => {

    return (
        <div>
            <div>
                <ContentList photos={photos} />
                {/* <AddList /> */}
            </div>

        </div>
    )
}
export default Content; 