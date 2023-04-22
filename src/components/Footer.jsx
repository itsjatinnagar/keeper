import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return <footer className="footer">Copyright &copy; {currentYear}</footer>;
};

export default Footer;
