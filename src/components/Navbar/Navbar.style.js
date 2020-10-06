import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    backgroundColor: '#FFA69E'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkButton: {
    color: "#FFFFFF",
    textDecoration: "none"
  }
}));
