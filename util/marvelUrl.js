import CryptoJS from "crypto-js";

function urlMarvel(id = null) {

  var privKey = process.env.MARVEL_PRIVATE_KEY;
  var publicKey = process.env.MARVEL_PUBLIC_KEY;

  var ts = Math.floor(Math.random() * 100000000);
  var toHash = ts + privKey + publicKey;
  var hash = CryptoJS.MD5(toHash);

  var url = process.env.MARVEL_URL;
  var urlKeys = `?format=digital%20comic&formatType=comic&orderBy=onsaleDate&limit=100&apikey=${publicKey}&ts=${ts}&hash=${hash}`;
  
  id !== null ? (url += "/" + id + urlKeys) : (url += urlKeys);

  return url;
}

export default urlMarvel;
