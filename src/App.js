import logo from "./logo.svg";
import "./App.css";

function App() {
  let service=[{btn:"Services",url:"##"},{btn:"Projects",url:"##"},{btn:"About",url:"##"}]
  return (
    <div>
      <div className="nav" id="nav">
        <div className="logo" >
          <img src="https://media.istockphoto.com/vectors/bakery-type-badge-label-with-hand-written-modern-calligraphy-vector-id1199399473?k=20&m=1199399473&s=612x612&w=0&h=VkjE5CzphKyKS0rgJST5BVZu0iE-QTKcapdoiS_PH5I=" className="spotify-logo"></img>
        </div>
        <div className="link">{service.map((e) => { 
          return <Service data={e}/>
        })}</div>
        <div className="btn">
        <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
}
function Service( {data}) { 
  console.log(data)
  return (
    <a href={data.url} className="link-a">{data.btn}</a>
)
}
export default App;
