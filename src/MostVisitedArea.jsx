import AppIcon from "./AppIcon";

export default function MostVisitedArea() {
  return (
    <section className="mostvisited-area">
      {["App 1", "App 2", "App 3", "App 4", "App +"].map((element) => {
        return <AppIcon key={element} name={element} />;
      })}
    </section>
  );
}
