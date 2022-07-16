import  {useTranslation} from  "react-i18next"
import {exportData} from  "../../utils/data"

const ListItems = ({data , structure}) =>{
    const {t} = useTranslation("common")
    return(
        <>
            <h1 className="title">{t(structure["name"])}</h1>
            <ul className="items">
                {
                    structure && structure.fields && structure.fields.map(field=>{
                        if(field.type=="header"){
                            return(
                                <li className="item">
                                    <div>
                                        <img src={exportData(data ,   field.img.field)}
                                         alt="" 
                                        className="itemImg" />
                                    </div>
                                    <div className="details">
                                        <p className="top">{exportData(data ,   field.top.field)}</p>
                                        <p className="bottom">{exportData(data ,   field.bottom.field)}</p>
                                    </div>
                                </li>

                            )
                        }
                    })
                }
                
                <li className="item">
                    <p className="title">{t("status")}</p>
                    <div className="details">
                        <p className="status" >{t("activated")}</p>                              
                    </div>
                </li>
            </ul>
        </>
    )
}


export default ListItems