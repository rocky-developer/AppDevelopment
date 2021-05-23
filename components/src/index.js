import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{ 

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Rocky" timeAgo="today at 4.45PM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="today at 7.45PM"/>
            </ApprovalCard>
            
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);