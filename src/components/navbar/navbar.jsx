import {useState , useEffect} from 'react'
import {useDispatch} from "react-redux"
import { useTranslation } from 'react-i18next';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LanguageSelector from  "./languageSelector/languageSelector"
import "./navbar.scss"


import {logout} from "../../store/authReducer"



const Navbar = () => {
  const {t} =  useTranslation("common")
  const dispatch = useDispatch()
  const [opened ,  setOpened]= useState({});

  const toggleOpened = (type)=>{
    setOpened({[type] : !opened[type]})
  }

  



  return (
    <div className="navbar">
        <div className="wrapper">
        <div className={`search ${opened.search ? "active" :  ""}`}>
            <button className="submit">  
              <i className="las la-search"> </i>
            </button>
            <input  type="search" placeholder={`${t('search')} ...`} />
            <button className="submit">  
              <i onClick={()=>{toggleOpened("search")}} className="las la-times"> </i>
            </button>
        </div>
        <div className="left">
          <button >
            <i className="las la-compress-arrows-alt"></i>
          </button>
        </div>
        <ul className="right">
          <li className="globe">
            {/* <LanguageSelector  isOpen={opened.language}  toggle={()=>toggleOpened("language")} /> */}
           
          </li>
          {/* <li className="search-icon">
            <button>  
            <i onClick={()=>{toggleOpened("search")}} className="las la-search"> </i>
            </button>
          </li> */}
          <li  className="not">
            <button> 
              <i  className="las la-bell"> </i>
              </button>
            <span className="newMessagespulse">
              
            </span>
          </li>
          <li>
            <Dropdown isOpen={opened.profile}  toggle={()=>toggleOpened("profile")}>
              <DropdownToggle  className="dropdowntoogle" >
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    className="avatar"
                    alt=""
                  />
                <p>admin</p>
              </DropdownToggle>
              <DropdownMenu>
                {/* <DropdownItem className="dropDownItem" >
                  <i className="las la-user-circle"></i>
                  <p className="itemTitle">{t("profile")}</p>
                </DropdownItem> */}
                {/* <DropdownItem divider />
                <DropdownItem className="dropDownItem" >
                  <i className="las la-lock"></i>
                  <p className="itemTitle">{t("password")}</p>
                </DropdownItem>
                <DropdownItem divider /> */}
                <DropdownItem onClick={()=> {dispatch(logout())}} className="dropDownItem" >
                  <i className="las la-sign-out-alt"></i>
                  <p className="itemTitle">{t("logout")}</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar