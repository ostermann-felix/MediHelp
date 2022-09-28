import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
