import p from './profileMenu.module.scss';
import Text14400 from '../atoms/Text14400';

const ProfileMenu = () => {
    return (
        <div className={p.profileMenu__wrapper}>
            <div className={p.profileMenu__active}>
             <Text14400 text={'Моя страница'} />
             <Text14400 text={'Мои заявки'} />
            </div>
            <div className={p.profileMenu__exit}>
            <Text14400 text={'Выйти из аккаунта'} color="#DB2A29"/>
            </div>
        </div>
    )
}

export default ProfileMenu;