import React from 'react';

export default class FiltrBut extends React.Component {
	
	constructor() {
	  super();
	  this.state = {clickCheck: false};
	}
	click = () => {		// content transformation
	  var f = document.getElementById('input_box'),
	    c = document.getElementById('content'),
	    b = document.getElementById('show_but');
	  if (this.state.clickCheck) {
	    f.style.display = 'none';
		c.className = 'content_normal';
		b.className = '';
		this.setState({clickCheck: false});
	  } else {
		  f.style.display = 'block';
		  c.className = 'content_f';
		  b.className = 'marginButton';
		  this.setState({clickCheck: true});
		}
	  }
	render() {
	  return (
	    <div className='f_b_div'>
		  <a className='filtr_but' onClick={this.click} >Фильтр</a>	
		  <hr />
		</div>	
	  );
	}
};
