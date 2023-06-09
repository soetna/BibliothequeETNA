import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Allbook.css';
import LivreCard from '../components/Livre';
import SearchBar from '../components/SearchBar';
import biblio from '../public/biblio.jpg';
import Box from '../components/Box';
import Footer from '../components/Footer';


const baseURL = 'http://localhost:3036/livre';

interface Livre {
  ID: number;
  Titre: string;
  Auteur: string;
  UrlImg: string;
}
 
const Allbook = () => {
  const [livres, setLivres] = useState<Livre[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const response = await axios.get<Livre[]>(`${baseURL}`);
        setLivres(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    };

    fetchLivres();
  }, []);

 
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = livres.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };

  const handleBooksPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    setBooksPerPage(selectedValue);
    setCurrentPage(1); 
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <div className="Top">
        <div className="SearchBar-container">
          <SearchBar />
        </div>
        <img className="Top-img" src={biblio} alt="logo_etna_white" />
      </div>
      <div className='Box'><Box /></div>
   <div className="Coup-de-coeur">
   <div className="VerticalBar2">|</div>
    <div className="Allbook-text">
      <h2 className="Allbook-desc">Nous vous présentons</h2>
      <h1 className="Allbook-title">Tout nos livre</h1>
  </div>
  </div>
  <div className="allbook-container">
      <div className="books-per-page">
        <label htmlFor="booksPerPage">Element par page:</label>
        <select id="booksPerPage" value={booksPerPage} onChange={handleBooksPerPageChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="book-list">
        {currentBooks.map((livre) => (
          <LivreCard
            key={livre.ID}
            title={livre.Titre}
            author={livre.Auteur}
            coverImage={livre.UrlImg} selected={false} onToggleSelection={function (): void {
              throw new Error('Function not implemented.');
            } } />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: Math.ceil(livres.length / booksPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(livres.length / booksPerPage)}>
          &gt;
        </button>
      </div>
    </div>
    <div className='separatorbot'></div>

    <Footer />
</>
  );
};

export default Allbook;
