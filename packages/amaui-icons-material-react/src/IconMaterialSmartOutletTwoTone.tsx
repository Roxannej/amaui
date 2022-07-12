import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartOutletTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartOutletTwoTone'
      short_name='SmartOutlet'

      {...props}
    >
      <path d="M7.275 13.125h2.25V8.85h-2.25Zm3.6 4h2.275V16q0-.525-.325-.838-.325-.312-.825-.312-.525 0-.825.325-.3.325-.3.825Zm3.625-4h2.25V8.85H14.5ZM12 22.6q-2.225 0-4.15-.837-1.925-.838-3.35-2.263-1.425-1.425-2.262-3.35Q1.4 14.225 1.4 12q0-2.225.838-4.15Q3.075 5.925 4.5 4.5t3.35-2.263Q9.775 1.4 12 1.4q2.225 0 4.15.837 1.925.838 3.35 2.263 1.425 1.425 2.263 3.35.837 1.925.837 4.15 0 2.225-.837 4.15-.838 1.925-2.263 3.35-1.425 1.425-3.35 2.263-1.925.837-4.15.837Z"/>
    </Icon>
  )
});

export default IconMaterialSmartOutletTwoTone;