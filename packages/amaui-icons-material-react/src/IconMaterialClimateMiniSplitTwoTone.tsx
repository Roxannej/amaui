import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitTwoTone'
      short_name='ClimateMiniSplit'

      {...props}
    >
      <path d="M4.35 12.675q-1.275 0-2.15-.875t-.875-2.15V4.125q0-1.25.875-2.138.875-.887 2.15-.887h15.325q1.25 0 2.137.887.888.888.888 2.138V9.65q0 1.275-.888 2.15-.887.875-2.137.875H18.05v-3.9q0-1.25-.887-2.138-.888-.887-2.138-.887H9q-1.275 0-2.15.887-.875.888-.875 2.138v3.9Zm-.85 7.15V16.8q1.25 0 2.125-.875T6.5 13.8h3.025q0 2.525-1.762 4.275Q6 19.825 3.5 19.825Zm5.25-7.15v-4.15h6.525v4.15Zm1.75 8.15V13.8h3.025v7.025Zm10.025-1q-2.525 0-4.275-1.75-1.75-1.75-1.75-4.275h3.025q0 1.25.875 2.125t2.125.875Z"/>
    </Icon>
  )
});

export default IconMaterialClimateMiniSplitTwoTone;
