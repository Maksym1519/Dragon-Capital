import u from './userPage.module.scss';
import Header from '../../organisms/Header';

const UserPage = () => {
    return (
        <div className={u.userPage__wrapper}>
          <Header />
          <div className={u.userPage__bg}>
            <div className={u.userPage__container}>

            </div>
          </div>
        </div>
    )
}

export default UserPage;