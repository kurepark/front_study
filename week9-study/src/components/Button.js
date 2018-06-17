import React from 'react';
import './Button.css'; //import style from './Button.css'

//이렇게 하면 css파일을 모듈로 인식하지 못한다
//css-loader를 추가해줘야한다. 로더를 해줘도 css dom 을 그려주듯 스타일로더를 먼저 읽고
//그 다음 css-loader가 된다. 헤더에 style태그가 박힌다

export default function Button(props){
    console.log(props)
    return (
        <button className={`btn ${props.type || ''}`} //{styles.button}
        onClick={props.onClick}>
            {props.children}
        </button>
    )
}