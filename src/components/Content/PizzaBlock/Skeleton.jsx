import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Skeleton(props) {
    return (
        <div className="card">
            <ul className="list">
                <li className="item">
                    <ContentLoader
                        speed={4}
                        width={280}
                        height={460}
                        viewBox="0 0 280 460"
                        backgroundColor="#cdcdcd"
                        foregroundColor="#e3e3e3"
                        {...props}
                    >
                        <rect
                            x="0"
                            y="319"
                            rx="10"
                            ry="10"
                            width="280"
                            height="83"
                        />
                        <rect
                            x="112"
                            y="420"
                            rx="20"
                            ry="20"
                            width="168"
                            height="40"
                        />
                        <circle cx="135" cy="120" r="120" />
                        <rect
                            x="0"
                            y="427"
                            rx="5"
                            ry="5"
                            width="90"
                            height="27"
                        />
                        <rect
                            x="0"
                            y="271"
                            rx="5"
                            ry="5"
                            width="280"
                            height="24"
                        />
                    </ContentLoader>
                </li>
            </ul>
        </div>
    );
}
