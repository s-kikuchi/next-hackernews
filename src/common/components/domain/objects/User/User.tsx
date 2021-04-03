import * as React from 'react';
import styled from 'styled-components';

import * as Model from '@/common/models';
import { timeAgo } from '@/common/utils/filter';
import Spinner from '@/common/components/Spinner';
import Header from 'next/head';

interface Props {
  user: Model.User | any;
}

/**
 * User domain object
 */
const User: React.FC<Props> = (props) => {
  const { user } = props;

  if (!user) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  } else {
    return (
      <>
        <Header>
          <title>Next HN | User {user.id}</title>
        </Header>
        {/* If the components will be complex, they must be split and moved to domain elements. */}
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
        </Wrapper>
      </>
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
