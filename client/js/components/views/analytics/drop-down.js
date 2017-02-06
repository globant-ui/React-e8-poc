import React, {Component} from 'react'
import Select from 'react-select';

import users from '../../../api/users';

export class DropdownView extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
       searchQuery: '',
       multiSelectVal: false
    };
}
   render() {
     var logChange = (val, selected) => {
        this.setState({
          searchQuery: val,
          multiSelectVal: true
       });
     }

     var changeDropdownType = (ele) => {
         if(ele.currentTarget.value == "single"){
              this.setState({
                multiSelectVal: false,
                /**searchQuery: ''*/

              });
         } else if(ele.currentTarget.value == "multi"){
             this.setState({
                multiSelectVal: true,
                 /**searchQuery: ''*/
              });
         }
     }

     var getOptions = (input) => {
      
          return fetch(`https://api.github.com/search/users?q=${input}`)
          .then((response) => {
            return response.json().then(function(data){
              var values = [];
                for(let datum of data.items){
                 var obj = { value: datum.login, label: datum.login }
                 values.push(obj);
                }
                return values;
            }).then((values) => {
                return { options: values };
            });
          });
      }

    var getDropdownValues = (input, callback) => {
         setTimeout(function() {
             callback(null, {
                    options: users.getUsers(),
                    complete: true
               });
          }, 500);
           this.setState({
                searchQuery: ''
              });
    };
     return ( 
             <div style={{ width: 300}}>
             <span> Choose type of dropdown .. </span>
             <div>
             <input type="radio" name="myRadio"  onClick={changeDropdownType} value="single" defaultChecked/> Single <br />
             <input type="radio" name="myRadio" onClick={changeDropdownType} value="multi" /> Multi <br />
             </div>
              <Select.Async
                 name="form-field-name"
                 value={this.state.searchQuery || ''}
                 loadOptions={getOptions}
                  onChange={logChange}
                  multi={this.state.multiSelectVal}
                  delimiter="'"
                  joinValues={true}
                  deleteRemoves={true}
                  simpleValue={true}>
              </Select.Async>
              </div>
            );
   }
}
