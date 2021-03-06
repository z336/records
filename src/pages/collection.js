import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import uniqid from "uniqid";
import {
  StyledH2,
  Grid,
  GridItem,
  Pagination,
  Button,
} from "../styles/RecordsGrid";

const fetchRecordCollection = async (key, page) => {
  const res = await fetch(
    `https://api.discogs.com/users/jondc/collection/folders/0/releases?page=${page}`
  );
  return res.json();
};

export default function Collection() {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["collection", page],
    fetchRecordCollection
  );

  return (
    <div>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <StyledH2>Collection</StyledH2>
          <Grid>
            {resolvedData.releases.map(release => {
              return (
                <GridItem key={release.id}>
                  {release.basic_information.artists.map(artist => {
                    return <h3 key={uniqid()}>{artist.name}</h3>;
                  })}
                  <h4 key={uniqid()}>{release.basic_information.title}</h4>
                  <ul>
                    <li key={uniqid()}>
                      Year: {release.basic_information.year}
                    </li>
                    {release.basic_information.labels.map(label => {
                      return <li key={uniqid()}>Labels: {label.name}</li>;
                    })}
                    {release.basic_information.formats.map(format => {
                      return <li key={uniqid()}>Format: {format.name}</li>;
                    })}
                  </ul>
                </GridItem>
              );
            })}
          </Grid>
          <Pagination>
            <div>
              page {page} of {resolvedData.pagination.pages}
            </div>
            <div>
              <Button
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={page === 1}
              >
                &larr; previous page
              </Button>
              <Button
                onClick={() =>
                  setPage(old =>
                    !latestData || !latestData.pagination.urls.next
                      ? old
                      : old + 1
                  )
                }
                disabled={!latestData || !latestData.pagination.urls.next}
              >
                next page &rarr;
              </Button>
            </div>
          </Pagination>
        </>
      )}
    </div>
  );
}
