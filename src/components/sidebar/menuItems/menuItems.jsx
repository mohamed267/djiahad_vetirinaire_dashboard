import "./menuItems.scss"
import MenuGroup from  "./menuGroup/menuGroup"

const MenuItems = ({items})=>{
    return (
    <>
        {
            items && items.map(item=>{
                if(item.type == "group"){
                    return <MenuGroup key={item.id} item={item}  />
                }
            })
        }
    </>
    )
}



export default MenuItems;