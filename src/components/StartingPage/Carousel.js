// import Carousel from 'react-bootstrap/Carousel';
import {Carousel} from "react-bootstrap"

function UncontrolledExample() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 500}}
          src="https://www.zamxahotels.com/guides/wp-content/uploads/2020/01/Jollof-and-Beef-or-Chicken-min-1024x735.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>All Nigeria Foods</h3>
          <p>Order for your healthy food here, we sell all sorts of Nigeria foods.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 500}}
          src="https://cdn.vanguardngr.com/wp-content/uploads/2015/09/food2.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>All Nigeria Foods</h3>
          <p>Order for your healthy food here, we sell all sorts of Nigeria foods.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 500}}
          src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>All Nigeria Foods</h3>
          <p>
          Order for your healthy food here, we sell all sorts of Nigeria foods.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 500}}
          src="https://i0.wp.com/www.thedreamafrica.com/wp-content/uploads/2019/06/Nigerian-Abacha-and-Ugba-e1563992608375.jpg?resize=690%2C645&ssl=1"
          alt="Forth slide"
        />

        <Carousel.Caption>
          <h3>All Nigeria Foods</h3>
          <p>
          Order for your healthy food here, we sell all sorts of Nigeria foods.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 500}}
          src="https://allnigerianfoods.com/wp-content/uploads/All-Nigerian-Foods.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>All Nigeria Foods</h3>
          <p>
            Order for your healthy food here, we sell all sorts of Nigeria foods.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;