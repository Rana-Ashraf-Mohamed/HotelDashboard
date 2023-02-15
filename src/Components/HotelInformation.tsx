import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Hotel } from "../Types/Hotel";
import { Edit } from "./Edit";
import {deleteHotel} from "../lib/controller";

interface IProps 
{
    hotel: Hotel;
    detailsPage?: boolean;
}

export function HotelInformation({ hotel, detailsPage }: IProps) {
    const [editDescription, setEditDescription] = useState(false);
  
    const navigate = useNavigate();
  
    return (
      <div>
        <div>
          <img src={hotel.Image} alt="Hotel" />
          <div>
            <div>
              <h2>{hotel.Name}</h2>
              <p>{hotel.Region}</p>
              <h2>£{hotel.Pricing}</h2>
              <p>per night</p>
            </div>
          </div>
        </div>
  
        {/* Description */}
        <div>
            <strong>{hotel.Rating}</strong>
          <span>Main Features: {hotel?.Features}</span>
          {detailsPage ? (
            <>
              <p>
                {hotel.Description}{" "}
                <strong
                  onClick={() => setEditDescription(!editDescription)}
                >
                  Edit Description
                </strong>
                
                {editDescription ? (
                  <Edit
                    editDescription={editDescription}
                    setEditDescription={setEditDescription}
                    id={hotel.id}
                  />
                ) : null}
              </p>
              <button onClick={() => deleteHotel(hotel.id, navigate)}>
              Delete Hotel
            </button>
            </>
          ) : (
            <Link to={`/hotels/${hotel.id}`}>
              <button>View More Information</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
  