import HilightsOfSuccessfulEvent from "../components/HilightsOfSuccessfulEvent.jsx";
import Header from '../components/Header';
import Eventpage from '../components/Eventpage';
import Upcoming from "../components/Upcoming.jsx";
import Fifth from '../components/Fifth.jsx';

const App = () => {
  return (
    <>
    {/* <Header/> */}
      <Eventpage/>
      <Upcoming/>
    <div className="font-bold">
      <HilightsOfSuccessfulEvent />
    </div>
     <Fifth/>
    </>
  )
}

export default App
