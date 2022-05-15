import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import Main from "../../organisms/main/Main";

const PageTemplate = ({ children, footer, header }) => {
  return (
    <div>
      <Header>{header}</Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </div>
  );
};

export default PageTemplate;
