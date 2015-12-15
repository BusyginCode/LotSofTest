import React from 'react';
import Content from '../content/content';

export default class Element extends React.Component {
	
	constructor() {
	  super();
	  this.dipslayName = 'Element';
	}
	
	render() {
	  return(
	    <div className = 'element'>
		  <a href = {this.props.hr} >
		    <h3 className = 'elem_name'>{this.props.name}</h3>
		    <div className = 'img_div'>
		      <img src = {this.props.img_s} className = 'elem_img' />
		    </div>
		    <div className = 'el_count'>
		      Кол-во на складе: {this.props.count}
		    </div>
		    <div className = 'el_discont'>
		      Скидка: {(this.props.deal) ?  'Есть '  :  'Нет'  } 
		    </div>
		    <h5 className = 'elem_price'>Цена: {this.props.price}</h5>
		  </a>
		</div>
	  );
	}
};
