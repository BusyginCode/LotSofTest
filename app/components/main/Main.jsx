import React from 'react';
import ReactDOM from 'react-dom';
import FilterBut from '../filtr_but/filtr_but';
import Filter from '../filtr/filtr';

export default class App extends React.Component {

	constructor() {
		super();
		document.title = 'Test shop';
	}

	render() {
	  return (
	    <div className = 'container'>
	      <FilterBut />
		  <Filter />
	    </div>
	  );
	}
};






