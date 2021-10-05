import React from 'react';

import './Layout.css'

function Layout(props) {
    return (
        <div className="layout" >
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;