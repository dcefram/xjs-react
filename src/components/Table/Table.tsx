import React, { FunctionComponent, ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import TableContext from './TableContext';
import { StyledTableRow } from './TableRow';

interface StyledTableProps {
  className: string;
  children: ReactElement;
  isSelectable?: boolean;
}

export interface TableProps extends StyledTableProps {
  selected?: string | number;
  onSelect?: (event: React.MouseEvent<HTMLTableRowElement>, id: string | number) => void;
}

const StyledTable = styled('table')<StyledTableProps>`
  box-shadow: 0 0 0 1px #000;
  border-spacing: 0;
  font-size: 0.75rem;
`;

const Table: FunctionComponent<TableProps> = ({
  children,
  isSelectable = false,
  selected,
  onSelect,
  ...rest
}) => {
  const [isSelected, setSelected] = useState('' as string | number);

  const handleSelect = (event: React.MouseEvent<HTMLTableRowElement>, id: string | number) => {
    if (typeof onSelect === 'function') {
      onSelect(event, id);
    } else {
      setSelected(id);
    }
  };

  return (
    <TableContext.Provider
      value={{
        isSelectable,
        onSelect: handleSelect,
        selected: typeof selected === 'undefined' ? isSelected : selected
      }}
    >
      <StyledTable isSelectable={isSelectable} {...rest}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
};

export default Table;
