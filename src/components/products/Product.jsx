import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useHistory, Link } from "react-router-dom";
import { displayImg, displayImgHigher, displayImgHigher2, tablet3 } from "../../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 380px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
  ${displayImgHigher({minWidth: "250px", height: "250px"})}
  ${displayImgHigher2({minWidth: "350px", height: "350px"})}
  ${displayImg({minWidth: "250px", height: "250px"})}
  ${tablet3({minWidth: "150px", height: "150px"})}

`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;

const Image = styled.img`
  height: 55%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    transition: all 1.5s ease;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 25%;
  background-color: #fff;
  font-size: 30px;
  font-weight: 500;
  ${displayImg({bottom: "18%", fontSize: "20px"})}
  ${tablet3({bottom: "10%", fontSize: "18px"})}
  ${displayImgHigher({bottom: "20%"})}

`;

const ItemTitle = styled.h3`
  position: absolute;
  top: 0;
  font-weight: 600;
`

const PriceDetails = styled.div`
  padding: 5px 20px;
  ${displayImg({padding: "3px 15px"})}
  ${tablet3({padding: "2px 12px"})}
`;
const Product = ({ item }) => {
  const history = useHistory();

  

  const separator = (amt) => {
    var str = amt.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <ItemTitle>{item.title}</ItemTitle>
        <Icon onClick={() => history.push("/auth")}>
          <Badge  color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Icon>
        <Link to={{ pathname: "https://unsplash.com/s/photos/healthy-food" }} target="_blank">
          <Icon>
            <SearchTwoToneIcon />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Price>
          <PriceDetails>{`₦${separator(item.price)}`}</PriceDetails>
        </Price>
      </Info>
    </Container>
  );
};

export default Product;
