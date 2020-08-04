import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  buttonBox: {
    marginTop: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: theme.spacing(1),
    gridRowGap: theme.spacing(1),
  },
  input: {
    width: '100%',
  },
  code: {
    overflow: 'auto',
  },
  noTextDecoration: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}))
