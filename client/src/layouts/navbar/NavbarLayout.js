import {Outlet} from 'react-router-dom';
// @mui
import {styled} from '@mui/material/styles';
//
import Header from '../header';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')({
  display: 'flex',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function NavbarLayout() {
  return (
    <StyledRoot>
      <Header/>
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
