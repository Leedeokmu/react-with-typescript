import React, {Component} from 'react';
import {BrowserRouter, NavLink, Redirect, Route, RouteComponentProps, Switch} from "react-router-dom";

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

const PostList = (props: RouteComponentProps<{}>) => {
    return (
        <>
            <Route exact={true} path={`${props.match.url}`} render={() => <h3>POST LIST</h3>}/>
            <Route path={`${props.match.url}/:postId`} component={Post}/>
        </>
    )
}

const NotFount = () => {
    return (
        <h3>Not Found!</h3>
    )
}

const Admin = () => {
    const isAdmin = true;
    return (
        isAdmin ?
        <h3>Admin</h3> :
        <Redirect to={"/"}/>
    )
}

class App extends Component<{}, {}>{
    render() {
        return (
            <BrowserRouter>
                <>
                    <nav>
                        <ul>
                            <li><NavLink exact={true} to="/" activeStyle={{fontSize: 24}}>Home</NavLink></li>
                            <li><NavLink to="/intro" activeStyle={{fontSize: 24}}>Intro</NavLink></li>
                            <li><NavLink to="/about" activeStyle={{fontSize: 24}}>About</NavLink></li>
                            <li><NavLink to="/posts" activeStyle={{fontSize: 24}}>Posts</NavLink></li>
                            <li><NavLink to="/admin" activeStyle={{fontSize: 24}}>Admin</NavLink></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact={true} path="/" render={() => <h3>Home</h3>}/>
                        <Route path="/intro" render={() => <h3>intro</h3>}/>
                        <Redirect from={"/about"} to={"/intro"}/>
                        <Route path="/posts" component={PostList}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={NotFount}/>
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;