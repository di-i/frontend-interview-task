import React, { useState } from 'react';

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = items;

    if (sortConfig !== null && sortConfig.key === 'status') {
      let arr = ['Online', 'Paused', 'Stopped', 'Draft'];
      sortableItems.sort((a, b) => {
        let A = a[sortConfig.key];
        let B = b[sortConfig.key];
        if (arr.indexOf(A) < arr.indexOf(B)) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (arr.indexOf(A) > arr.indexOf(B)) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    } else if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
