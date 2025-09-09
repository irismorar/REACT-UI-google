import TitleArea from "./TitleArea";
import SearchArea from "./SearchArea";
import MostVisitedArea from "./MostVisitedArea";

export default function MainArea() {
  return (
    <section className="main-frame-container">
      <TitleArea />
      <SearchArea />
      <MostVisitedArea />
    </section>
  );
}
