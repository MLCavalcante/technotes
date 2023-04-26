import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Mern informática!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown São Paulo city, Mern informática
          provides a trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Mern informática
          <br />
          R. Santa Ifigenia, 64 - C 01
          <br />
          Santa Ifigênia, São Paulo - SP
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Mongo Db Silva </p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
