import * as React from 'react';
import Box from '@mui/material/Box';
import "../styles/Modal.css"
import Loader from '../utils/Loader';
import ErrorConnect from './ErrorConnect';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px"
};



function ChildModal({open, setOpen, setIsBackUpCode}) {
    const [isDataLoading, setIsDataLoading] = React.useState(false);
  
    React.useEffect(() => {
      setIsDataLoading(true);
      const timeID = setTimeout(() => setIsDataLoading(false),5000)
      return () => clearTimeout(timeID); 

    },[])
  
  
  
    return (
      <React.Fragment>
          <Box sx={{ ...style, width: 500 }}>
            <h2 id="child-modal-title" style={{ color: "#9b51e0"}}>MOBILE WALLET</h2>
            <p id="child-modal-description" style={{ paddingBlock: "10px"}}>Scan the QRCode to proceed</p>
            {isDataLoading ? <Loader /> :  <ErrorConnect setIsDataLoading={setIsDataLoading} setIsBackUpCode={setIsBackUpCode} setOpen={setOpen}/>}
          </Box>
      </React.Fragment>
    );
  }

  export default ChildModal;