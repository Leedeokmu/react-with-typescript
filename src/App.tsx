import React, {Component} from 'react';
import {BrowserRouter, Route, Link, RouteComponentProps} from "react-router-dom";

const Post = (props: RouteComponentProps<{postId: string}>) => {
    const goNextPost = () => {
        const nextPostId = +props.match.params.postId + 1;
        props.history.push(`/posts/${nextPostId}`);
    }
    return (
        <>
            <h3>Post {props.match.params.postId}</h3>
            <button onClick={goNextPost}>Go Next</button>
            <p>{new URLSearchParams(props.location.search).get('body')}</p>
        </>
    )
}

class App extends Component<{}, {}>{
  render() {
    return (
        <BrowserRouter>
          <>
              <nav>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/intro">Intro</Link></li>
                  </ul>
              </nav>
            <Route exact={true} path="/" render={() => <h3>Home</h3>}/>
            <Route path="/intro" render={() => <h3>intro</h3>}/>
            <Route path="/posts/:postId" component={Post}/>
          </>
        </BrowserRouter>
    );
  }
}

export default App;