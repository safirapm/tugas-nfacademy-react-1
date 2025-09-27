import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            ></a>
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4">bookstore</span>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="/book" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="/team" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
