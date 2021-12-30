import React, { Fragment, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function App() {
  const [cadena, setCadena] = useState("");
  const [encryptado, setEncryptado] = useState("");
  const [desencryptado, setDesencryptado] = useState("");
  var CryptoJS = require("crypto-js");

  const atento = (event) => {
    setCadena(event.target.value)
  }

  const encryptar = () => {
    var ciphertext = CryptoJS.AES.encrypt(cadena, 'secret key 123').toString();
    setEncryptado(ciphertext);
  }

  const desencryptar = () =>{
    var bytes  = CryptoJS.AES.decrypt(encryptado, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDesencryptado(originalText);
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField id="" label="Ingrese texto" variant="outlined" name="cadena" onChange={atento}/>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={encryptar}>encryptar</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={desencryptar}>Desencryptar</Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={10}>
          <h1>resultado encryptado: {encryptado}</h1>
          <h1>resultado desencryptado: {desencryptado}</h1>
        </Grid>
      </Grid>

    </Fragment>
  );
}
export default App;