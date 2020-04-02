import react,{ Component } from 'react';
// "homepage": "https://github.io/kelahkelah/youtube",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",


class AddContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '',
            img: 0,
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
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Content Title</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title} id="title" />
                    <label for="img">Add Content</label>
                    <input type="file" id="url" name="img" vaue={''} onClick={this.state.img} accept="image/*" />
                    <input type="submit" /> 
                </form>
            </>
        )
    }
}
export default AddContent;