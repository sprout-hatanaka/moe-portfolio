import { workdatas } from "@/data/workdatas";
import WorkCard from "@/components/WorkCard";

export const metadata = {
  title: "Works",
};

export default function Home() {
  return (
    <div className="contentBox">
        <h2>
            Works
            <span className="jp">制作実績</span>
        </h2>
        <div className="mainContent">
            <section className="works">

                {workdatas.map((work) => (
                    <WorkCard key={work.slug} work={work}/>
                ))}

            </section>
        </div>
    </div>
  );
};
