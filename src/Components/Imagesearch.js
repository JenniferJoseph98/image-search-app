import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./image.css";
function Imagesearch() {
  const [photos, setPhotos] = useState([]);
  let navigate = useNavigate();
  let array = [];
  const [search, setSearch] = useState("");
  const [pageno, setPageno] = useState(1);
  const [prevbtn, setPrevbtn] = useState(false);
  const [btn, setBtn] = useState(false);

  function increment() {
    if (pageno === 1) {
      setPrevbtn(true);
    }
    setPageno((prev) => prev + 1);
    console.log(pageno);
    handleSubmit();
  }
  function decrement() {
    if (pageno !== 1) {
      setPageno((prev) => prev - 1);
      handleSubmit();
      console.log(pageno);
    } else {
      setPrevbtn(false);
    }
  }
  const clientid = "UicQ2fw06HYX4acGix6zzzSSJ46tLCs6ZwKxfutfcXA";
  function handleSubmit() {
    setBtn(true);
    let url = `https://api.unsplash.com/search/photos?page=${pageno}&per_page=10&query=${search}&client_id=${clientid}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setPhotos(res.data.results);
        console.log(res.data.results);
      })
      .catch((e) => console.log(e));
  }
  function bookmark(e) {
    if (
      window.confirm(
        "Image added to bookmark,click bookmark button to see you collections"
      )
    ) {
      console.log("Bookmark session");
      array.push(e.target.src);
      console.log(array);
      alert("Image added");
    } else {
      alert("Image not added");
    }
  }

  return (
    <div id="fullcontainer">
      <div className="header">
        <h1 id="heading">React Photo Search</h1>
        <button
          id="bookmark"
          onClick={() => {
            navigate("/bookmark", {
              state: array,
            });
          }}
        >
          Bookmark
        </button>
      </div>
      <div id="searchitems">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="     search the image you want"
        />
        <button id="button" onClick={(e) => handleSubmit(e)}>
          search
        </button>
      </div>
      {btn && (
        <div id="pagination">
          {prevbtn && <button onClick={() => decrement()}>Previous</button>}
          <button onClick={() => increment()}>Next</button>
        </div>
      )}
      <div id="container">
        {photos.map((photo, index) => (
          <>
            <img
              className=""
              onClick={(e) => bookmark(e)}
              key={index}
              src={photo.urls.small}
              alt="fetchedimages"
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Imagesearch;
