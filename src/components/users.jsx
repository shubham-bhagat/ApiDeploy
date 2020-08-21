import React, { Component } from 'react';

import axios from "axios";

import "bootstrap/dist/css/bootstrap.js"



const urlEndpoint = "https://jsonplaceholder.typicode.com/posts";

class User extends Component {
  state = {
    posts: [],
  };
   componentDidMount() {
    // loadDoc();
    console.clear();
  }
 
 dataFetch=async()=>
 {
   const { data: posts } = await axios.get(urlEndpoint);
  // const { data: temp } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );
  // console.log(temp);
  // // promise.then((response) => console.log(response.data));
  this.setState({ posts });
  // console.log(response.data);
}


  handleAdd = async () => {
    const obj = {
      title: "learning react",
      body: "React is easy to understand",
    };
    const {data: post} = await axios.post(urlEndpoint,obj);
    console.log(post);
    const posts = [post , ...this.state.posts];
    
    this.setState({posts});
  };

  handleUpdate = async (post) => {
    post.title = "Updated title";
    const {data} =  await axios.put(urlEndpoint+"/"+post.id , post);
    
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    console.log(posts[0]);
    posts[index] = {...post};
    this.setState({posts});
  };

  handleDelete = async (post) => {
    try{
      const temp = await axios.delete("https://jsonplaceholder.typicode.com/pos"+"/"+post.id);
      throw new Error("some random error");
    }catch (err){
      console.log(err);
      if(err.response && err.response.status===404){
        alert('page not found');
      }
    }
    
    // console.log(temp);
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts});
  };

  render() {
    return (
      <React.Fragment>

<h1>Admin Users</h1>;
     <img src="data:image/jpeg;base64,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" />
  <br></br>
  <button className="btn btn-primary" onClick={this.dataFetch}>Fetch Data</button>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default User;





// const Users = () => {
    
//   return (
//   <React.Fragment>
//   <h1>Admin Users</h1>;
//     <img src="data:image/jpeg;base64,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" />
  
//   <button type="btn btn-primary" >Fetch Data</button>
  
//   <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.posts.map((post) => (
//               <tr key={post.id}>
//                 <td>{post.title}</td>
//                 <td>
//                   <button
//                     className="btn btn-info btn-sm"
//                     onClick={() => this.handleUpdate(post)}
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => this.handleDelete(post)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//     </React.Fragment>
  
  
//   )

// };

// export default Users;