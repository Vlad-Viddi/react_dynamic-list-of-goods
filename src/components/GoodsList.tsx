import React from 'react';
import { Good } from './TypeDefinitions';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <>
      <ul>
        {goods.map(({ id, color, name }) => (
          <li key={id} style={{ color }}>
            { name }
          </li>
        ))}
      </ul>
    </>
  );
};
