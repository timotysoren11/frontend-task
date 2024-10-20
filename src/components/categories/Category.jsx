import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/categories/Category.css';
import cardImg from '../../assets/card-image.png';

  const Category = () => {
  // State to track the selected card index
    const [selectedCard, setSelectedCard] = useState(null);

  // Cards object
  const cardsObj = [
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
        {
            title: "Graph Pravesh ( गृह प्रवेश)",
            para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
        },
    
        ];

  // Handler for selecting/deselecting a card
  const handleCardClick = (index) => {
    if (selectedCard === index) {
      setSelectedCard(null); 
    } else {
      setSelectedCard(index); 
    }
  };
  //Next button to show services
  const navigate = useNavigate();

    const handleButtonNext2 = (e) =>{
        e.preventDefault();
        navigate('/service');
    }
  
  return (
    <div className="category-container">
      <div className="category">
        <h1>Categories of Pooja</h1>
        <div className="card-container">
          {cardsObj.map((card, index) => (
            <div 
              key={index} 
              className={`cards ${selectedCard === index ? 'selected' : ''}`} 
              onClick={() => handleCardClick(index)}
            >
              <div className="category-img">
                <img src={cardImg} alt="card" />
              </div>
              <div className="category-content">
                <h2>{card.title}</h2>
                <p>{card.para}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='card-next' onClick={handleButtonNext2}>Next</button>
      </div>
    </div>
  );
}

export default Category;






























// import '../../components/categories/Category.css'
// import cardImg from '../../assets/card-image.png'

// const Category = () => {

//     //cards object 
//     const cardsObj = [
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },
//         {
//             title: "Graph Pravesh ( गृह प्रवेश)",
//             para: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps."
//         },

//     ];

//   return (
//     <div className="category-container">
//         <div className="category">
//             <h1>Categories of Pooja</h1>
//             <div className="card-container">
//                 {cardsObj.map((card, index) => (<div key={index} className="cards">
//                     <div className="category-img">
//                         <img src={cardImg} alt="card" />
//                     </div>
//                     <div className="category-content">
//                         <h2>{card.title}</h2>
//                         <p>{card.para}</p>
//                     </div>
//                 </div>))}
//             </div>
//             <button className='card-next'>Next</button>
//         </div>
//     </div>
//   )
// }

// export default Category