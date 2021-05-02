import React from 'react';
import styled from 'styled-components';

import * as Model from '@/common/models';
import { timeAgo } from '@/common/utils/filter';
import { Spinner } from '@/common/components/Spinner';
import Header from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  user?: Model.User;
  error: Error;
}

function User(props: Props): JSX.Element {
  const router = useRouter();
  const { user, error } = props;
  const isLoading = () => {
    return Boolean(!user);
  };

  // TODO: outside common error function
  if (error) {
    (async () => await router.push('/404'))();
    return <></>;
  }
  if (isLoading()) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  return (
    <>
      <Header>
        <title>Next HN | User {user.id}</title>
      </Header>

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

const Wrapper = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 3em;
  padding-right: 3em;
`;

export default User;
