import './review-nav.scss';
import { useRef, useState, useEffect } from "react";


const ReviewSmallNav = (props) => {
    const [navItem, setNavItem] = useState(1);
    return (
        <div className="review-small-nav" style={{marginTop: props.marginTop}}>
            <div className={navItem === 1 ? "review-small-nav__item active" : "review-small-nav__item"} onClick={() => { setNavItem(1) }}>Всі рев’ю</div>
            <div className={navItem === 2 ? "review-small-nav__item active" : "review-small-nav__item"}onClick={() => { setNavItem(2) }}>Мої рев’ю</div>
            <div className={navItem === 3 ? "review-small-nav__item active" : "review-small-nav__item"}onClick={() => { setNavItem(3) }}>Рев’ю моїх підлеглих</div>
            <div className={navItem === 4 ? "review-small-nav__item active" : "review-small-nav__item"}onClick={() => { setNavItem(4) }}>Рев’ю де я В’юер</div>
        </div>
    )
}

export default ReviewSmallNav;