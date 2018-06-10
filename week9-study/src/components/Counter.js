import React from 'react';

export default function Counter(props) {
    console.log(props);
    return (
        <div onClick={props.onClick}>
            <div>
                카운터 컴포넌트야 챵현찡
            </div>
            <div>
                <span>
                    {props.children}
                </span>
            </div>
        </div>
    )
}