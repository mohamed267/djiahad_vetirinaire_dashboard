import { CircularProgressbar } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';
import 'react-circular-progressbar/dist/styles.css';

/*custom styling */
import "./featured.scss"
const Featured = () => {
  const {t} = useTranslation("common")
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> {t("total revenue")}</h1>
        <i className="las la-ellipsis-v"></i>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar  
            value={70} 
            text={"70%"}
            strokeWidth={5}
            />
        </div>
        <p className="title">{t("total sales today")}</p>
        <p className="amount">$420</p>
        <p className="desc">{t("Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document")}</p>
        <div className="summary">
          <ul className="items">
            <li className="item">
              <p className="title">{t("target")}</p>
              <div className="result negative">
                <i className="las la-angle-down"></i>
                <p className="amount">150 {t("DA")}</p>
              </div>
            </li>
            <li className="item">
              <p className="title">{t("target")}</p>
              <div className="result positive">
                <i className="las la-angle-up"></i>
                <p>150 {t("DA")}</p>
              </div>
            </li>
            <li className="item">
              <p className="title">{t("target")}</p>
              <div className="result negative">
                <i className="las la-angle-down"></i>
                <p>150 {t("DA")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Featured


