import Link from 'next/link';
import Layout from '../components/Layout';


const siteVisited = {
    color: "black",
    font: "italic bold 15px Georgia, serif"
};

const imageStyle = {
    border: "1.5px solid #000000"
}

const PostLink = props => (
      <Link href={`/${props.title}`}>
        <a>{props.title}</a>
      </Link>
  );


const restaurantTemplate = {
    margin: 10,
    padding: 20,
    border: '0.2px solid #000000',
    backgroundColor: "#3CB371"
};

const restaurantName = {
    font: "Arial 20px"
};

const description = {
    margin: 10,
    padding: 10,
    border: '1px solid #000000',
    backgroundColor: "#FFF0F5"
}

const restaurantTags = {
    display: "inline-block",
    padding: 7,
    backgroundColor: "#FFA07A",
    marginLeft: 15
};

export default function Index() {
  return (
    <Layout>
        <h1>Main Page</h1>
        <div style={restaurantTemplate}>
            <PostLink title="Le Bistrot Francais" style={restaurantName} />
            <div><img src="../images/LeBistrot.jpg" style={imageStyle}></img></div>
            <p style={description}>Bucatarie frantuzeasca fina</p>
            <ul>
                <li style={restaurantTags}>Mancare frantuzeasca</li>
                <li style={restaurantTags}>Restaurant cu specific</li>
                <li style={restaurantTags}>Rezervari</li>
            </ul>
        </div>
        <div style={restaurantTemplate}>
            <PostLink title="Restaurant Moara de Foc" />
            <div><img src="../images/Moara.jpg" style={imageStyle}></img></div>
            <ul>
                <li style={restaurantTags}>Pizza</li>
                <li style={restaurantTags}>Cafenea</li>
                <li style={restaurantTags}>Rezervari</li>
            </ul>
        </div>
        <div style={restaurantTemplate}>
            <PostLink title="Restaurant Arnia" />
            <div><img src="../images/RestArnia.jpg" style={imageStyle}></img></div>
            <ul>
                <li style={restaurantTags}>Bar</li>
                <li style={restaurantTags}>Fast-Food</li>
                <li style={restaurantTags}>Pizza</li>
            </ul>
        </div>
    </Layout>
  );
}