import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeAppLogoRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAppLogoRoundedW700'
      short_name='HomeAppLogo'

      {...props}
    >
      <path d="M7.5 22v-4.475h9V22Zm-5.525-5.3v-5.1q0-.35.137-.675.138-.325.413-.575l8.35-7.4q.25-.225.538-.325.287-.1.587-.1t.588.1q.287.1.537.325L15.35 4.9ZM3.65 22q-.7 0-1.187-.488-.488-.487-.488-1.212v-2.125l4.45-3.95V22Zm13.925 0v-9.15l-4.8-4.275L16.15 5.6l5.325 4.75q.275.275.413.588.137.312.137.662v8.725q0 .7-.475 1.187-.475.488-1.175.488Z"/>
    </Icon>
  )
});

export default IconMaterialHomeAppLogoRoundedW700;