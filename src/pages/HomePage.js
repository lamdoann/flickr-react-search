import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SearchForm from '../modules/search/components';

const Home = () => (
  <Container style={{ }}>
    <Grid
      textAlign='left'
      verticalAlign='middle'
      style={{ height: '100%', marginTop: '40px' }}
    >
      <SearchForm />
    </Grid>
  </Container>
);

export default Home;
