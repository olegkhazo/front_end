import React from 'react';
import { useState } from 'react';
import ResultOutput from './components/UI/output/ResultOutput';
import classes from './App.module.css';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';

const URL = {
  names: 'https://api.genderize.io'
}

function getUrl(name, url) {
  return `${url}?name=${name}`;
}

function checkName(name) {
  return (name.length < 2 || name === '') ? false : true;
}

async function getGender(name) {
  let result = '';

  if(!checkName(name)) {
    result = "Name is incorrect, try again";
    return console.log(result);
  } 

  const urlString = getUrl(name, URL.names);
  try {
    let response = await fetch(urlString);
    result = await response.json();  
    return result;

  } catch (err) {
      alert(err);
  }

}


function App() {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  


  async function getData(event) {
    event.preventDefault();

    const currentGender = await getGender(name);
    const genderResult = {
      name,
      currentGender 
    }

    setGender(`${genderResult.currentGender.gender}`);
    return console.log(genderResult.currentGender.gender);

  }

  return (
    <div className={classes.App}>
      <h1 className={classes.header}>Find out gender by name</h1>
      <form action="" onSubmit={getData}>
        <MyInput
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <br />
        <MyButton onClick={getData}>SEND</MyButton>
      </form>
    </div>
  );
}

export default App;


