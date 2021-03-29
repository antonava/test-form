// import  TextField  from '@material-ui/core/TextField'

// import { Button } from "@material-ui/core";

const Input = ({ inputText, setInputText, handleClick, checked, handleChecked }) => {
  
   const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return ( 
    <>
      <form className="input-form">
        <input type="checkbox" checked={checked} onChange={handleChecked}/>
        {/* <TextField 
        value={inputText}
        onChange={handleChange}
        className="input"
        /> */}
        <input 
        type="text"
        className="input"
        value={inputText}
        onChange={handleChange}
        />
        {/* <Button variant="contained" color="primary"></Button> */}
        <input className="input-submit" type="submit" value="Filter by number" required title="byNumbers" onClick={handleClick('byNumbers')} />
        <input className="input-submit" type="submit" value="Filter by string" required title="byString" onClick={handleClick('byString')} />
      </form>
    </>
   );
}
 
export default Input;