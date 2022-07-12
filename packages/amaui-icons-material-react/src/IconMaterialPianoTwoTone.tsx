import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoTwoTone'
      short_name='Piano'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M14,14.5h0.25V19h-4.5v-4.5H10c0.55,0,1-0.45,1-1V5h2v8.5C13,14.05,13.45,14.5,14,14.5z M5,5h2v8.5 c0,0.55,0.45,1,1,1h0.25V19H5V5z M19,19h-3.25v-4.5H16c0.55,0,1-0.45,1-1V5h2V19z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M14,14.5h0.25V19h-4.5v-4.5H10 c0.55,0,1-0.45,1-1V5h2v8.5C13,14.05,13.45,14.5,14,14.5z M5,5h2v8.5c0,0.55,0.45,1,1,1h0.25V19H5V5z M19,19h-3.25v-4.5H16 c0.55,0,1-0.45,1-1V5h2V19z"/>
    </Icon>
  )
});

export default IconMaterialPianoTwoTone;
