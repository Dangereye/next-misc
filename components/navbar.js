import Link from "next/link";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">Logo.</a>
        </Link>
        <ul className="navbar__nav">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
