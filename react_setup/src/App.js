import logo from './logo.svg';
import './App.css';

function App() {
  let os=["Android","Blkberry","iPhone","Windows Phone"]
  let manufacturer=["Samsung","HTC","Micromax","Apple"]
  return (
    <div id="div">{<div>{<h1 class="heading">Mobile Operating System</h1>}
    {<ul>
      {os.map((elem)=>componentlist(elem))}
      </ul>}
    </div>},
    {<div>{<h1 class="heading">Mobile Manufacturers</h1>}
    <ul>{manufacturer.map(elem=> componentlist(elem))}</ul>
     
    </div>}
    
    </div>
    
  );
}

function componentlist(element)
{

return <li>{element}</li>
}




export default App;
