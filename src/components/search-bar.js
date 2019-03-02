 import React, {Component} from 'react';

 class SearchBar extends Component {
     constructor(props){
         super(props);
         this.state = {searchText:"", placeholder:"Taper votre film..."};
     }
     render(){
        return (
            <div className="row">21
                <div className="col-md-8 input-group">
                    <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
                    </span>
                </div>
            </div>
        )
     }

     handleChange(event){
         // FAUX this.state.searchText = event.target.value; EST REMPLACE PAR => setState() !!!
         // console.log('Hello', event.target.value);
         this.setState({searchText: event.target.value});
     }


     handleOnClick(event){
        this.props.callback(this.state.searchText);
     }
 }

 export default SearchBar;