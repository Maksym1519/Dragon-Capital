import i from './imgTextTemplate.module.scss';

const ImgTextTemplate = (props) => {
  const styled = {
    marginLeft: props.margin
  }
    return (
        <div className={i.imgText__wrapper} style={styled}>
          <img src={props.image}  />
          <div className={i.img}>{props.img}</div>
          <img src={props.ava}  className={`${props.ava ? i.imgMargin : ""}`}/>
          <div>{props.text}</div>
        </div>
    )
}

export default ImgTextTemplate;