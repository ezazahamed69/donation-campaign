import React, { useEffect, useState } from "react";


const Featured = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    fetch('./donationCampaignApi.json')
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);

  return (
    <div className="grid-container " style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '20px',
    }}>
      {donation.map((item, index) => (
        <div
          key={index}
          className="grid-item card card-compact bg-base-100 shadow-xl"
          style={{
            width: '100%',
            margin: '10px', 
            padding: '20px',
            backgroundColor: item.card_bg_color,
          }}
        >
          <figure>
            <img src={item.picture} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title" style={{
              backgroundColor: item.category_bg_color,
              borderRadius: '8px',
              color: 'white', 
              padding: '8px', 
            }}>
              {item.category}
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary" style={{ backgroundColor: item.text_button_bg_color }}>
                Buy Now
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
