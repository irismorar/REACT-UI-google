import "./App.css";
import TopbarArea from "./TopbarArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";

export default function App() {
  return (
    <section className="display-container">
      <TopbarArea />
      <MainArea />
      <FooterArea />
    </section>
  );
}
