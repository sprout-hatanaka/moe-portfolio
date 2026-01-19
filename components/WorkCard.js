'use client'

import WorkModal from "@/components/WorkModal";
import { useState } from "react";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TfiNewWindow } from "react-icons/tfi";

const WorkCard = ({work}) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className="work">
            {work.status ? (
                <div className="imageWrapperOpen" onClick={() => setIsOpenModal(true)}>
                    <Image
                        src={work.imageS}
                        alt="クリックでアプリケーション詳細画面が開きます"
                        width={210}
                        height={122}
                        style={{ cursor: 'pointer', border: '1px #aaa solid'}}
                    />

                </div>
            ) : (
                <div className="imageWrapperClose">
                    <p>Coming Soon...</p>
                </div>
            )}

            <div className="titleIcon">
                <h3 className="worktTitle">{work.title}</h3>&nbsp;&nbsp;<TfiNewWindow />
            </div>
            <p className="workTools">{work.tools.join(" / ")}</p>
            <WorkModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} work={work}/>
        </div>
    )
}

export default WorkCard;
