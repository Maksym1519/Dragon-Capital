import pw from './profileMenuWhite.module.scss';
import Text14400 from '../atoms/Text14400';

const ProfileMenu = () => {
    return (
        <div className={pw.profileMenu__wrapper}>
            <div className={pw.profileMenu__active}>
             <Text14400 text={'Моя страница'} color='#fff'/>
             <Text14400 text={'Мои заявки'} color='#fff'/>
            </div>
            <div className={pw.profileMenu__exit}>
            <Text14400 text={'Выйти из аккаунта'} color="#DB2A29"/>
            </div>
        </div>
    )
}

export default ProfileMenu;