//뷰를 그리는것과 데이터를 분리
import $ from "jquery";
import {getState} from '../store';

export function render() {
    const state = getState();
    renderCount(state);
}

function renderCount(state) {
    $('#count').text(state.count);
}