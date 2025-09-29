import "../../../styles.css";
import { Link } from "react-router-dom";
// import Login from "../Login/login";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="navbar-brand">
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4">bookstore</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menu dan Button */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="buttons">
              <button
                type="button"
                className="btn btn-outline-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
              >
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: "70px" }}></div>

      {/* Modal Login */}
      <div
        className="modal fade"
        id="signInModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h3 className="fw-bold mb-0 fs-2">Sign in to your account</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Sign in
                </button>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  <svg
                    className="bi me-1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use xlink:href="#google"></use>
                  </svg>
                  Sign in with Google
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  <svg
                    className="bi me-1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use xlink:href="#facebook"></use>
                  </svg>
                  Sign in with Facebook
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  <svg
                    className="bi me-1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use xlink:href="#github"></use>
                  </svg>
                  Sign in with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
