import a from "./addEmployee.module.scss";
import Header from "../../organisms/Header";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text21700 from "../../atoms/Text21700";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Ava from "../../../images/avatar-addEmployee.webp";
import ChooseIcon from "../../../images/choose-photo.svg";
import Calendar from '../../../images/holiday-calendar.svg'

const AddEmployee = () => {
  return (
    <div className={a.wrapper}>
      <Header />
      <div className={a.background}>
        <div className={a.container}>
          <div className={a.title}>
            <Text60700 text="Редактировать сотрудника" />
          </div>
          <div className={a.body}>
            <div className={a.personalInformation}>
              <div className={a.contacts}>
                <div className={a.contacts__avaWrapper}>
                  <Text21700 text="Изображение" />
                  <div className={a.body}>
                    <img src={Ava} alt="ava" />
                    <div className={a.img__infoWrapper}>
                      <Text15400С
                        text="Загрузите квадратное фото в формате png, jpeg,размером не более 400 кб"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <ImgTextTemplate
                        image={ChooseIcon}
                        text={
                          <Text15400С
                            text="Выбрать другое фото"
                            color="#277D59"
                            underline={true}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={a.contactsInformation}>
                  <h3 className={a.title}>
                    <Text21700 text="Контактная информация" />
                  </h3>
                  <form action="#" className={a.inputs__form}>
                    <div className={a.input__wrapper}>
                      <label htmlFor="email">
                        <Text15400С
                          text="Email"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={a.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="a.shevchenko@dragon.com.ua"
                      />
                    </div>
                    <div className={a.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Телефон мобильный"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="number"
                        className={a.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="+380951649520"
                      />
                    </div>
                    <div className={a.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Телефон дополнительный"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={a.contactsInformation__input}
                        id="email"
                        name="contact"
                      />
                    </div>
                    <div className={a.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Внутренний номер"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={a.contactsInformation__input}
                        id="email"
                        name="contact"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className={a.personal}>
                <h3 className={a.title}>
                  <Text21700 text="Личные данные" />
                </h3>
                <form action="#" className={a.inputs__form}>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С text="Имя" color="rgba(61, 61, 61, 0.4)" />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Имя (англ)"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Фамилия"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Фамилия (англ)"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Должность"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Должность (англ)"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="email"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Номер пропуска"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="number"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.input__wrapper}>
                    <label htmlFor="number">
                      <Text15400С
                        text="День рождения"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <input
                      type="number"
                      className={a.contactsInformation__input}
                      id="email"
                      name="contact"
                    />
                  </div>
                  <div className={a.double__input}>
                    <div className={a.double__input__item}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Номер страховки"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                      <div className={a.input__insurence}><Text15400С text='568952367'/></div>
                    </div>
                    <div className={a.double__input__item}>
                    <label htmlFor="number">
                      <Text15400С
                        text="Действительна до"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </label>
                    <div className={a.input__insurence}><Text15400С text='05.11.2019'/><img src={Calendar}/></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={a.settings}></div>
            <div className={a.choose}></div>
            <div className={a.choose}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
