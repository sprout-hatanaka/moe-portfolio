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
                    <p className="scrollText">
                        {/* Please Scroll */}
                        <span className="letter" style={{"--index": 0}}>P</span>
                        <span className="letter" style={{"--index": 1}}>l</span>
                        <span className="letter" style={{"--index": 2}}>e</span>
                        <span className="letter" style={{"--index": 3}}>a</span>
                        <span className="letter" style={{"--index": 4}}>s</span>
                        <span className="letter" style={{"--index": 5}}>e</span>
                        <span className="letter" style={{"--index": 6}}>&nbsp;</span>
                        <span className="letter" style={{"--index": 7}}>S</span>
                        <span className="letter" style={{"--index": 8}}>c</span>
                        <span className="letter" style={{"--index": 9}}>r</span>
                        <span className="letter" style={{"--index": 10}}>o</span>
                        <span className="letter" style={{"--index": 11}}>l</span>
                        <span className="letter" style={{"--index": 12}}>l</span>
                    </p><p className="scrollIcon"><CiCircleChevDown size={30}/></p>
                </section>
            </div>
        </div>
    );
}

