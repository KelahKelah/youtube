import react,{Component} from 'react';

class AddContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '',
        }
    }
    handleChange(e) {
        this.setState({[e.target.id] : e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        if(this.target.title && this.target.url) {
            return(
                <div >

                </div>
            )
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Content Title</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title} id="title" />
                    <label for="img">Add Content</label>
                    <input type="file" id="url" name="img" vaue={} accept="image/*" />
                    <input type="submit" /> 
                </form>
            </div>
        )
    }
}
export default AddContent;