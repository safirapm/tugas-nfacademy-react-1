import Lucy from "../img/team/1-lucy.jpg";
import Kakania from "../img/team/2-kakania.jpg";
import Vertin from "../img/team/3-vertin.jpg";

function Team() {
  return (
    <div className="container min-vh-100">
      <div className="text-center my-4">
        <h3>Our Team</h3>
        <p>Meet the people behind our success.</p>
      </div>
      <div className="row">
        {/* 1st Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Lucy}
            className="bd-placeholder-img rounded-circle"
            alt="Lucy"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Lucy</h3>
          <p>Founder of Bookstore</p>
        </div>

        {/* 2nd Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Kakania}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Kakania</h3>
          <p>Co-Founder of Bookstore</p>
        </div>

        {/* 3rd Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Vertin}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Vertin</h3>
          <p>Database Administrator</p>
        </div>
      </div>

      <div className="row mt-3">
        {/* 4th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Lucy}
            className="bd-placeholder-img rounded-circle"
            alt="Lucy"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Lucy</h3>
          <p>Founder of Bookstore</p>
        </div>

        {/* 5th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Kakania}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Kakania</h3>
          <p>Co-Founder of Bookstore</p>
        </div>

        {/* 6th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Vertin}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Vertin</h3>
          <p>Database Administrator</p>
        </div>
      </div>

      <div className="row mt-3">
        {/* 7th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Lucy}
            className="bd-placeholder-img rounded-circle"
            alt="Lucy"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Lucy</h3>
          <p>Founder of Bookstore</p>
        </div>

        {/* 8th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Kakania}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Kakania</h3>
          <p>Co-Founder of Bookstore</p>
        </div>

        {/* 9th Person */}
        <div className="col-lg-4 text-center">
          <img
            src={Vertin}
            className="bd-placeholder-img rounded-circle"
            alt="Vertin"
            height="140"
            width="140"
            style={{ objectFit: "cover" }}
          />
          <h3 className="mt-3 mb-1">Vertin</h3>
          <p>Database Administrator</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
