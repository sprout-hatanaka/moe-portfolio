'use client'

import WorkModal from "@/components/WorkModal";
import { useState } from "react";

const WorkCard = ({work}) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className="work">
            <div className="workFigure" onClick={() => setIsOpenModal(true)}></div>
            <h3 className="worktTitle">{work.title}</h3>
            <p className="workTools">{work.tools.join(" / ")}</p>
            <WorkModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} work={work}/>
        </div>
    )
}

export default WorkCard;
