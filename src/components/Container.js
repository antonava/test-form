import { useEffect, useState } from 'react';
import Input from './Input';
import Table from './Table';



const Container = (props) => {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [filterType, setFilterType] = useState('');


  const filterByNumbers = (arr, value) => {
    if (isNaN(value) || value === ' ') return [];
    return arr.filter((item) => item.length > value);
  }


  const filterByString = (arr, value, checked) => {
    if (checked === true) return arr.filter((item) => item.indexOf(value) > -1);
    return arr.filter((item) => item.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  const FILTER_TYPES = {
    byNumbers: filterByNumbers,
    byString: filterByString,
  };

  const filter = FILTER_TYPES[filterType];
  const result = filter ? filter(data, inputText, checked) : [];



  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((res) => res.json())
      .then(data => setData(data.data))
  }, [])


  const handleClick = (filterType) => (e) => {
    e.preventDefault();
    setFilterType(filterType);
  }

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