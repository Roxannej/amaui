import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationTwoTone'
      short_name='Mediation'

      {...props}
    >
      <g><g><rect fill="none" height="24" width="24"/><path d="M18,16l4-4l-4-4v3h-5.06c-0.34-3.1-2.26-5.72-4.94-7.05C7.96,2.31,6.64,1,5,1C3.34,1,2,2.34,2,4s1.34,3,3,3 c0.95,0,1.78-0.45,2.33-1.14C9.23,6.9,10.6,8.77,10.92,11h-3.1C7.4,9.84,6.3,9,5,9c-1.66,0-3,1.34-3,3s1.34,3,3,3 c1.3,0,2.4-0.84,2.82-2h3.1c-0.32,2.23-1.69,4.1-3.58,5.14C6.78,17.45,5.95,17,5,17c-1.66,0-3,1.34-3,3s1.34,3,3,3 c1.64,0,2.96-1.31,2.99-2.95c2.68-1.33,4.6-3.95,4.94-7.05H18V16z"/></g></g>
    </Icon>
  )
});

export default IconMaterialMediationTwoTone;