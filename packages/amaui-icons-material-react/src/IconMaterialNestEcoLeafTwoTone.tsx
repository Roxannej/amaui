import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestEcoLeafTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestEcoLeafTwoTone'
      short_name='NestEcoLeaf'

      {...props}
    >
      <path d="M12 20.325q-1.35 0-2.55-.4-1.2-.4-2.25-1.1L6.05 19.95q-.425.425-1.037.425-.613 0-1.063-.425-.45-.45-.45-1.063 0-.612.45-1.037l1.125-1.15q-.7-1.05-1.1-2.25-.4-1.2-.4-2.55 0-3.525 2.45-5.988Q8.475 3.45 12 3.45h8.45v8.45q0 3.525-2.462 5.975-2.463 2.45-5.988 2.45Zm0-3.025q2.25 0 3.838-1.575 1.587-1.575 1.587-3.825V6.475H12q-2.25 0-3.825 1.587Q6.6 9.65 6.6 11.9q0 .725.175 1.362.175.638.5 1.238l4.675-4.65q.45-.45 1.062-.45.613 0 1.038.45.475.45.462 1.05-.012.6-.462 1.075l-4.65 4.65q.6.325 1.237.5.638.175 1.363.175Z"/>
    </Icon>
  )
});

export default IconMaterialNestEcoLeafTwoTone;
