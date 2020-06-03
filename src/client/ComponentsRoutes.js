import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import UserHome from './components/user/UserHome'
import AdminHome from './components/admin/AdminHome'
import Create from './components/user/Create'
import Auth from './components/user/Auth'
import InvalidLink from './components/parse-custom-pages/InvalidLink'
import VerifyEmailSuccess from './components/parse-custom-pages/VerifyEmailSuccess'
import PasswordResetSuccess from './components/parse-custom-pages/PasswordResetSuccess'
import ChoosePassword from './components/parse-custom-pages/ChoosePassword'
import FileUpload from './components/user/FileUpload'

const ComponentsRoutes = (props) => (
  <div className="App">
    <Route exact path="/" 
      render={(propz) => <Home {...propz} data={props.initialData} />}
    />
    <Route path="/create" 
      render={(propz) => <Create {...propz} data={props.initialData} />}
    />
    <Route path="/login" 
      render={(propz) => <Auth {...propz} data={props.initialData} />}
    />
    <Route path="/user/home" 
      render={(propz) => <UserHome {...propz} data={props.initialData} />}
    />
    <Route path="/admin/home" 
      render={(propz) => <AdminHome {...propz} data={props.initialData} />}
    />
    <Route path="/user/upload" 
      render={(propz) => <FileUpload {...propz} data={props.initialData} />}
    />
    <Route path="/auth-process/invalid-link" 
      render={(propz) => <InvalidLink {...propz} data={props.initialData} />}
    />
    <Route path="/auth-process/verify-email-success" 
      render={(propz) => <VerifyEmailSuccess {...propz} data={props.initialData} />}
    />
    <Route path="/auth-process/password-reset-success" 
      render={(propz) => <PasswordResetSuccess {...propz} data={props.initialData} />}
    />
    <Route path="/auth-process/choose-password" 
      render={(propz) => <ChoosePassword {...propz} data={props.initialData} />}
    />
  </div>
)

export default ComponentsRoutes