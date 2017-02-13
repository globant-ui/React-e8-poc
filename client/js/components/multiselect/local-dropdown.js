import React from 'react';
import Select from 'react-select';

var options = [
	{ value: 'System Activity', label: 'System Activity' },
	{ value: 'System Activity1', label: 'System Activity1' },
	{ value: 'User Activity', label: 'User Activity' },
	{ value: 'Globant Activity', label: 'Globant Activity' }
];

 class LocalDropdownView extends React.Component{
     constructor(props) {
    super(props);
    this.state = {
       value: '',
       multiSelectVal: false
    };
}

render() {
    var dropdownValChange = (val, selected) => {
        this.props.onChange(val.value, selected);
        this.setState({
          value: val,
          multiSelectVal: false
       });
    }
        return (
                <div>
                    <Select
                        name="form-field-name"
                        value={this.state.value}
                        options={options}
                        onChange={dropdownValChange}>
                    </Select>  
                </div>
              );
   }
}

export default LocalDropdownView;