import React from 'react';
import Select from 'react-select-plus';


/**import multigroup from '../../../api/multigroup';**/


 class DropdownGroupView extends React.Component{
     constructor(props) {
    super(props);
    this.state = {
       value: '',
       multiSelectVal: false
    };
}



render() {

     var getOptions = (input) => {

          if (!input) {
            return Promise.resolve({ options: [] });
          }
        var requestObj = {
            method: 'GET'
        };      
          return fetch(`https://api.myjson.com/bins/xc7yp?q=${input}`,requestObj)
          .then((response) => {
            return response.json().then(function(data){
              return data;
            }).then((values) => {
                return { options: values };
            });
          });
      } 


     /**  var getDropdownValues = (input, callback) => {
         setTimeout(function() {
             callback(null, {
                    options: multigroup.getMultiJson()[0],
                    complete: true
               });
          }, 500);
    };**/

     var logChange = (val, selected) => {
         this.props.onChange(val, selected);
        this.setState({
          value: val,
          multiSelectVal: true
       });
     }


        return (
             <div>
                <div style={{width:"95%",display:"inline-block"}}>
                <Select.Async
                    name="form-field-name"
                    value={this.state.value}
                    loadOptions={getOptions}
                     onChange={logChange}
                     multi={true}
                     delimiter="'"
                     joinValues={true}
                     deleteRemoves={true}
                     simpleValue={true}
                     backspaceRemoves= {true}>
                 </Select.Async>  
                 </div>  
                 <span>
                 <i className="fa fa-search" aria-hidden="true"></i>
                 </span>
             </div>
                 
              );
  
   }
}

export default DropdownGroupView;