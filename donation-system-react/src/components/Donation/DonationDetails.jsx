

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("./donationCampaignApi.json");
        const data = await response.json();
        const selectedDonation = data.find((item) => item.id === parseInt(id));
        setDonation(selectedDonation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!donation) {
    
    return <div>Loading...</div>;
  }

  const donateButtonStyle = {
    backgroundColor: donation.text_button_bg_color,
    color: donation.card_bg_color,
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>{donation.title}</h2>
      <div>
        <img
          src={donation.picture}
          alt={donation.title}
          style={{ maxWidth: "100%", height: "auto", position: "relative" }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button style={donateButtonStyle}>Donate ${donation.price}</button>
        </div>
      </div>
      <p>{donation.description}</p>
    </div>
  );
};

export default DonationDetails;







