import s from "./servicePage.module.scss";
import Header from "../../organisms/Header";
import Assistants from "../../organisms/ServicePage/Assistants";

const ServicePage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.background}>
        <Assistants />
      </div>
    </div>
  );
};

export default ServicePage;
