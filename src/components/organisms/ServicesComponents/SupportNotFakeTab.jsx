import React from "react";
import { useRef, useState, useEffect } from "react";
import './support-calendar-component.scss';

import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import contactsIcon from "../../../images/contacts-icon.svg";
const SupportNotFakeTab = (props) => {
    const [dropsActive, setDropsActive] = useState([false, true, false, false, false, false, false,]);
	const handleDropsClick = (index) => {
		const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
		setDropsActive(newActiveItems);
	};
    return (
        <div class="support-faq">
            <div class="support-faq__title">Календарь</div>
            <div class="support-faq__dropdowns">
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(0) }}>
                        <div class="support-faq__preview-text">
                            Как пользоваться разделом календарь?
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[0] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[0] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(1) }}>
                        <div class="support-faq__preview-text">
                        Почему некоторые разделы мне недоступны?
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[1] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[1] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(2) }}>
                        <div class="support-faq__preview-text">
                        Перенос больничных
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[2] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[2] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(3) }}>
                        <div class="support-faq__preview-text">
                        Как подать заявку на отпуск/больничный/командировку?
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[3] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[3] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(4) }}>
                        <div class="support-faq__preview-text">
                        Почему некоторые разделы мне недоступны?
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[4] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[4] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
                <div class="support-faq__row">
                    <div class="support-faq__preview" onClick={() => { handleDropsClick(5) }}>
                        <div class="support-faq__preview-text">
                        Как подать заявку на отпуск/больничный/командировку?
                        </div>
                        <img src={dropdownArrow} alt="" class={dropsActive[5] === true ? "support-faq__drop-arrow active" : "support-faq__drop-arrow"} />
                    </div>
                    <div class={dropsActive[5] === true ? "support-faq__dropdown active" : "support-faq__dropdown"} >
                        <div class="support-faq__drop-text">
                        <span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. <span>Aliquam in sem posuere</span>, elementum ipsum sit amet, suscipit turpis. In volutpat a purus a feugiat. Pellentesque habitant <span>morbi tristique</span> senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis sit amet neque id pharetra. Mauris tempus id est quis elementum. Mauris sed erat placerat, pretium nunc quis, scelerisque quam. <span>Donec est tortor</span>, euismod at venenatis a, mollis sed nisi.
                        </div>
                    </div>
                </div>
            </div>

            <div class="support-faq__not-found">
                <div class="support-faq__not-title">Не нашли овет на свой вопрос?</div>
                <div class="support-faq__contact-button">
                    <img src={contactsIcon} alt="" class="support-faq__contacts-icon" />
                    Contact support
                </div>
            </div>

        </div>
    )
}

export default SupportNotFakeTab;