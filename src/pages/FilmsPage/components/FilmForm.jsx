import React, { Component } from 'react';
import { genres, tags } from 'data';

const initialData = {
  title: '',
  description: '',
  director: '',
  duration: '',
  price: '',
  img: '',
  featured: false,
};

class FilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
      select: '',
      genre: '',
      multiple: [],
    };
  }

  handleStringChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  handleCheckboxChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked },
    });

  handleNumberChange = (e) => {
    let value = parseFloat(e.target.value);
    value = isNaN(value) || value === 0 ? '' : Math.abs(value);
    this.setState({
      data: { ...this.state.data, [e.target.name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };

  onChangeGenre = (e) => {
    this.setState({ genre: e.target.value });
    console.log(this.state.genre);
  };

  onChangeSelect = (e) => {
    this.setState({ select: e.target.value });
  };

  onChangeMultiSelect = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='ui form'>
        <div className='ui grid mb-3'>
          {/*  START two column */}

          <div className='two column row'>
            {/*  START left column */}

            <div className='ten wide column'>
              {/*  START title */}

              <div className='field'>
                <label htmlFor='title'>Film title</label>
                <input
                  value={data.title}
                  onChange={this.handleStringChange}
                  type='text'
                  name='title'
                  id='title'
                  placeholder='film title'
                />
              </div>
              {/*  END title */}
              {/* START image */}
              <div className='field img-grid'>
                <label htmlFor='img'>Image</label>
                <input
                  value={data.img}
                  onChange={this.handleStringChange}
                  name='img'
                />
                <div className='inp-file'>
                  <label htmlFor='photo'>Photo</label>
                  <input type='file' id='photo' />
                </div>
              </div>
              {/* END image */}
            </div>
            {/*  END left column */}

            {/* START right */}
            <div className='six wide column'>
              <img
                src='http://via.placeholder.com/250x250'
                alt='testimg'
                className='ui image imgfit'
              />
            </div>
            {/* END right */}
          </div>
          {/*  END two column */}

          {/* START description */}
          <div className='column row field'>
            <label htmlFor='description'>Film description</label>
            <textarea
              value={data.description}
              onChange={this.handleStringChange}
              name='description'
              id='description'
              placeholder='film description'
            ></textarea>
          </div>
          {/* END description */}

          {/* START three columns */}
          <div className='three column row'>
            {/* START director */}

            <div className='column field'>
              <label htmlFor='director'>Director</label>
              <input
                value={data.director}
                onChange={this.handleStringChange}
                type='text'
                name='director'
                id='director'
                placeholder='film director'
              />
            </div>
            {/* END director */}
            {/* START duration */}

            <div className='column field'>
              <label htmlFor='duration'>Duration</label>
              <input
                value={data.duration}
                onChange={this.handleNumberChange}
                type='number'
                name='duration'
                id='duration'
                placeholder='Duration'
              />
            </div>
            {/* END duration */}
            {/* START price */}
            <div className='column field'>
              <label htmlFor='price'>Price</label>
              <input
                value={data.price}
                onChange={this.handleNumberChange}
                type='number'
                name='price'
                id='price'
                placeholder='price'
              />
            </div>
            {/* START price */}
          </div>
          {/* END three columns */}

          {/* START featured */}

          <div className='six wide column inline field'>
            <label htmlFor='featured'>Featured</label>
            <input
              onChange={this.handleCheckboxChange}
              type='checkbox'
              name='featured'
              id='featured'
            />
          </div>
          {/* END featured */}
          {/* START buttons */}
          <div className='ui fluid buttons'>
            <button className='ui button primary' type='submit'>
              Save
            </button>
            <div className='or'></div>
            <span className='ui button'>Hide form</span>
          </div>
          {/* END buttons */}
          {/* START */}
          <fieldset>
            <div className='grouped fields'>
              <label>Genres</label>
              {genres &&
                genres.map((v) => (
                  <div className='ui radio checkbox field' key={v._id}>
                    <input
                      id={v._id}
                      type='radio'
                      name='example2'
                      onChange={this.onChangeGenre}
                      value={v.title}
                    />
                    <label htmlFor={v._id}>{v.title}</label>
                  </div>
                ))}
            </div>
          </fieldset>

          <select className='ui dropdown' onChange={this.onChangeSelect}>
            <option value='-1'>tag 1</option>
            {tags &&
              tags.map((tag) => (
                <option value={tag._id} key={tag._id}>
                  {tag.title}
                </option>
              ))}
          </select>

          <select multiple size='SIZE' onChange={this.onChangeMultiSelect}>
            <option value='-1'>tag 1</option>

            {tags &&
              tags.map((tag) => (
                <option value={tag._id} key={tag._id}>
                  {tag.title}
                </option>
              ))}
          </select>
          {/* END */}
        </div>
        {/*  END ui grid */}
      </form>
    );
  }
}

export default FilmForm;
