import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { FeaturedContent, ContentTileStandardLayout, FeaturedContentContentItem, FeaturedContentStaticContentItem } from '@thoughtindustries/featured-content';

function Page() {

    const headerOptions = {
        title: 'Feature Content Header'
    }

    const handleAddedToQueue = (): Promise<void> => {
        return Promise.resolve();
    };

    let [items, setItems] = useState<FeaturedContentContentItem[]>([])

    const catalog_query = gql`
    query CatalogContent(
      $page: Int!
    ) {
      CatalogContent(
        page: $page
      ) {
          contentItems {
              title
              displayCourse
              contentTypeLabel
              description
              courseStartDate
              id
              slug
              asset
          }
        }
    }`

    const { data } = useQuery(catalog_query, {
      variables: { page: 1 }
    });

    useEffect(() => {
      if (data) {
        setItems(data.CatalogContent.contentItems)
      }
    }, [])

  return (
    <>
      <div className='text-2xl p-10'>
          <h1>Hi! This is standard</h1>
          <h1><a href='/'>Home</a></h1>
          <h1><a href='/featured-content/carousel'>Carousel</a></h1>
          <h1><a href='/featured-content/descriptive'>Descriptive</a></h1>
          <h1><a href='/featured-content/image-overlay'>Image Overlay</a></h1>
      </div>
      <FeaturedContent>
        <ContentTileStandardLayout 
            headerOptions={headerOptions}
            onAddedToQueue={handleAddedToQueue}
            desktopColumnCount={2}>
            {items.map((item) => {
              return <ContentTileStandardLayout.Item {...item} />
            })}
        </ContentTileStandardLayout>
      </FeaturedContent>
    </>
  );
}

export { Page };