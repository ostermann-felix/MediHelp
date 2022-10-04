import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
