import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import "../styles/style-components/ProjectCard.css"

export default function ProjectCard({ logo, title, description, images, results }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{title}</h3>
                <img src={logo} loading='lazy' alt={title} className="project-logo" />
            </div>

            <p className="project-description">{description}</p>

            <div className="project-gallery">
                <button onClick={prevImage} className="gallery-btn prev">
                    <ChevronLeft />
                </button>

                <img 
                    src={images[currentImage]} 
                    alt={`${title} - imagen ${currentImage + 1}`}
                    className="gallery-image"
                    loading='lazy'
                />

                <button onClick={nextImage} className="gallery-btn next">
                    <ChevronRight />
                </button>

                <div className="gallery-indicators">
                    {images.map((_, index) => (
                        <span 
                            key={index}
                            className={`indicator ${index === currentImage ? 'active' : ''}`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}