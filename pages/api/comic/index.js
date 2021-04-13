import urlMarvel from "../../../util/marvelUrl";

export default async function handler(req, res) {
  var url = urlMarvel();
  console.log(url);
  const dataMarvel = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log(response);
      if (response.code == 200) {
        res.status(200).json(response.data.results);
      } else {
        res.status(409).json({ error: "error" });
      }
    });
}
