let date = "2024-09-02";
let apiKey = "zEHnsC4vgbrDwgHpjPYouTJa2gB5cvS1";

const apiCall = () => {
  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}&published_date=${date}`
  )
    .then((response) => response.json())
    .then((data) => {
      showData(data);
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};
function showData(bookApiData) {
  console.log("Data from second function:", bookApiData);

  let container = document.querySelector(".card-container");

  for (let list of bookApiData.results.lists) {
    for (let book of list.books) {
      let eachCard = document.createElement("div");

      let title = document.createElement("p");
      title.textContent = book.title;
      eachCard.appendChild(title);

      let author = document.createElement("p");
      author.textContent = book.author;
      eachCard.appendChild(author);

      let bookImage = document.createElement("img");
      bookImage.src = book.book_image;
      eachCard.appendChild(bookImage);
      container.appendChild(eachCard);
    }
  }
}
apiCall();
