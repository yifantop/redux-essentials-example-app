import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { UserPage } from './features/users/UserPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { UserList } from './features/users/UserList';
import { NotificationsList } from './features/notifications/NotificationsList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPosts/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UserList}></Route>
          <Route exact path="/users/:userId" component={UserPage}></Route>
          <Route exact path="/notifications" component={NotificationsList}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
