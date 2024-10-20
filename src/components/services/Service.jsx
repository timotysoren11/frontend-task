import { useState } from 'react';
import '../../components/services/Service.css';
import cardImg from '../../assets/card-image.png';


const Service = () => {
  // State to track selected card indices
  const [selectedCards, setSelectedCards] = useState([]);
  
  // State to manage the hours and price inputs for each card
  const [cardsData, setCardsData] = useState(
    [
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
      { title: "Graph Pravesh", sub: "( गृह प्रवेश)", hours: "", price: "", isEditing: false },
     
    ]
  );

  // Handler for selecting/deselecting multiple cards
  const handleCardClick = (index) => {
    if (selectedCards.includes(index)) {
      // Remove from selectedCards if already selected
      setSelectedCards(selectedCards.filter((selectedIndex) => selectedIndex !== index));
    } else {
      // Add to selectedCards if not selected
      setSelectedCards([...selectedCards, index]);
    }
  };

  // Handler to toggle editing mode and save input data
  const handleEditClick = (index) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card, i) =>
        i === index
          ? { ...card, isEditing: !card.isEditing } 
          : card
      )
    );
  };

  // Handler for input changes
  const handleInputChange = (index, field, value) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card, i) =>
        i === index
          ? { ...card, [field]: value }
          : card
      )
    );
  };

  return (
    <div className="category-container">
      <div className="category">
        <h1>Service Select</h1>

        <div className="search-filter">
          <input type="text" placeholder='Search' className="search-box" />
          <select className="filter-select">
            <option value="">Add filter</option>
            <option value="puja">Puja Services</option>
            <option value="hawan">Hawan Services</option>
          </select>
        </div>

        <div className="card-container">
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className={`cards ${selectedCards.includes(index) ? 'selected' : ''}`} 
              onClick={() => handleCardClick(index)}
            >
              <div className="category-img">
                <img src={cardImg} alt="card" />
              </div>
              <div className="category-content">
                <h2>{card.title}</h2>
                <h3>{card.sub}</h3>
                <div className="input-container">
                  {/* Hours input */}
                  <input 
                    type="text" 
                    placeholder="Add Hours" 
                    value={card.hours} 
                    onChange={(e) => handleInputChange(index, 'hours', e.target.value)}
                    disabled={!card.isEditing} 
                  />
                  {/* Price input */}
                  <input 
                    type="text" 
                    placeholder="Add Price" 
                    value={card.price} 
                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                    disabled={!card.isEditing} 
                  />
                </div>
                <button className='edit-btn' onClick={() => handleEditClick(index)}>
                  {card.isEditing ? 'Save' : 'Edit'} 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
