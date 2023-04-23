import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <a href="/" className="logo">
                    <span>Keeper</span>
                </a>
                <span className="avatar">J</span>
            </div>
        </header>
    );
}
