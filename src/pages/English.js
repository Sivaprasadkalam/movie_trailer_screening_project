import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
//import { UserDetailsApi } from "../services/Api";
import { logout, isAuthenticated } from "../services/Auth";
import english from "../components/english.json";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import "./English.css";

export default function DashboardPage() {
  const [Images, setImages] = useState([]);
  const [ratings, setRatings] = useState([]);
  const navigate = useNavigate();

  // const [user, setUser] = useState({ name: "", email: "", localId: "" });

  useEffect(() => {
    setImages(english);
    //{/*if (isAuthenticated()) {
    // UserDetailsApi().then((response) => {
    // setUser({
    //name: response.data.users[0].displayName,
    // email: response.data.users[0].email,
    // localId: response.data.users[0].localId,
    // });
    // });
    //. */}
  }, []);

  useEffect(() => {
    setImages(english);
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setRatings(storedRatings);
  }, []);

  const logoutUser = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated()) {
    //redirect user to dashboard
    return <Navigate to="/login" />;
  }

  const playYoutubeVideo = (link) => {
    const win = window.open("", "_blank");
    win.document.write(link);
  };

  const rateMovie = (id, rating) => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    storedRatings[id] = rating;
    localStorage.setItem("ratings", JSON.stringify(storedRatings));
    setRatings(storedRatings);
  };

  return (
    <div>
      <NavBar logoutUser={logoutUser} />
      <div className="container mt-5">
        <div className="row">
          {Images &&
            Images.map((english) => (
              <div className="movie-container" key={english.id}>
                <div className="col-md-3">
                  <div className="movie-image-box">
                    <img
                      src={english.image}
                      style={{ width: "100%", height: "auto" }}
                      className="img-fluid"
                      alt=""
                      onClick={() => playYoutubeVideo(english.link)}
                    />
                  </div>
                </div>
                <div className="movie-details">
                  <h3>{english.name}</h3>
                  <p>{english.description}</p>
                  <p>
                    <strong>Genre:</strong> {english.genre}
                  </p>
                  <span className="rating">
                    <p>
                      <strong>IMDB:</strong>
                    </p>
                    {english.rating}
                  </span>
                  <div className="star-ratings">
                    <StarRatings
                      rating={ratings[english.id] || 0}
                      starRatedColor="yellow"
                      changeRating={(newRating) =>
                        rateMovie(english.id, newRating)
                      }
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="5px"
                    />
                    <Link to={`/comment-page/${english.id}`}>
                      <button className="comment-button">Comment</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
