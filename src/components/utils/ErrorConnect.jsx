import React from 'react'
import Fab from '@mui/material/Fab';
import { IoKeyOutline, IoQrCode,IoReloadSharp } from "react-icons/io5";
import { RiBarcodeLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


      function ErrorConnect({setOpen,setIsBackUpCode,setIsDataLoading}) {
  const handleClose = () => {
    setOpen(false);
  }
  const handleOpenBackCode = () => {
    setOpen(false)
    setIsBackUpCode(true);
    setIsDataLoading(false)
  }

  const handleReload = () => {
    setIsDataLoading(true);
     setTimeout(() => setIsDataLoading(false),5000)
  }
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
        <div style={{ position: "relative", width: "250px", height: "300px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "20px", borderRadius: "10px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <Link  onClick={handleReload} style={{position: "absolute" , color: "white", background: "red", paddingBlock: "5px", paddingInline: "5px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}><IoReloadSharp /><span style={{ marginLeft: "5px"}}>Try again</span></Link>
        <IoQrCode fontSize={200} />
        </div>
        <div className='connect-btn'>
          <div style={{paddingBlock: "5px", paddingBottom: "15px", color: "#9b51e0", fontWeight: "bold "}}>Try Connect with the following options</div>
        <Fab variant="extended" onClick={handleClose} style={{ marginInline: "10px",color: "#9b51e0"}} size="small" color="#9b51e0">
        
        <p style={{marginRight: "5px",color:"#9b51e0" }}>Seed Phrase</p>

        <IoKeyOutline />
      </Fab>
      <Fab variant="extended" onClick={handleOpenBackCode} style={{ marginInline: "10px",color: "#9b51e0"}} size="small" color="#9b51e0">
        <p style={{marginRight: "5px", color:"#9b51e0"}}>Backup Code</p>
        <RiBarcodeLine  />
      </Fab>
        </div>
    </div>
  )
}

export default ErrorConnect