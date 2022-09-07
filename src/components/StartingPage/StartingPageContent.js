import DetailedAnimation from '../products/DetailedAnimation';
import Footer from '../products/Footer';
import Products from '../products/Products';
import UncontrolledExample from './Carousel';
import classes from './StartingPageContent.module.css';
// import Carousel from 'react-bootstrap/Carousel'
import Modals from "../../components/Modal/Modals.jsx"

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <UncontrolledExample/>
      <DetailedAnimation/>
      <Products/>
      <Modals/>
      <Footer/>
    </section>
  );
};

export default StartingPageContent;
