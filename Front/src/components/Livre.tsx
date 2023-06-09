import React from 'react';
import '../style/Livre.css';
interface CardProps {
  title: string;
  author: string;
  coverImage: string;
  selected: boolean; 
  onToggleSelection: () => void;
}
  
const LivreCard = ({ title, author, coverImage, selected, onToggleSelection }: CardProps) => {
  return (
      <div className="Card">
        <img className="Card-image" src={coverImage} alt={title} />
        <div className="Card-content">
          <h2 className="Card-title">{title}</h2>
          <p className="Card-author">{author}</p>
          <p className='Livre'>Livre</p>
        </div>
      </div>
    );
  };

  export default LivreCard;