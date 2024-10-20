import './index.css'
import { CiSearch } from "react-icons/ci";
import Header from "../Header";
import ProductCard from "../ProductCard";
import { useState } from "react";
import Filter from "../Filter";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const plantDetails = [
  {
    name: "Aloe Vera",
    image: "https://i.ibb.co/0mNvqLS/Aloe-vera.jpg",
  },
  {
    name: "Snake Plant",
    image: "https://i.ibb.co/cXgKjxL/Snake-plant.jpg",
  },
  {
    name: "Spider Plant",
    image: "https://i.ibb.co/ynNpVWL/Spider-plant.jpg",
  },
  {
    name: "Monstera",
    image: "https://i.ibb.co/980ZYG6/7973d62829a030074ad8b6ad34.jpg",
  },
  {
    name: "Pothos",
    image: "https://i.ibb.co/hHS2vPf/Pothos-plant.jpg",
  },
  {
    name: "Fiddle Leaf Fig",
    image: "https://i.ibb.co/xszd4LB/Fiddle-Leaf-Fig-plant.jpg",
  },
  {
    name: "Peace Lily",
    image: "https://i.ibb.co/ckQ9wRy/Peacy-lily.jpg",
  },
  {
    name: "Boston Fern",
    image: "https://i.ibb.co/nn8fWb0/Boston-Fern-plant.jpg",
  },
  {
    name: "Philodendron",
    image: "https://i.ibb.co/M6RtvVN/Philodendron.jpg",
  },
  {
    name: "Jade Plant",
    image: "https://i.ibb.co/gj3YdHz/Jade-plant.jpg",
  },
  {
    name: "Orchid",
    image: "https://i.ibb.co/qBR7Rkr/Orchid.jpg",
  },
  {
    name: "Succulent",
    image: "https://i.ibb.co/6rCPXzr/Succulent-plant.jpg",
  },
  {
    name: "Lavender",
    image: "https://i.ibb.co/FmLSDy0/Lavender.jpg",
  },
  {
    name: "Cactus",
    image: "https://i.ibb.co/yNhG1ky/Cactus.jpg",
  },
  {
    name: "Eucalyptus",
    image: "https://i.ibb.co/f8k1WJ1/Eucalyptus.jpg",
  },
  {
    name: "Calathea",
    image: "https://i.ibb.co/r0pGh3T/Calathea.jpg",
  },
  {
    name: "Lucky Bamboo",
    image: "https://i.ibb.co/pRF4jB8/Bamboo.jpg",
  },
];

const Home = () => {
  const [data, setData] = useState([...plantDetails]);
  var [currentPage, setCurrentPage] = useState(1);
  const cardsToDisplay = 3;
  const lastindex = currentPage * cardsToDisplay;
  const firstindex = lastindex - cardsToDisplay;
  const presentData = data.slice(firstindex, lastindex);
  const totalPages = Math.ceil(data.length / cardsToDisplay);

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage += 1));
    }
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1));
    
    }
  };

  return (
    <>
      <div className="offer" >
        <p> </p>
        <p>Free shipping on orders above 999/-</p>
        <p>call us on: +91 9876543210</p>
      </div>
      <Header />
      <div className="Search-container" >
        <CiSearch size={20} />
        <input type="search" placeholder="Search Plant" />
        <img
          src="https://i.ibb.co/R66nNWG/image-91.png"
          alt="image-91"
          border="0"
          style={{height:'20px'}}
          className="search-plant"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <div className="filter-container" >
          <Filter />
        </div>
        <div className="listing-container" >
          <div className='product-container'>
            {presentData.map((plant, i) => (
              <ProductCard key={i} details={plant} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="cart-button" onClick={onPrevPage}>
          <TbPlayerTrackPrevFilled /> Prev
        </button>
        <span
          style={{
            color: "white",
            background: "green",
            padding: "10px",
            borderRadius: "35%",
            margin: "5px",
          }}
        >
          {currentPage}
        </span>
        <button className="cart-button" onClick={onNextPage}>
          Next <TbPlayerTrackNextFilled />
        </button>
      </div>
      <br />
    </>
  );
};
export default Home;
