import React from "react";
import bookHero from "../img/book-hero.jpg";
import Book1 from "../img/book-home/book-1.jpg";
import Book2 from "../img/book-home/book-2.jpg";
import Book3 from "../img/book-home/book-3.jpg";
import Book4 from "../img/book-home/book-4.jpg";
import Book5 from "../img/book-home/book-5.jpg";
import Book6 from "../img/book-home/book-6.jpg";
import Book7 from "../img/book-home/book-7.jpeg";
import Book8 from "../img/book-home/book-8.jpg";
import Book9 from "../img/book-home/book-9.jpg";
import Book10 from "../img/book-home/book-10.jpg";
import Book11 from "../img/book-home/book-11.jpg";
import Book12 from "../img/book-home/book-12.jpg";
import "./styles.css";
function Home() {
  return (
    <>
      {/*Hero*/}
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
      {/*Best Seller*/}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Collection of the best books from various authors around the
              world. These books are highly recommended and have received great
              reviews from readers.
            </p>
            <p>
              <a href="#best-seller" className="btn btn-primary my-2 me-2">
                View All
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </section>
      <div id="best-seller" className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/*Book 1*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">The Alchemist</h5>
                  <h6>by Paulo Coelho</h6>
                </div>
                <img
                  src={Book1}
                  className="card-img-top"
                  alt="The Alchemist"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Paulo Coelho's masterpiece tells the mystical story of
                    Santiago, an Andalusian shepherd boy who yearns to travel in
                    search of a worldly treasure. His quest will lead him to
                    riches far different—and far more satisfying—than he ever
                    imagined.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp160.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 2*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">Turtles All the Way Down</h5>
                  <h6>by John Green</h6>
                </div>
                <img
                  src={Book2}
                  className="card-img-top"
                  alt="Turtles All the Way Down"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Aza Holmes never intended to pursue the disappearance of
                    fugitive billionaire Russell Pickett, but there’s a
                    hundred-thousand-dollar reward at stake and her Best and
                    Most Fearless Friend, Daisy, is eager to investigate. So
                    together, they navigate...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp230.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 3*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">The Handmaid's Tale</h5>
                  <h6>by Margaret Atwood</h6>
                </div>
                <img
                  src={Book3}
                  className="card-img-top"
                  alt="The Handmaid's Tale"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Set in the near future, it describes life in what was once
                    the United States and is now called the Republic of Gilead,
                    a monotheocracy that has reacted to social unrest and a
                    sharply declining birthrate by reverting to, and going
                    beyond...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp180.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 4*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">1984</h5>
                  <h6>by George Orwell</h6>
                </div>
                <img
                  src={Book4}
                  className="card-img-top"
                  alt="1984"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    A masterpiece of rebellion and imprisonment where war is
                    peace freedom is slavery and Big Brother is watching.
                    Thought Police, Big Brother, Orwellian - these words have
                    entered our vocabulary because of George Orwell's classic
                    dystopian novel 1984.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp85.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 5*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">The Rachel Incident</h5>
                  <h6>by Caroline O'Donoghue</h6>
                </div>
                <img
                  src={Book5}
                  className="card-img-top"
                  alt="The Rachel Incident"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Rachel is a student working at a bookstore when she meets
                    James, and it’s love at first sight. Effervescent and
                    insistently heterosexual, James soon invites Rachel to be
                    his roommate and the two begin a friendship that changes
                    their lives.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp150.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 6*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">She Who Became the Sun</h5>
                  <h6>by Shelley Parker-Chan</h6>
                </div>
                <img
                  src={Book6}
                  className="card-img-top"
                  alt="She Who Became the Sun"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    In 1345, China lies under harsh Mongol rule. For the
                    starving peasants of the Central Plains, greatness is
                    something found only in stories. When the Zhu family’s
                    eighth-born son, Zhu Chongba, is given a fate of greatness,
                    everyone is...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp270.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 7*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">The Midnight Library</h5>
                  <h6>by Matt Haig</h6>
                </div>
                <img
                  src={Book7}
                  className="card-img-top"
                  alt="The Midnight Library"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    When Nora Seed finds herself in the Midnight Library, she
                    has a chance to make things right. Up until now, her life
                    has been full of misery and regret. She feels she has let
                    everyone down, including herself. But things are about to
                    change.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp240.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 8*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">Normal People</h5>
                  <h6>by Sally Rooney</h6>
                </div>
                <img
                  src={Book8}
                  className="card-img-top"
                  alt="Normal People"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    At school Connell and Marianne pretend not to know each
                    other. He’s popular and well-adjusted, star of the school
                    soccer team while she is lonely, proud, and intensely
                    private. But when Connell comes to pick his mother up from
                    her housekeeping...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp175.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 9*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">Iron Widow</h5>
                  <h6>by Xiran Jay Zhao</h6>
                </div>
                <img
                  src={Book9}
                  className="card-img-top"
                  alt="Iron Widow"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    When 18-year-old Zetian offers herself up as a
                    concubine-pilot, it's to assassinate the ace male pilot
                    responsible for her sister's death. But she gets her
                    vengeance in a way nobody expected—she kills him through the
                    psychic link...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp250.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 10*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">House of Earth and Blood</h5>
                  <h6>by Sarah J. Maas</h6>
                </div>
                <img
                  src={Book10}
                  className="card-img-top"
                  alt="House of Earth and Blood"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Bryce Quinlan had the perfect life-working hard all day and
                    partying all night-until a demon murdered her closest
                    friends, leaving her bereft, wounded, and alone. When the
                    accused is behind bars but the crimes start up again, Bryce
                    finds herself at the...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp300.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 11*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">The Little Prince</h5>
                  <h6>by Antoine de Saint-Exupéry</h6>
                </div>
                <img
                  src={Book11}
                  className="card-img-top"
                  alt="The Little Prince"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    A pilot stranded in the desert awakes one morning to see,
                    standing before him, the most extraordinary little fellow.
                    "Please," asks the stranger, "draw me a sheep." And the
                    pilot realizes that when life's events are too difficult to
                    understand...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp94.000</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*Book 12*/}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-title pt-3 pb-2 text-center">
                  <h5 className="mb-1">To Kill A Mockingbird</h5>
                  <h6>by Harper Lee</h6>
                </div>
                <img
                  src={Book12}
                  className="card-img-top"
                  alt="To Kill A Mockingbird"
                  height="225"
                  style={{ objectFit: "contain" }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    A lawyer's advice to his children as he defends the real
                    mockingbird of Harper Lee's classic novel. The conscience of
                    a town steeped in prejudice, violence and hypocrisy is
                    pricked by the stamina of one man's struggle for justice.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        Buy Now
                      </button>
                    </div>
                    <strong>Rp179.000</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
