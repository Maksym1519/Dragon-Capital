import './file-row.scss';


import downloadIcon from '../../../images/download-icon.svg';
import redCross from "../../../images/red-cross.svg";

const FileRow = (props) => {
    return (
        <div class="file-row">
            <img src={props.img} alt="" class="file-row__img" />   
            <div class="file-row__texts-container">
                <div class="file-row__texts">
                    <div class="file-row__date">27.08</div>
                    <div class="file-row__cluster">Кластер: Dragon</div>
                </div>
                <div class="file-row__file-name">Corporate template{ props.fileExtension}</div>
            </div>
            <div class="file-row__file-size">1,2 Mb</div>
            <div class="file-row__line"></div>
            <img src={downloadIcon} alt="" class="file-row__download-icon"/>
            <div class="file-row__line"></div>
            <img src={redCross} onClick={() => { props.setPopUpActive(true) }} alt="" class="file-row__red-cross"/>
        </div>
    )
}

export default FileRow;