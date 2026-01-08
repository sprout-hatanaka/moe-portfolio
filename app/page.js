import { CiCircleChevDown } from "react-icons/ci";

export default function Home() {
    return (
        <div className="contentBox">
            <h2 className="top">
                <span className="job">Engineer</span><br></br>
                MOE HATANAKA / Portfolio Site
            </h2>
            <div className="mainContent">
                <section className="message">
                    <p>職業訓練校等でWebアプリケーション制作を学んでいます。</p>
                    <br></br>
                    <p>「あったらいいな」を形にすることで、<br></br>
                    クライアント様やユーザ様が<br></br>
                    一歩前に踏み出すアシストをしたいです。
                    </p>
                </section>
                <section className="scroll">
                    <p className="scrollText">Please Scroll</p><p className="scrollIcon"><CiCircleChevDown size={30}/></p>
                </section>
            </div>
        </div>
    );
}

