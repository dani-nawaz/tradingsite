import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'var(--white)',
    fontSize: '24px',
    lineHeight: '60px',
    fontWeight: '700',
  },
  text: {
    color: 'var(--darkpara)',
  },
  card: {
    backgroundColor: 'var(--blue)',

    // border: '#999',
    borderBottom: '1px solid #121629',
    boxShadow: 'none',
  },
}))

const Acc = ({ Questions }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {Questions.map((question) => {
        const { id, answer, title } = question
        return (
          <Accordion className={classes.card} key={id}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: 'var(--darkpara)' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.text}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
export default Acc
