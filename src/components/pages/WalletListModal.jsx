import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import coins from '../utils/coins';
import { Link } from "react-router-dom";
import "../styles/Modal.css"

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 470,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px"
};



export default function WalletListModal({ open, setOpen, setOpenChild }) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenChild = () => {
    setOpenChild(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style2, width: 500 }} >
        <p style={{ paddingBlock: "5px", fontWeight: 'bold', wordSpacing: "5px", textTransform: "uppercase"}}>Choose wallet</p>
        <div style={{
           width: "450px",
           display: "flex",
           justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          overflowY: "auto",
        }}>

          {coins.map((obj, id) => {
            return (
            <div style={{ 
            width: "170px",
            height: "150px",
            padding: "20px",
            textAlign: "center",
            paddingBlock: "20px",
            margin: "10px",
            }} key={id}>
              <Link  to={`/connect/${id}`} onClick={handleOpenChild} className='wallet-connect' style={{ display: "block", padding: "10px"}}>
              <img style={{ width: "80%", borderRadius: "50%" }} src={obj.image} alt={obj.title} />
              <p className='title'>{obj.title}</p>
              </Link>
            </div>)
          })}
        </div>
      </Box>
    </Modal>
  );
}
