import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    id: -1,
    name: '',
    job: '',
    gender: '',
    education: '',
  };

  state = this.props.characterEdit ? this.props.characterEdit: this.initialState;

  componentDidUpdate(prevProps) {
     if (this.props.characterEdit !== prevProps.characterEdit) {
        this.setState(this.props.characterEdit);
     }
  }
  
  handleChange = (event) => {
     const {name, value} = event.target;

     this.setState({
       [name]: value,
     });
  };  
  
  submitForm = () => {
     this.props.handleSubmit(this.state)
     this.setState(this.initialState)
  }
  
  render() {
     const { id, name, job, gender, education } = this.state;
     let actionTitle = 'Add New Submit';
     if (id !== -1){
        actionTitle = 'Update Submit';
     }

     return (
        <form>
           <label htmlFor="name">Name</label>
           <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
           <label htmlFor="gender">Gender</label> 
           <div>
              <input type="radio" name="gender" id="gender" value="Female" checked={gender === "Female"} onChange={this.handleChange} />Female&nbsp;&nbsp;&nbsp;
              <input type="radio" name="gender" id="gender" value="Male" checked={gender === "Male"} onChange={this.handleChange} />Male&nbsp;&nbsp;&nbsp;
              <input type="radio" name="gender" id="gender" value="LGBT" checked={gender === "LGBT"} onChange={this.handleChange} />LGBT
           </div>
           <label htmlFor="education">Education</label>
           <select value={education} name="education" id="education" onChange={this.handleChange}>
             <option value=''>---Please Select---</option>
             <option value='Doctor'>Doctor</option>
             <option value='Master'>Master</option>
             <option value='Bachelor'>Bachelor</option>
             <option value='College w/o Degree'>College w/o Degree</option>
             <option value='High School and below'>High School and below</option>
           </select>
           <label htmlFor="job">Job</label>
           <input
             type="text"
             name="job"
             id="job"
             value={job}
             onChange={this.handleChange} />
           <input type="button" value={actionTitle} onClick={this.submitForm} />             
         </form>
     );
  }  
}

export default Form;