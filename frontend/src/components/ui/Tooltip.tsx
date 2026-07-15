import React from 'react';
import { Tooltip as MantineTooltip } from '@mantine/core';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <MantineTooltip label={text}>
      {children}
    </MantineTooltip>
  );
};

export default Tooltip;
