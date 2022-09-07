import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${tablet({ flexDirection: "column", margin: "20px 0px" })}
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${tablet({ fontSize: "30px" })}
`;

const Logo = styled.h2`
  color: #8a2b06;
  font-size: 24px;
`;

const Desc = styled.p`
  margin: 20px 0;
  ${tablet({ fontSize: "16px" })}

`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${tablet({ fontSize: "30px" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({ fontSize: "30px" })}
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({ fontSize: "20px" })}
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FOOD SERVICES</Logo>
        <Desc>
          Healthy food does not have merely one but numerous benefits. It helps
          us in various spheres of life. Healthy food does not only impact our
          physical health but mental health too. When we intake healthy fruits
          and vegetables that are full of nutrients, we reduce the chances of
          diseases. For instance, green vegetables help us to maintain strength
          and vigor. In addition, certain healthy food items keep away long-term
          illnesses like diabetes and blood pressure.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Userful Links</Title>
        <List>
          <ListItem>Jollof Rice</ListItem>
          <ListItem>Fried Rice</ListItem>
          <ListItem>Masala Dosa</ListItem>
          <ListItem>Dumplings</ListItem>
          <ListItem>Jägerbraten mit Spätzle. </ListItem>
          <ListItem>Dim Sum.</ListItem>
          <ListItem>Spaghetti</ListItem>
          <ListItem>Tagine</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          No. 35 Adani Mgbidi.
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +234 708 720 4807
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          albertukaegbu@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
