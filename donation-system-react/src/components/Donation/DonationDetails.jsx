// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const DonationDetails = () => {
//   const { id } = useParams(); // Access the 'id' parameter from the URL
//   const [donationDetails, setDonationDetails] = useState(null);

//   useEffect(() => {
//     // Fetch donation details based on 'id' from your data source
//     fetch(`./donationCampaignApi.json`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Find the donation with the matching 'id'
//         const selectedDonation = data.find((item) => item.id === id);
//         setDonationDetails(selectedDonation);
//       });
//   }, [id]);

//   if (!donationDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Display donation details here */}
//       <h1>{donationDetails.title}</h1>
//       <p>{donationDetails.description}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default DonationDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    // Fetch the specific donation campaign details based on the id parameter
    // You can fetch this data from an API or wherever it's stored
    // For now, let's assume you have a data object with all donation campaigns
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
    // Loading state or error handling can be added here
    return <div>Loading...</div>;
  }

  const donateButtonStyle = {
    backgroundColor: donation.text_button_bg_color, // Background color from the Card
    color: donation.card_bg_color, // Text color from the Card
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







