import React from 'react';
import { GridViewProps } from 'src/views/GridView/interfaces';
import styles from 'src/views/GridView/styles/styles.module.css';

const GridView: React.FC<GridViewProps> = (props: GridViewProps) => {
  const { children, className, container, s, m, l } = props;

  const sGridColSpan = s
    ? `s-grid-item__col-span-${s}`
    : 's-grid-item__col-span-12';
  const mGridColSpan = m
    ? `m-grid-item__col-span-${m}`
    : 'm-grid-item__col-span-12';
  const lGridColSpan = l
    ? `l-grid-item__col-span-${l}`
    : 'l-grid-item__col-span-12';

  if (container) {
    return (
      <div className={`${styles['grid-container']} ${className}`}>
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={`${styles[sGridColSpan]} ${styles[mGridColSpan]} ${styles[lGridColSpan]} ${className}`}
      >
        {children}
      </div>
    );
  }
};

export default GridView;
