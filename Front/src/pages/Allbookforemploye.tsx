import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Allbook.css';
import LivreCard from '../components/Livre';

const baseURL = 'http://localhost:3036/livre';

interface Livre {
  ID: number;
  Titre: string;
  Auteur: string;
  UrlImg: string;
}

const Allbook2 = () => {
  const [livres, setLivres] = useState<Livre[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const [selectedBook, setSelectedBook] = useState<Livre | null>(null);

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

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    const selectedBook = livres.find((livre) => livre.ID === selectedValue);
    setSelectedBook(selectedBook || null);
  };

  const handleDelete = async () => {
    if (selectedBook) {
      try {
        await axios.delete(`${baseURL}/${selectedBook.ID}`);
        const updatedLivres = livres.filter((livre) => livre.ID !== selectedBook.ID);
        setLivres(updatedLivres);
        setSelectedBook(null); 
      } catch (error) {
        console.error('Erreur lors de la suppression du livre:', error);
      }
    }
  };

  return (
    <>
      <div className="allbook-container">
        <div className="books-per-page">
          <label htmlFor="booksPerPage">Element par page:</label>
          <select id="booksPerPage" value={booksPerPage} onChange={handleBooksPerPageChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div className="select-bar">
          <select value={selectedBook?.ID || ''} onChange={handleSelect}>
            <option value="">Sélectionner un livre</option>
            {livres.map((livre) => (
              <option key={livre.ID} value={livre.ID}>
                {livre.Titre}
              </option>
            ))}
          </select>
          {selectedBook && (
            <button onClick={handleDelete}>Supprimer le livre</button>
          )}
        </div>

        <div className="book-list">
          {currentBooks.map((livre) => (
            <LivreCard
              key={livre.ID}
              title={livre.Titre}
              author={livre.Auteur}
              coverImage={livre.UrlImg} selected={false} onToggleSelection={function (): void {
                throw new Error('Function not implemented.');
              } }            />
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
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(livres.length / booksPerPage)}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Allbook2;
