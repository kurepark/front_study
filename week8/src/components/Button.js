/*module.exports = function*/ //노드에서 내보내는방법

export default function Button(props){ //es6문법에서 모듈을 내보내는 방법
    return `<button id="${props.id}">${props.children}</button>`
};
