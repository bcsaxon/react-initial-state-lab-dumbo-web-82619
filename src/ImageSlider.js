import React, { Component } from 'react';


class ImageSlider extends Component {
    
    state = {
        currentSlideIndex: 0
    }
    
    render (){
        return (
            <div>
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
            </div>
        )
    }
}

export default ImageSlider




// npx create-react-app htmfml-app 
// if you have react installed already


// npm start - starts the server

// code . 


// rce - tab
// rfc - tab
// Creating a component

// Another way to 'extend component'
// class Sidebar extends React.Component { }


// import React, { Component } from 'react'

// class Sidebar extends Component {
//     render() {
//        return (

//         <div>
//             <h1>SideBar</h1>
//             <h2>HTFML</h2>
//             <h3>Rocks!</h3>
//         </div>
//       )
//     }
// }

// export default Sidebar 



// {this.props.brett}


// // props are made in the parent and called in the child 

// // curlys for numbers 

// state = 