import TopbarIcon from "./TopbarIcon";

export default function TopbarArea() {
  return (
    <section className="topbar-section">
      <TopbarIcon name={"Gmail"} />
      <TopbarIcon name={"Images"} />
      <div className="topbar-icon-apps"></div>
      <div className="topbar-icon-user">
        <div>i</div>
      </div>
    </section>
  );
}
