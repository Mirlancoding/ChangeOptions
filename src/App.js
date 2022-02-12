import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { actualpage: 0, options: [1, 2, 3, 4, 5, 6] };
  }
  changePage(selectedPage) {
    this.setState({ actualpage: selectedPage });
  }
  render() {
    const activePage = this.state.actualpage;

    let pageInformation;

    switch (activePage) {
      case 0:
        pageInformation = "11111";
        break;
      case 1:
        pageInformation = "22222";
        break;
      case 2:
        pageInformation = "33333333";
        break;
      default:
        pageInformation = "default page ";
    }

    return (
      <>
        <div>
          <button onClick={() => this.changePage(0)}> option 1 </button>
          <button onClick={() => this.changePage(1)}> option 2</button>
          <button onClick={() => this.changePage(2)}> option 3</button>
          <button onClick={() => this.changePage(3)}> option 4</button>
        </div>
        {pageInformation}
      </>
    );
  }
}

export default App;
