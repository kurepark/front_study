import $ from 'jquery';
import {getState} from "../store";
/*
* 상태가 변경될때마다 화면을 그려줄 함수
* */
export function render() {
    const state = getState();
    renderCount(state);
}

function renderCount(state) {
    $("#count").text(state.count);
}
