import "./datatable.scss"
import {useState, useEffect , useRef } from "react"
import { DataGrid , 
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    arSD
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import {Link} from  "react-router-dom"
import {useTranslation} from  "react-i18next"
import extractColumns from  "./utils/extractColums"
import {exportData} from  "../../utils/data"

// import { createTheme, ThemeProvider } from '@mui/material/styles';








function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="circular"
        page={page-1}
        count={pageCount}
        // @ts-expect-error
        renderItem={
            (props2) =>
                (
                    <PaginationItem {...props2} disableRipple />
                )
            
        }
        onChange={(event, value) => {
            console.log("page is changign ", value)
            apiRef.current.setPage(value-1)
        }}
      />
    );
}



const Datatable  = ({structure , row ,  data , direct,dataKey , pageChanged ,  dataCode})=>{
    const {t} = useTranslation("common")
    const colums = extractColumns(structure.columns ,  t);

    return(
    <div 
      className="datatable">
            <DataGrid
                localeText={ arSD.components.MuiDataGrid.defaultProps.localeText}
                headerClassName="header-class"
                paginationMode="server"
                rows={data[dataKey]}
                columns={colums}
                pageSize={9}
                rowCount={data.pages}
                getRowId={(row) => row[structure.keyId]}
                onPageChange={(newPage)=>{pageChanged(newPage + 1 ) }}
                checkboxSelection
                disableSelectionOnClick
                // components={{
                //     Pagination: CustomPagination ,
                    
                // }}
            />
        
    </div>
    )
}


export default Datatable;