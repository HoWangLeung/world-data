import React from "react";
import "./Chart.scss";
import { Route, Switch } from "react-router-dom";
import CustomDrawer from "./Components/Drawer/CustomDrawer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BarChart from './Components/BarChart/BarChart'
import WorldMapMissingMigrants from './Components/FreeCodeCamp/WorldMapMissingMigrants/WorldMapMissingMigrants'
import { useData } from './Components/BarChart/useData'
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarChartLabourForce from './Components/Charts/BarChartLabourForce/BarChartLabourForce'
import ScatterPlotCountry from "./Components/Charts/ScatterPlot/ScatterPlotCountry";
import { useDataScatter } from "./Components/Charts/ScatterPlot/use-data-scatter";
import ScatterPlot from './Components/FreeCodeCamp/ScatterPlot/ScatterPlot'
import useWindowSize from "./Components/Util/Common/useWindowSize";
import BubblePopulation from "./Components/Charts/BubbleChart/Population/BubblePopulation";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const size = useWindowSize();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const chart_data_4 = useDataScatter()

  if (!chart_data_4) {
    return null;
  }
  return (
    <div className="App">
      <AppBar style={{ background: '#137B80' }} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ fontFamily: 'Segoe UI' }} >
            D3.js Charts Collection
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />

      <Switch>
        <Route exact path="/" render={props => <WorldMapMissingMigrants size={size} {...props} />} />
        <Route exact path="/barChart/1" render={props => <BarChart size={size}  {...props} />} />
        <Route exact path="/barChart/2" render={props => <BarChartLabourForce size={size}  {...props} />} />
        <Route exact path="/scatterPlot/1" render={props => <ScatterPlotCountry data={chart_data_4}  {...props} />} />
        <Route exact path="/scatterPlot/2" render={props => <ScatterPlot data={chart_data_4}  {...props} />} />
        <Route exact path="/bubbleChart/1" render={props => <BubblePopulation    {...props} />} />
      </Switch>


    </div>
  );
}
