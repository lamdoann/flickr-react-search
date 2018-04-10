import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import Link from './Link';

export default function ItemComponent({ author, title, link, media, tags }) {
  return (
    <Item>
      <Item.Image size='medium' src={media.m}/>
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Meta>
          <p>Author: {author}</p>
          <Link url={link}>See detailed</Link>
        </Item.Meta>
        <Item.Extra>
          <Label>{'Tags: ' + tags}</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}