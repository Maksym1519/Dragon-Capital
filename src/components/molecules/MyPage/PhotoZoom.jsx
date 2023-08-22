import m from '../../pages/MyPage/myPage.module.scss';
import Zoom from '../../../images/myPage-zoom.webp';
import Close from '../../../images/zoom-close.svg'

const PhotoZoom = ({close}) => {
    return (
        <div className={m.zoom__wrapper}>
        <div className={m.zoom__container}>
          <img src={Zoom} alt="ava" />
          <img src={Close} alt="close" onClick={close} className={m.close}/>
          </div>
        </div>
    )
}

export default PhotoZoom;