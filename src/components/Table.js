const Table = ({ result }) => {

  return (
    <div className="table">
    <ul>
      {result.map((elem) => (
        <li key={elem.toString()}>{elem}</li>
      ))} 
    </ul>
    </div>
  );
}

export default Table;