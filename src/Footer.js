import { FooterContainer } from './styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return ( 
    <FooterContainer>
      <p>© {currentYear} Code Assistant</p>
    </FooterContainer>
  );
}
 
export default Footer;