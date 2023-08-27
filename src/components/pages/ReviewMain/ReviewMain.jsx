import r from './reviewMain.module.scss';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Text60700 from '../../atoms/Text60700';
import Text15700 from '../../atoms/Text15700';
import Text17700 from '../../atoms/Text17700';
import Text15400С from '../../atoms/Text15400С';
import Button211 from '../../atoms/Buttons/Button211';
import Dragon from '../../../images/dragon-reviewMain.svg'

const ReviewMain = () => {
    return (
        <div className={r.wrapper}>
         <Header />
         <div className={r.background}>
          <div className={r.container}>
            <div className={r.title__wrapper}>
              <Text60700 text='Ревью'/>
              <Button211 bg='#277D59' text={<Text15700 text='Розпочати нове рев’ю' color='#fff'/>}/>
            </div>
            <div className={r.items__wrapper}>
               <div className={r.item + " " + r.item_border}>
                 <Text17700 text='2H2020' />
                 <Text15400С text='Активно' color='#1DCA58'/>
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2020' />
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2019' />
               </div>
               <div className={r.item}>
                 <Text17700 text='2H2019' />
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2018' />
               </div>
               <div className={r.item}>
                 <Text17700 text='2H2018' />
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2017' />
               </div>
               <div className={r.item}>
                 <Text17700 text='2H2017' />
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2016' />
               </div>
               <div className={r.item}>
                 <Text17700 text='2H2016' />
               </div>
               <div className={r.item}>
                 <Text17700 text='1H2015' />
               </div>
               <div className={r.item}>
                 <Text17700 text='2H2015' />
               </div>
            </div>
          </div>
          <Footer />
         </div>
         <img src={Dragon} alt="dragon" className={r.dragon}/>
        </div>
    )
}

export default ReviewMain;