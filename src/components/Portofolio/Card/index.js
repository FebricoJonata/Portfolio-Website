import './index.scss'

const Card = ({title, description, imageUrl, projectUrl}) =>{
    return (
    <div className="portfolio-card">
        <img src={imageUrl} alt={title} />
        <div className="card-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    </div>
    );
}

export default Card