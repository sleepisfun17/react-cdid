import React, { useState, useRef, useEffect } from 'react';

function InputName() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState({
    name: '',
    age: '',
    address: '',
  });

  // useEffect(() => {
  //   if (showInConsole) {
  //     setShowInDom(true);
  //   }
  // });

  return (
    <div>
      <div style={{ fontFamily: 'Quicksand' }}>
        <input
          type={'text'}
          placeholder={'Name'}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            console.log(title);
          }}
          style={{ fontFamily: 'Quicksand', margin: '10px 5px', padding: '10px 10px' }}
        ></input>
        <input
          type={'text'}
          placeholder={'Age'}
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
            console.log(title);
          }}
          style={{ fontFamily: 'Quicksand', margin: '10px 5px', padding: '10px 10px' }}
        ></input>
        <input
          type={'text'}
          placeholder={'Address'}
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
            console.log(title);
          }}
          style={{ fontFamily: 'Quicksand', margin: '10px 5px', padding: '10px 10px' }}
        ></input>
        <Button variant="outlined">Show</Button>
        <button style={{ fontFamily: 'Quicksand', margin: '10px 5px', padding: '10px 10px' }}>Show</button>
      </div>

      <div style={{ fontFamily: 'Quicksand', textAlign: 'center' }}>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Address: {address}</h3>
      </div>
    </div>
  );
}
