import LikeCarousel from "@/components/LikeCarousel";

export const metadata = {
  title: "I Like",
};

export default function Home() {
    return (
        <div className="contentBox">
            <h2>
                I Like
                <span className="jp">ー好きなこと</span>
            </h2>
            <div className="mainContent">
                <div className="like">
                    <p>バイクで自然豊かな場所に出かけるのが好きです。</p>
                    
                    <LikeCarousel />
                    
                </div>

            </div>
        </div>
    );
};
