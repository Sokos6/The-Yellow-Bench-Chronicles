import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TopBar from './TopBar';
import Main from './Main';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  html: {
    height: '100%',
  },
  grid: {
    height: '100vh',
  },
  paperLeft: {
    height: '90%',
  },
  paperTop: {
    height: '20%',
  },
  paperMain: {
    height: '90%',
  },
  paperRight: {},
  paperBottom: { height: '20%' },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: theme.palette.grey,
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={`${classes.paperTop} ${classes.paper}`}>
            <TopBar />
          </Paper>
        </Grid>
        <Grid item container xs={12} spacing={1}>
          <Grid item xs={10}>
            <Paper className={`${classes.paperMain} ${classes.paper}`}>
              <Main />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={`${classes.paperLeft} ${classes.paper}`}>
              RIGHT
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Footer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
