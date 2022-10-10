import React, { useState, useMemo } from 'react';
import CryptoJS from 'crypto-js';
import Axios from 'axios';

// source: https://cryptojs.gitbook.io/docs/
const encryptAES = (text = '') => {
  const key = CryptoJS.enc.Utf8.parse('abcdefghijklmnop');
  const iv = CryptoJS.enc.Utf8.parse('abcdefghijklmnop');

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: iv,
  }).toString(); // base64

  return encrypted;
};

export default (props) => {
  const [text, setText] = useState('');
  const encryptedText = useMemo(() => {
    return encryptAES(text);
  }, [text]);

  const [apiData, setApiData] = useState('');

  const getApi = () => {
    setApiData('loading...');

    const url = 'http://localhost:5274/api/Crypto/Decrypt';
    Axios.get(url, {
      params: {
        encryptedText,
      },
    })
      .then((res) => {
        setApiData(JSON.stringify(res.data));
      })
      .catch((err) => {
        setApiData('error: ' + err?.response?.data);
      });
  };

  console.log(apiData);

  return (
    <div style={{ padding: '20px' }}>
      <h4>ENCRYPTION</h4>
      <span>Plain text: </span>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>
        Encrypted text: <br></br> {encryptedText}
      </p>
      <button onClick={getApi}>Get decrpyted text from API</button>
      <p>Decrpyted text from API: {apiData}</p>
    </div>
  );
};
