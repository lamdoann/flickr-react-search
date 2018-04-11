import React from 'react';
import { Item } from 'semantic-ui-react';
import ItemComponent from './Item';

export default function ItemList({ items = []}) {
  return (
    <Item.Group divided>
      {items
        .filter((item) => item)
        .map((item, key) => (<ItemComponent key={key} {...item} />))}
    </Item.Group>
  )
}
