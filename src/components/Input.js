import { Button, TextField, Checkbox, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  field: {
    display: 'block',
    marginRight: 30,
    marginLeft: 20
  },
  button: {
    padding: 15
  }
})


const Input = ({ inputText, setInputText, handleClick, checked, handleChecked }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <>
      <form className="input-form">
        <Checkbox checked={checked} onChange={handleChecked} />
        <TextField
          className={classes.field}
          value={inputText}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
        <ButtonGroup color="secondary" variant="outlined">
          <Button className={classes.button} type="submit" required title="byNumbers" onClick={handleClick('byNumbers')}>One</Button>
          <Button type="submit" required title="byString" onClick={handleClick('byString')}>Two</Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default Input;