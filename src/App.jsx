import Body from "./sections/Body";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="px-8 bg-gradient-to-b to-yellow-100 from-orange-50">
      <Header />
      <Hero />
      <Body />
    </div>
  );
}

export default App;
