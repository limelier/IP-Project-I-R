import Link from 'next/link';

const divStyle = {
    margin: 10
}

const siteVisited = {
    color: "black",
    font: "italic bold 30px Georgia, serif"
};

const Header = () => (
  <div style={divStyle}>
    <Link href="/">
      <a style={siteVisited}>Home</a>
    </Link>
  </div>
);

export default Header;