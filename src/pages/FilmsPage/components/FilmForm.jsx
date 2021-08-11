import React, { Component } from "react";

const initialData = {
  title: "",
};

class FilmForm extends Component {
  state = {
    data: initialData,
  };

  handleStringChange = (e) => {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <form className="ui form">
        <div className="ui grid mb-3">
          {/*  START two column */}

          <div className="two column row">
            {/*  START left column */}

            <div className="ten wide column">
              {/*  START title */}

              <div className="field">
                <label htmlFor="title">Film title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="film title"
                />
              </div>
              {/*  END title */}
              {/* START image */}
              <div className="field img-grid">
                <label htmlFor="img">Image</label>
                <input name="img" />
                <div className="inp-file">
                  <label htmlFor="photo">Photo</label>
                  <input type="file" id="photo" />
                </div>
              </div>
              {/* END image */}
            </div>
            {/*  END left column */}

            {/* START right */}
            <div className="six wide column">
              <img
                src="http://via.placeholder.com/250x250"
                alt="testimg"
                className="ui image imgfit"
              />
            </div>
            {/* END right */}
          </div>
          {/*  END two column */}

          {/* START description */}
          <div className="column row field">
            <label htmlFor="description">Film description</label>
            <textarea
              name="description"
              id="description"
              placeholder="film description"
            ></textarea>
          </div>
          {/* END description */}
        </div>
        {/*  END ui grid */}
      </form>
    );
  }
}

export default FilmForm;
