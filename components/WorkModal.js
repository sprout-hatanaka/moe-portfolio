import { useEffect } from "react";

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
                        <div className="closeButton" onClick={() => setIsOpenModal(false)}>×</div>

                        <h1>{work.title}</h1>
                        <p>{work.tools}</p>
                        <p>{work.description}</p>


                    </div>
                </div>
            }
        </>
    )

}

export default WorkModal;
