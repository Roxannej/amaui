import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRawOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnTwoTone'
      short_name='RawOn'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.5,9H3v6h1.5v-2h1.1l0.9,2H8l-0.9-2.1C7.6,12.6,8,12.1,8,11.5v-1C8,9.7,7.3,9,6.5,9z M6.5,11.5h-2v-1h2V11.5z"/><path d="M10.25,9l-1.5,6h1.5l0.38-1.5h1.75l0.37,1.5h1.5l-1.5-6H10.25z M11,12l0.25-1h0.5L12,12H11z"/><polygon points="19.98,9 19.24,12 18.5,9 16.98,9 16.24,12 15.5,9 14,9 15.5,15 16.98,15 17.74,11.96 18.5,15 19.98,15 21.48,9"/></g></g>
    </Icon>
  )
});

export default IconMaterialRawOnTwoTone;