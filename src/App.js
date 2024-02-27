import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";


function App() {
  return (
<>
<Layout>
  <Navbar/>
  <Routes />
  <Footer/>
  <Modal/>
</Layout>
</>
  );
}

export default App;
