'use client'

import WorkModal from "@/components/WorkModal";
import { useState } from "react";
import Image from "next/image";

const WorkCard = ({work}) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className="work">
            <div className="imageWrapper" onClick={() => setIsOpenModal(true)}>
                <Image
                    src={work.imageS}
                    alt="クリックでアプリケーション詳細画面が開きます"
                    width={210}
                    height={122}
                    style={{ cursor: 'pointer', border: '1px #aaa solid'}}
                />                
            </div>
            <h3 className="worktTitle">{work.title}</h3>
            <p className="workTools">{work.tools.join(" / ")}</p>
            <WorkModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} work={work}/>
        </div>
    )
}

export default WorkCard;
