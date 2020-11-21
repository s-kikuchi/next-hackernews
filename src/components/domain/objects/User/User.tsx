import * as React from 'react';
import styled from 'styled-components';

import * as Model from '@/models';
import { timeAgo } from '@/utils/filter';

interface Props {
  user: Model.User | any;
}

/**
 * User domain object
 */
const User: React.FC<Props> = (props) => {
  const { user } = props;

  // TODO: Adding Loading component below when user is not loaded. (not user exists)
  if (!user) {
    return (
      <Wrapper>
        <h1>User not found</h1>
      </Wrapper>
    );
  } else {
    // These elements(user.id, user.created, user.karma...) in user domain object will be moved to domain elements.
    return (
      <Wrapper>
        <h1>User: {user.id}</h1>
        <ul>
          <li>
            <span>Created:</span> {timeAgo(user.created)} ago
          </li>
          <li>
            <span>Karma:</span> {user.karma}
          </li>
        </ul>
        {/*
          <p>
            <a>submissions</a> |
            <a>comments</a>
          </p>
        */}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 3em;
  padding-right: 3em;
`;

export default User;
