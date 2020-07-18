import React from 'react';
import { Grid, Typography, makeStyles, useTheme } from '@material-ui/core';
import vision from '../assets/vision.svg';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const Revolution = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer}>
        <Typography variant="h2" style={{ fontFamily: 'Pacifico' }}>
          Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through Binocuars"
            style={{ maxWidth: '40em', marginRight: '5em' }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus nisl tincidunt eget nullam. Quis vel eros donec ac odio
              tempor orci dapibus.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Semper risus in hendrerit gravida rutrum quisque non tellus orci.
              Magna ac placerat vestibulum lectus mauris ultrices eros in
              cursus. Metus aliquam eleifend mi in nulla posuere sollicitudin
              aliquam.Mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Gravida cum sociis natoque penatibus et magnis. Malesuada nunc vel
              risus commodo viverra maecenas. Tempus egestas sed sed risus
              pretium quam vulputate.Mattis vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Gravida cum sociis natoque penatibus et magnis. Malesuada nunc vel
              risus commodo viverra maecenas. Tempus egestas sed sed risus
              pretium quam vulputate.Mattis vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Semper risus in hendrerit gravida rutrum quisque non tellus orci.
              Magna ac placerat vestibulum lectus mauris ultrices eros in
              cursus. Metus aliquam eleifend mi in nulla posuere sollicitudin
              aliquam.Mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan tortor.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item container direction="column" lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus nisl tincidunt eget nullam. Quis vel eros donec ac odio
              tempor orci dapibus.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Semper risus in hendrerit gravida rutrum quisque non tellus orci.
              Magna ac placerat vestibulum lectus mauris ultrices eros in
              cursus. Metus aliquam eleifend mi in nulla posuere sollicitudin
              aliquam.Mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Gravida cum sociis natoque penatibus et magnis. Malesuada nunc vel
              risus commodo viverra maecenas. Tempus egestas sed sed risus
              pretium quam vulputate.Mattis vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Gravida cum sociis natoque penatibus et magnis. Malesuada nunc vel
              risus commodo viverra maecenas. Tempus egestas sed sed risus
              pretium quam vulputate.Mattis vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              Semper risus in hendrerit gravida rutrum quisque non tellus orci.
              Magna ac placerat vestibulum lectus mauris ultrices eros in
              cursus. Metus aliquam eleifend mi in nulla posuere sollicitudin
              aliquam.Mattis vulputate enim nulla aliquet porttitor lacus luctus
              accumsan tortor.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through Binocuars"
            style={{ maxWidth: '40em', marginRight: '5em' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
