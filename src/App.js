import Category from "./components/Category";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Nabvar from "./components/Nabvar";


function App() {
  return (
    <div >
       <Nabvar/>
       <Hero />
       <HeadlineCards />
       <Food />
       <Category />
    </div>
  );
}

export default App;
