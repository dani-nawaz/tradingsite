import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    // backgroundColor: '#2f324f',
    border: '1px solid #b8c1ec',
    borderRadius: '05px',
  },
  select: {
    color: '#fffffe',
  },
}))

export default function ControlledOpenSelect() {
  const classes = useStyles()
  const [country, setCountry] = React.useState('')

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <Select
          className={classes.select}
          labelId='demo-controlled-open-select-label'
          id='demo-controlled-open-select'
          value={country}
          onChange={handleChange}
          placeholder='Placeholder'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
