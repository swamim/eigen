import React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { FavoriteCategoriesQuery } from "__generated__/FavoriteCategoriesQuery.graphql"
import { defaultEnvironment } from "lib/relay/createEnvironment"

export default ({ render }: any /* STRICTNESS_MIGRATION */) => {
  return (
    <QueryRenderer<FavoriteCategoriesQuery>
      environment={defaultEnvironment}
      query={graphql`
        query FavoriteCategoriesQuery {
          me {
            ...Categories_me
          }
        }
      `}
      variables={{
        count: 10,
      }}
      render={render}
    />
  )
}
