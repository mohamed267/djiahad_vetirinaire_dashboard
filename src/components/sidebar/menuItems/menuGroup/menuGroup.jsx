import CollapseMenu from  "./collapseMenu/collapseMenu"
import {useTranslation} from  "react-i18next"
import "./menuGroup.scss"
const MenuGroup = ({item}) =>{
    const {t} = useTranslation("common");
    return(
        <>
            <p className="title" >{t(item.title)}</p>
            {
                item.children && item.children.map((item)=>(
                    <CollapseMenu key={item.id} item={item}  />
                ))
            }
        </>
    )
}


export default MenuGroup