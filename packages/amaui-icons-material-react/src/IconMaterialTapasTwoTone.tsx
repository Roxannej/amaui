import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapasTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasTwoTone'
      short_name='Tapas'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M16,10V8h4v2c0,1.1-0.9,2-2,2S16,11.1,16,10z M4,6C3.72,6,3.5,5.78,3.5,5.5S3.72,5,4,5h6 c0.28,0,0.5,0.22,0.5,0.5S10.28,6,10,6H4z M10,12H4c-0.28,0-0.5-0.22-0.5-0.5S3.72,11,4,11h6c0.28,0,0.5,0.22,0.5,0.5 S10.28,12,10,12z" opacity=".3"/><path d="M22,10V1h-8v9c0,1.86,1.28,3.41,3,3.86V21h-2v2h6v-2h-2v-7.14C20.72,13.41,22,11.86,22,10z M20,3v3h-4V3H20z M16,10V8h4v2 c0,1.1-0.9,2-2,2S16,11.1,16,10z M10,9H8V8h2c1.38,0,2.5-1.12,2.5-2.5C12.5,4.12,11.38,3,10,3H8V1H6v2H4C2.62,3,1.5,4.12,1.5,5.5 C1.5,6.88,2.62,8,4,8h2v1H4c-1.38,0-2.5,1.12-2.5,2.5C1.5,12.88,2.62,14,4,14h2v9h2v-9h2c1.38,0,2.5-1.12,2.5-2.5 C12.5,10.12,11.38,9,10,9z M4,6C3.72,6,3.5,5.78,3.5,5.5S3.72,5,4,5h6c0.28,0,0.5,0.22,0.5,0.5S10.28,6,10,6H4z M10,12H4 c-0.28,0-0.5-0.22-0.5-0.5S3.72,11,4,11h6c0.28,0,0.5,0.22,0.5,0.5S10.28,12,10,12z"/>
    </Icon>
  )
});

export default IconMaterialTapasTwoTone;