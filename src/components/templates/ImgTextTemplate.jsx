import i from './imgTextTemplate.module.scss';

const ImgTextTemplate = (props) => {
    return (
        <div className={i.imgText__wrapper}>
          <div>{props.img}</div>
          <div>{props.text}</div>
        </div>
    )
}

export default ImgTextTemplate;