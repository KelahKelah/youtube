import React,{Component} from 'react';

const Searchbar =() =>{
    // render() {
        return(
            <form>
                <input type="search" className="searchBox" placeholder="search" style={{width:'40vw',padding:'10px',margin:'1%'}} />
                <input type="submit" value="" onChange="" />
           </form>
        )
    // }
}
export default Searchbar;