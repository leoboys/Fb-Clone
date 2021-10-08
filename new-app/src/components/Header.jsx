import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box} from "@mui/system";
import { TableRow, Typography } from "@mui/material";

function Header(){

    return(

        <div>
           <Container fixed sx={{width: "1152px", height: "72px", backgroundColor: "white", boxShadow: "0px 1px 0px #E5E9F2" }} >
        
               <Box sx={{height:"580px", width:"590px", backgroundColor: "whitesmoke", position: "fixed", marginX: "281px", marginY: "97px", borderRadius:"10px" }} >
                  <Typography  sx={{ 
                         fontSize: "41px",
                         marginX: "182px",
                         marginY: "51px",
                         fontFamily: "Georgia",
                         bottom:"4px",
                         color: "rgba(0, 78, 102, 1)"
                         }} > Book Order</Typography>  
                 
                 <Typography  sx={{
                         fontSize: "14px",
                         marginX: "158px",
                         marginY: "4px",
                         fontFamily: "Montserrat",
                         color: "rgba(130, 130, 130, 1)"
                         }} > Let’s Book your Solar Power/Subsidized</Typography>  
                  
                 
                 
                   <TableRow>

                     <Typography style={{
                         width:"44px", 
                         height:"17px", 
                         fontSize: "14px",
                         fontFamily: "Montserrat",
                         mixBlendMode: "passthrough" }}> Name</Typography>
                <Grid sx={{
                    position: "absolute", 
                    height: "42px", 
                    width: "250px", 
                    marginY:"3px", 
                    marginX:"35px", 
                    backgroundColor: "white", 
                    borderRadius:"5px", 
                    Padding : "15px 19px 11px 15px",
                    border: "1px solid #CECECE",
                    flex: "none",
                    order: "1",
                    flexGrow: "0"
                     }} />

                <Grid sx={{
                    position: "absolute", 
                    height: "42px", 
                    width: "250px", 
                    marginY:"3px", 
                    marginX: "305px", 
                    backgroundColor: "white", 
                    borderRadius:"5px", 
                    Padding : "15px 19px 11px 15px",
                    border: "1px solid #CECECE",
                    flex: "none",
                    order: "1",
                    flexGrow: "0"
                     }} />

                    </TableRow>
                    <TableRow >
                        <Box sx={{ 
                            position: "absolute", 
                            width: "520px", 
                            height:"42px",
                            borderRadius:"5px",
                            marginY:"80px", 
                            marginX: "35px", 
                            border: "1px solid #CECECE",
                            backgroundColor: "white"}} />

                    </TableRow>
                    <TableRow >
                        <Box sx={{ 
                            position: "absolute", 
                            width: "520px", 
                            height:"42px",
                            borderRadius:"5px",
                            marginY:"153px", 
                            marginX: "35px", 
                            border: "1px solid #CECECE",
                            backgroundColor: "white"}} />

                    </TableRow>
                    <TableRow >
                        <Box sx={{ 
                            position: "absolute", 
                            width: "520px", 
                            height:"42px",
                            borderRadius:"5px",
                            marginY:"216px", 
                            marginX: "35px", 
                            border: "1px solid #CECECE",
                            backgroundColor: "white"}} />

                    </TableRow>

                    <TableRow >
                    <Box sx={{ 
                            position: "absolute", 
                            width: "194px", 
                            height:"42px",
                            borderRadius:"1px",
                            marginY:"300px", 
                            marginX: "180px", 
                            border: "1px solid #CECECE",
                            backgroundColor: "rgba(0, 78, 102, 1)"}} >
                              <Typography sx={{
                                  marginX:"60px",
                                  marginY:"12px",
                                  fontSize: "14px",
                                  color: "white"
                              }}> Book Now</Typography>  
                            </Box>


                    </TableRow>

               
               </Box>
             
               </Container>
        </div>
    )
}

export default Header;
