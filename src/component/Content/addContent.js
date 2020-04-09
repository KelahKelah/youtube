import react,{ Component } from 'react';
import Axios from 'axios';
// save githubPages for deployment temporary
// "homepage": "https://github.io/kelahkelah/youtube",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",


class AddContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '',
            img: '',
        }
    }
    handleChange(e) {
        this.setState({[e.target.id] : e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        payload = {
            title: 'title.title',
            url: 'url.url',
            img: 'img.img'
        }
        // testing api
        const url = 'https://jsonplaceholder.typicode.com/photos'

        Axios.post(url)
        .then(res => {
            this.setState()
        })
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