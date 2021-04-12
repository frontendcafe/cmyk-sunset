import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  // Your public key
  // 6aff0ed87c2f1bec2219c28098d9272c
  // Your private key
  // 5cbb9b599d25ce34fdef467e0c52ddb7e8ccd0c7
  // developer.marvel.com;
  // ts = 1 & apikey = 1234 & hash = ffd275c5130566a2916217b101f26150;
  // md5(ts+privateKey+publicKey)

  var idMarvel = req.query.id;

  var ts = Math.floor(Math.random() * 100000000);
  var privKey = "5cbb9b599d25ce34fdef467e0c52ddb7e8ccd0c7";
  var publicKey = "6aff0ed87c2f1bec2219c28098d9272c";

  var toHash = ts + privKey + publicKey;

  var hash = CryptoJS.MD5(toHash);

  var url = `https://gateway.marvel.com:443/v1/public/comics/${idMarvel}?apikey=6aff0ed87c2f1bec2219c28098d9272c`;

  url += "&ts=" + ts + "&hash=" + hash;
  //console.log(url);

  const dataMarvel = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log(response);
      if (response.code == 200) {
        res.status(200).json(response.data.results[0]);
      } else {
        res.status(409).json({ error: "error" });
      }
    });
}
