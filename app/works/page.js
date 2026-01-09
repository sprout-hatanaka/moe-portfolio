export const metadata = {
  title: "Works",
};

export default function Home() {
  return (
    <div className="contentBox">
        <h2>
            Works
            <span className="jp">ー制作物</span>
        </h2>
        <div className="mainContent">
            <section className="works">
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample①</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample②</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample③</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample④</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample⑤</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
                <div className="work">
                    <div className="workFigure"></div>
                    <h3 className="worktTitle">Work Sample⑥</h3>
                    <p className="workTools">JavaScript / React</p>
                </div>
            </section>
        </div>
    </div>
  );
};
