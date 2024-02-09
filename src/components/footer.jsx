import "../App.css";
const Footer = () => {
  return (
    <div className="text-center footer  pb-3">
      <p className=" m-0">
        Copyright ©{new Date().getFullYear()}
        <a
          className="text-decoration-none text-white"
          href="https://github.com/xdardevilx">
          Creato da Valerio Galletti
        </a>
      </p>
    </div>
  );
};

export default Footer;
