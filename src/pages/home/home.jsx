import "./home.scss"
import { useTranslation } from "react-i18next"
import Sidebar from  "../../components/sidebar/sidebar"
import NavBar from  "../../components/navbar/navbar"
import Widget from  "../../components/widget/widget"
import Featured from  "../../components/featured/featured"
import Chart from  "../../components/chart/chart"
import Table from  "../../components/table/table"


const Home = ()=>{
    const {t} = useTranslation()
    return(
        <div className="home">
            <Sidebar />
            
            <div className="homeContainer nav-opened">
                <NavBar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart />
                </div>

                <div className="listContainer">
                    <h1 className="title">{t("latest transactions")}</h1>
                    <Table />
                </div>
                
            </div>
        </div>
    )
}

export default Home