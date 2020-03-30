import Header from './Header';

const menuStyle = {
  marginLeft: 200,
  padding: 20,
  border: '5px solid #6495ED',
  backgroundColor: "#F0F8FF"
};

const layoutStyle = {
    margin: 40,
    marginLeft: 200,
    padding: 20,
    border: '1px solid #DDD',
    backgroundColor: "#FFF5EE"
  };

const Layout = props => (
    <div>
    <div style={menuStyle}><Header /></div>
  <div style={layoutStyle}>
    {props.children}
  </div>
  </div>
);

export default Layout;