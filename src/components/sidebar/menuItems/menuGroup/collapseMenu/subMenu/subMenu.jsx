import {Link} from  'react-router-dom';
import {useTranslation} from "react-i18next"
import "./subMenu.scss";

const SubMenu = ({items}) =>{
    const {t} =  useTranslation("common");
    return(
        <div className="sidebarsubmenu">
            <ul className="submenuitems">
                {
                    items && items.map((item )=>{
                        return(
                            <li  key={item.id} className="submenuitem">
                                <Link  className="submenuchoice" 
                                    to={
                                        {
                                            pathname : item.url,
                                            state : item.state
                                        }
                                    }
                                >
                                    <i className="las la-dot-circle"></i>
                                    <span>{t(item.title)}</span>
                                </Link>
                            </li>
                        )
                    })
                }
               
                
            </ul>
      </div>
    )
}


export default SubMenu