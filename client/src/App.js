import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
        <style jsx="true">{`
            body {
                background: #e6e4df;
            }
            h1, h2, h3, h4, h5, h6{
                margin: 0;
            }
        `}</style>
    </Router>
)

export default App;