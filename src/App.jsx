import { Component } from "react";
import FilmCard from "pages/FilmsPage/components/FilmCard";
import { films } from "data";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";

class App extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.setState({ films });
  }

  onReset = () => this.setState({ films });

  render() {
    const { films } = this.state;
    return (
      <div className="ui container">
        <ErrorBoundary
          resetKeys={films}
          onReset={this.onReset}
          FallbackComponent={ErrorFallback}
        >
          <FilmCard film={films[0]} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
