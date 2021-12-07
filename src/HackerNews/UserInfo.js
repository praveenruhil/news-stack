/* eslint-disable react/prop-types */
import React from 'react'

import { Card, Spinner } from '@blueprintjs/core'
import { useQuery } from 'react-query'
import { formatDistanceToNowStrict } from 'date-fns'

import { hnAxios } from './hnAxios'

const getUserById = id => hnAxios.get(`user/${id}.json`)

export const UserInfoCard = ({ id }) => {
  const { data, isLoading } = useQuery(`hn-user-${id}`, () => getUserById(id), {
    enabled: Boolean(id),
  })

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    )
  }

  return (
    <Card
      elevation={2}
      style={{
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <p>
        <strong>About:</strong> {data.data.about}
      </p>
      <p>
        <strong>User since:</strong>{' '}
        {formatDistanceToNowStrict(data.data.created * 1000)}
      </p>
      <p>
        <strong>Karma:</strong> {data.data.karma}
      </p>
      <p>
        <strong>Stories Submitted:</strong> {data.data.submitted.length}
      </p>
    </Card>
  )
}
