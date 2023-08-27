import { useState } from 'react';
import r from './radio.module.scss';
import Arrow from '../../images/active-option.svg'

const Radio = () => {
    const [isChecked, setIsChecked] = useState(false)
    const marked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className={r.radio__wrapper} onClick={marked}>
        {/* <input type="radio" name='meaning'/> */}
        {isChecked && <img src={Arrow}/>}
        </div>
    )
}

export default Radio;