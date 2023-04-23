import "./Footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return <footer className="footer">Copyright &copy; {currentYear}</footer>;
}
