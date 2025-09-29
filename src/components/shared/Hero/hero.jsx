import "../../../styles.css";
import bookHero from "../../../img/book-hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              As Long As the Lemon Tree Grows
            </h1>
            <p className="lead">
              Salama Kassab was a pharmacy student when the cries for freedom
              broke out in Syria. She still had her parents and her big brother;
              she still had her home. She had a normal teenager’s life. Now
              Salama volunteers at a hospital in Homs, helping the wounded who
              flood through the doors daily...
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-md-4 offset-lg-1 p-0 m-auto d-flex justify-content-center">
            <img
              className="rounded-md-3"
              style={{
                objectFit: "contain",
                width: "auto",
                height: "500px",
                borderRadius: "8px",
              }}
              src={bookHero}
              alt="As Long As the Lemon Tree Grows"
            />
          </div>
        </div>
      </div>
    </>
  );
}
