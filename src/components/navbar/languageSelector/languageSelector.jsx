import {useState} from  'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {useTranslation} from  "react-i18next"
import "./languageSelector.scss"
import Ar from  "../../../assets/images/ar.png"
import Fr from  "../../../assets/images/fr.png"
import En from  "../../../assets/images/en.png"

const LanguageSelector = (props)=>{
    const {t , i18n} = useTranslation("common")
    const [language ,  setLanguage] = useState("en")
    return (
        <>
            <Dropdown  isOpen={props.isOpen} toggle={props.toggle}>
              <DropdownToggle  className="dropdowntoogle" >
                <button>  
                    <i className="las la-globe"></i>
                </button>
                {t("english")}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="dropDownItem" >
                  <img className="itemImage" src={Ar} />
                  <p className="itemTitle">{t("arabic")}</p>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={()=>i18n.changeLanguage("fr")} className="dropDownItem" >
                  <img className="itemImage" src={Fr} />
                  <p className="itemTitle">{t("french")}</p>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="dropDownItem" >
                  <img className="itemImage" src={En} />
                  <p className="itemTitle">{t("english")}</p>
                </DropdownItem>
                
              </DropdownMenu>
            </Dropdown>
        </>
    )
}


export default LanguageSelector;