import Navigator from "../components/Navigator";
import Slide from "../components/Slide.tsx";
import BestSeller from "../components/BestSeller.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <Navigator/><Slide/>
        <BestSeller/>
    </div>
  );
};

export default Home;
