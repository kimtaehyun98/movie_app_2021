import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

// react-router-dom을 사용하는 이유 :
// <a href> 를 사용하면 페이지 전체를 다시 그림 -> 즉 클릭할때마다 리액트가 죽고 새 페이지가 열림
// 필요한 부분만 다시 그려주는 리액트의 장점 활용 X

function Navigation() {
    return (
        <div className="nav">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
        </div>
    );
}

export default Navigation;