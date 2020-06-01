import React from 'react'

class AddItem extends React.Component{

	render(){
		return(
			 <form onSubmit={this.props.handleSubmit}>
			<input type= "text"
			placeholder="Add new item"
			value={this.props.value}
			onChange={(event) => this.props.handleValueChange(event)} 
			/>
			<input type="submit" value="Enter" />
			</form>
			)}
}

export default AddItem