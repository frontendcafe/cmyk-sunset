import urlMarvel from "../../../util/marvelUrl";

export default async function handler(req, res) {
  try {
    var idMarvel = req.query.id;

    if (isNaN(idMarvel)) {
      throw new Error("Error inesperado el id no es un numero");
    }
    var url = urlMarvel(idMarvel);
    console.log(url);

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
  } catch (error) {
    res.status(413).json({ error: error.message });
  }
}
