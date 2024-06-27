// components/Layout.js
import Navbar from './Navbar';
import Banner from './Banner';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
