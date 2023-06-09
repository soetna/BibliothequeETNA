import { useEffect, useState } from 'react';
import '../style/App.css';
import Navbar from '../components/Navbar';
import biblio from '../public/biblio.jpg';
import SearchBar from '../components/SearchBar';
import Info from '../components/Info';
import axios from 'axios';
import Box from '../components/Box';
import Coeur from '../components/Coeur';
import Footer from '../components/Footer';

function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  interface NewsItem {
    title: string;
    description: string;
    published_at: string;
    language: string;
    image: string;
  }

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'http://api.mediastack.com/v1/news',
        {
          params: {
            access_key: 'f5700eae67a9988e76aa8b5e64a1f690',
            languages: 'fr',
          },
        }
      );
      setNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (searchTerm: any) => {
    console.log('Terme de recherche :', searchTerm);
  };

  return (
    <>
      <Navbar />
      <div className="Top">
        <div className="SearchBar-container">
          <SearchBar />
        </div>
        <img className="Top-img" src={biblio} alt="logo_etna_white" />
      </div>
      <div className="App">
        <div className='Box'><Box /></div>
        <div className="Coup-de-coeur">
          <div className="VerticalBar">|</div>
          <div className="Coup-de-coeur-container">
            <div className="Coup-de-coeur-text">
              <h2 className="Coup-de-coeur-desc">Les actualités</h2>
              <h1 className="Coup-de-coeur-title">à la une</h1>
            </div>
          </div>
        </div>
        <div className='info'><Info /></div>
        <div className="Coup-de-coeur">
          <div className="VerticalBar">|</div>
          <div className="Coup-de-coeur-container">
            <div className="Coup-de-coeur-text">
              <h2 className="Coup-de-coeur-desc">Nous vous présentons</h2>
              <h1 className="Coup-de-coeur-title">Nos coups de cœur </h1>
            </div>
          </div>
        </div>
        <Coeur />
        <Footer />
      </div>
    </>
  );
}

export default Home;