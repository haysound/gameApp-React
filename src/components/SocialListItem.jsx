import React from 'react';

function SocialListItem({ item }) {
    return (
        <li>
            <a href="#" className={item.name}>
                <i className={`bi ${item.icon}`}></i>
            </a>
        </li>
    );
}

export default SocialListItem;