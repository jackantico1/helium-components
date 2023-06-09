import React from 'react';
import { FeaturedContent, ContentTileStandardLayout, FeaturedContentContentItem, FeaturedContentStaticContentItem } from '@thoughtindustries/featured-content';
import { HydratedContentItem } from '@thoughtindustries/content';

function Page() {

    const headerOptions = {
        title: 'Feature Content Header'
    };

    const handleAddedToQueue = (): Promise<void> => {
        return Promise.resolve();
    };

    let item: FeaturedContentContentItem = {
        title: 'Manual item',
        description: 'description',
        href: '/manual-item',
        isActive: true
    }

  return (
    <>
      <h1>Hi!</h1>
      <FeaturedContent>
        <ContentTileStandardLayout 
            headerOptions={headerOptions}
            onAddedToQueue={handleAddedToQueue}
            desktopColumnCount={2}>
            <ContentTileStandardLayout.Item {...item} />
        </ContentTileStandardLayout>
      </FeaturedContent>
    </>
  );
}

export { Page };