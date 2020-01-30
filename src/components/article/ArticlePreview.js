import React, { Fragment } from 'react';
import Source from '../simple/Source';
import UnreadBadge from '../simple/UnreadBadge';
import ActionButton from '../simple/ActionButton';

const ArticlePreview = ({ article, previewSize }) => {

  const { source, title, description, urlToImage, publishedAt } = article;

  return(
    <Fragment>
      <div className='article_preview_container'>
        <img className='article_preview_container_image'
          src={urlToImage}
          alt={description}
        />
        <div className='article_preview_container_source'>
          <Source
            name={source.name}
            date={publishedAt}
          />
        </div>
        <div className='article_preview_container_unread'>
          <UnreadBadge />
        </div>
        <div className='article_preview_container_actions'>
          <ActionButton
            text='Zu Favoriten hinzufügen'
            type='add'
          />
          <ActionButton
            text='Für später speichern'
            type='save'
          />
        </div>
      </div>
      <div className='article_preview_info'>
        <h3>
          {article.title}
        </h3>
        <p>
          {article.description}
        </p>
      </div>
    </Fragment>
  );

};

export default ArticlePreview;