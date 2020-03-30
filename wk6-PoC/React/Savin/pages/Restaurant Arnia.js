import Layout from "../components/Layout"

const customStyle = {
  font: "font bold 15px Georgia"
};

const inputStyle = {
  padding: 10
}

export default function Arnia() {
    return (
      <Layout>
        <p>This is the restaurant template page</p>
        <p>Ratings</p>
        <p style={customStyle}>Description: Bucatarie frantuzeasca fina</p>
        <p>Menu navbar</p>
        <p>Tags</p>
        <p>Review designated space</p>
        <form />
        <label>Write your review:</label><br></br>
        <input style={inputStyle}/>
      </Layout>
    );
  }