import Header from "./components/Header";
import MenuList from "./components/MenuList";
import Menu from "./data";
import { useState } from "react";

function App() {
  const [meals, setMeals] = useState(Menu);
  const [searched, setSearched] = useState("");

  const keys = ["الكل", ...new Set(Menu.map((key) => key.category))];

  function filterCategory(category) {
    if (category === "الكل") {
      setMeals(Menu);
      setSearched("");
    } else {
      const filteredCat = Menu.filter((cat) => cat.category === category);
      setMeals(filteredCat);
      setSearched("category");
    }
  }

  function filterSearch(input) {
    const inputX = input.trim()
    if (inputX === "") {
      setMeals(Menu);
      setSearched("");
    } else {
      const searchResults = Menu.filter((item) => {
        return item.title.includes(inputX) || String(item.price).includes(inputX)
      });
      setMeals(searchResults);
      setSearched("search");
    }
  }

  return (
    <div className="body-style">
      <Header
        filterCategory={filterCategory}
        filterSearch={filterSearch}
        keys={keys}
      />
      <MenuList meals={meals} searched={searched} />
    </div>
  );
}

export default App;
