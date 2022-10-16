import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
