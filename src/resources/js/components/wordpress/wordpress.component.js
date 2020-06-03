import React from 'react';

export const Wordpress = props => {
    const wordpress = props.publisher.subscribe();
    console.log("wordpress", wordpress);
    return <div dangerouslySetInnerHTML={{ __html: wordpress.data }} />;
}