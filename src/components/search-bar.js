 import React, {Component} from 'react';

 class SearchBar extends Component {
     constructor(props){
         super(props);
         this.state = {searchText:"", placeholder:"Taper votre film..."};
     }
     render(){
        return (
            <div>
                <input onChange={this.handelChange.bind(this)} placeholder={this.state.placeholder}/>
                <p>{this.state.searchText}</p>
            </div>
        )
     }

     handelChange(event){
         // FAUX this.state.searchText = event.target.value; EST REMPLACE PAR => setState() !!!
         // console.log('Hello', event.target.value);
         this.setState({searchText: event.target.value});
     }
 }

 export default SearchBar;