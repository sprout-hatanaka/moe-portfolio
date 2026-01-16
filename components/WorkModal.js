import { useEffect } from "react";
import Image from "next/image";

const WorkModal = ({isOpenModal, setIsOpenModal, work}) => {

    // モーダル表示中に背面のスクロールを禁止
    useEffect(() => {
        if (isOpenModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpenModal]);

    return (
        <>
            {isOpenModal &&
                <div className="modalBg">
                    <div className="modalContent">
                        <div className="closeButton" onClick={() => setIsOpenModal(false)}>
                            <div className="x1"></div>
                            <div className="x2"></div>
                        </div>

                        <div className="modalLeft">
                            {work.imageM ? (
                                <Image
                                src={work.imageM}
                                alt="Webアプリケーションの画面"
                                fill // 親要素に合わせてサイズをフィットさせる
                                style={{ objectFit: 'cover', border: '1px #aaa solid' }}
                                />
                            ) : (
                                <div className="dummyBoxM"><p>Coming Soon...</p></div>
                            )}
                        </div>

                        <div className="modalRight">
                            <h1>{work.title}</h1>
                            <p className="tools">{work.tools.join(" / ")}</p>
                            <div className="links">
                                <a href={work.gitUrl} target="_blank">GitHub</a>
                                &nbsp;&nbsp;
                                <a href={work.vercelUrl} className="vercel">Vercel</a>
                            </div>
                            <div className="description">
                                {work.description.map((line, i) => (
                                    <p key={i}>
                                    {line}
                                    <br />
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default WorkModal;
