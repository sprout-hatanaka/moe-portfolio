const WorkCard = ({work}) => {
    return (
        <div className="work">
            <div className="workFigure"></div>
            <h3 className="worktTitle">{work.title}</h3>
            <p className="workTools">{work.tools.join(" / ")}</p>
        </div>
    )
}

export default WorkCard;
