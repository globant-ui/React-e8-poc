import React from 'react';
import Select from 'react-select-plus';


import multigroup from '../../../api/multigroup';


export class DropdownGroupView extends React.Component{
     constructor(props) {
    super(props);
    this.state = {
       searchQuery: '',
       multiSelectVal: false
    };
}

render() {
var ops =[  
  
   {  
      label:'HR Staff',
      options:[  
         {  
            label:'HR Staff - 1',
            value:'HR Staff - 1'
         },
         {  
            label:'HR Staff - 2',
            value:'HR Staff - 2'
         },
         {  
            label:'HR Staff - 3',
            value:'HR Staff - 3'
         }
      ]
   },
   {  
      label:'Manager Staff',
      options:[  
         {  
            label:'Manager Staff - 1',
            value:'Manager Staff - 2'
         },
         {  
            label:'Lead Staff',
            options:[  
               {  
                  label:'Lead Staff - 1',
                  value:'Lead Staff - 1'
               },
               {  
                  label:'Lead Staff - 2',
                  value:'Lead Staff - 2'
               },
               {  
                  label:'Lead Staff - 3',
                  value:'Lead Staff - 3'
               }
            ]
         }
        
      ]
   }
];

       var getDropdownValues = (input, callback) => {
         setTimeout(function() {
             callback(null, {
                    options: multigroup.getMultiJson()[0],
                    complete: true
               });
          }, 500);
    };

     var logChange = (val, selected) => {
        this.setState({
          searchQuery: val,
          multiSelectVal: true
       });
     }


        return (

                <div>
                <span>Group dropdown ....</span>

               


                <Select
                    name="form-field-name"
                    value={this.state.searchQuery || ''}
                    options={ops}
                     onChange={logChange}
                     addLabelText="test test"
                     multi={true}
                     delimiter="'"
                     joinValues={true}
                     deleteRemoves={true}
                     simpleValue={true}>
                 </Select>  

                 </div>  
              );
  
   }
}






