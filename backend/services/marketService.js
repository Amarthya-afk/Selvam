/*
  marketService.js
  ----------------
  Fetch live gold price from external API.
*/

import axios from "axios";

/*
  Fetch gold price per gram in INR
*/
export const getGoldPrice = async () => {
  try {

    // We noticed GOLD_API_KEY in the .env file! Let's use it with goldapi.io
    const apiKey = process.env.GOLD_API_KEY;

    if (!apiKey) {
      console.warn("Gold API key missing, using fallback price.");
      return 6000;
    }

    const response = await axios.get("https://www.goldapi.io/api/XAU/INR", {
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json"
      }
    });

    /*
      GoldAPI returns something like:
      {
        "price": 234500,  // price per ounce in INR
        "price_gram_24k": 7539.36 // price per gram in INR
      }
    */

    const pricePerGramINR = response.data.price_gram_24k;
    
    if (!pricePerGramINR) {
      throw new Error("Invalid response format from GoldAPI");
    }

    console.log(`Successfully fetched live Gold price: ₹${pricePerGramINR}`);
    return Number(pricePerGramINR.toFixed(2));

  } catch (error) {

    console.error("Gold API error:", error.message);

    // fallback price
    return 6000;
  }
};