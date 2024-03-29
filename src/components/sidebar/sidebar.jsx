import React from 'react'
import "./sidebar.scss"
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"

import PerfectScrollbar from 'react-perfect-scrollbar'

// import HomeIcon from '@mui/icons-material/HomeOutlined';
import { useTranslation } from 'react-i18next';
import menuItems from  "../../menu-items"
import MenuItems  from  "./menuItems/menuItems"
import Logo from "../../assets/images/logo.png"

const Sidebar = () => {
  const {t} =  useTranslation("common")
  const nav = useSelector(state=>state.nav.nav)
  const opened = useSelector(state=>state.nav.opened)
  return (
      <>
         <div className={`sideBarImage fixed ${opened ? "closed" : ""}`} style={{backgroundImage : `url(${Logo})` }}>
      </div>
        <div className={`sidebar fixed ${opened ? "closed" : ""}`}>
          <div className="top">
            <span className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
              </span>
          </div>

          <div className="center">
            <PerfectScrollbar style={{maxHeight : "500px" , paddingBottom : "100px"}}>
            <ul>
            {
              menuItems && menuItems.items && 
              <MenuItems   
                items = {
                  [ 
                      {
                        id: 'filter',
                        title: 'filter',
                        type: 'group',
                        children: [
                            {
                              id: nav.name,
                              title: nav.name,
                              type: 'collapse',
                              url: '/document/filter',
                              icon: 'las la-home',
                              children : nav.options.map(el=>{
                                return {
                                    title: el,
                                    type: 'item',
                                    url: '/document/filter/'+el
                                }

                              })

                            }
                        ]
                      } 
                    
                    ,
                    ...menuItems.items,
                  ]
                } 
              />
            } 
            </ul>
            </PerfectScrollbar>
            {/* <ul>
              <p className="title" >{t("main")}</p>
              <li> 
              <Link className=" superitemsidebar" to="/">
                  <i className="icon las la-home"></i>
                  <span>{t('dashboard')}</span>
              </Link>
              </li>
              <p className="title" >{t("users")}</p>
              <li> 
                <Link className="multiple-choices  superitemsidebar" to="/users">
                  <i className="icon las la-users"></i>
                  <span>{t("users")}</span>
                  <i className="toggle-icon las la-angle-down"></i>
                </Link>
                <div className="sidebarsubmenu">
                  <ul className="submenuitems">
                    <li className="submenuitem">
                        <Link  className="submenuchoice" to="/users">
                          <i className="las la-dot-circle"></i>
                          <span>{t("all users")}</span>
                        </Link>
                    </li>
                    <li className="submenuitem">
                        <Link  className="submenuchoice" to="/users">
                          <i className="las la-dot-circle"></i>
                          <span>{t("all users")}</span>
                        </Link>
                    </li>
                    <li className="submenuitem">
                        <Link  className="submenuchoice" to="/users">
                          <i className="las la-dot-circle"></i>
                          <span>{t("all users")}</span>
                        </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li> 
                <Link className="multiple-choices superitemsidebar" to="/users">
                <i className="icon  las la-wallet"></i>
                <span>{t("payments")}</span>
                </Link>
              </li>
              <li> 
              <Link className="multiple-choices superitemsidebar" to="/users">
                <i className="icon las la-hand-holding"></i>
                <span>{t("services")}</span>
                </Link>
              </li>
              <p className="title">{t("system")}</p>
              <li>
              <Link className="multiple-choices superitemsidebar" to="/users">
                <i className="icon las la-ad"></i>
                <span>{t('ads')}</span>
                </Link>
              </li>

              <li>
              <Link className="multiple-choices superitemsidebar" to="/users">
                <i className="icon las la-cog"></i>
                <span>{t("paramètres")}</span>
                </Link>
              </li>

            </ul> */}
          </div>
          {/* <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div> */}
        </div>
      </>
  )
}

export default Sidebar