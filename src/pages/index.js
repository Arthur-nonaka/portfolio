import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-head has-background-blue">
        <div className="container">
          <section className="section">
            <h1 className="title is-4 has-text-primary"> Arthur Nonaka Oda </h1>
            <h2 className="subtitle is-5 has-text-primary mt-3">
              Desenvolvedor
            </h2>
          </section>
        </div>
      </div>
      <div className="hero-body">
        <button className="button is-primary">Hello World</button>
      </div>
    </div>
  );
}
