import { useEffect, useState } from 'react';
import Input from './Input'
import Table from './Table';

const filterByNumbers = (arr, value) => arr.filter((item) => item.length > value);
  // if (isNaN(value) || value === '') {
  //   return;
  // } else {
    // arr.filter((item) => item.length > value);
  // }
const filterByString = (arr, value) => arr.filter((item) => item.indexOf(value) > -1);


const FILTER_TYPES = {
  byNumbers: filterByNumbers,
  byString: filterByString,
};

const Container = (props) => {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [filterType, setFilterType] = useState('');

  const filter = FILTER_TYPES[filterType];
  const result = filter ? filter(data, inputText) : [];

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((res) => res.json())
      .then(data => setData(data.data))
  }, [])


  const handleClick = (filterType) => (e) => {
    e.preventDefault();
    setFilterType(filterType);
  }



  // const handleClickStr = (e) => {
  //   e.preventDefault();
  //   if (!isNaN(inputText)) {
  //     console.log('number');
  //   } else {
  //     console.log('str');
  //     if (checked === true) {
  //       result = data.filter((elem) => elem.indexOf(inputText) > -1);
  //       console.log(checked);
  //       console.log(result);
  //       setResult(result)
  //     } else {
  //       result = data.filter((elem) => elem.toLowerCase().indexOf(inputText.toLowerCase()) > -1);
  //       console.log(checked);
  //       console.log(result);
  //       setResult(result)
  //     }
  // inputText.toLowerCase();



  const handleChecked = () => {
    setChecked((prevState) => !prevState);
  };


  return (
    <>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        checked={checked}
        handleClick={handleClick}
        handleChecked={handleChecked}
      />
      <Table result={result} />
    </>
  );
}

export default Container;