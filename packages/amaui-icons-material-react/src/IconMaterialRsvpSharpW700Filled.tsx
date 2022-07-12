import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRsvpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpSharpW700Filled'
      short_name='Rsvp'

      {...props}
    >
      <path d="M13.925 15.2 12.05 8.8H13.95L14.8 11.725L15.675 8.8H17.55L15.7 15.2ZM0.8 15.2V8.8H6.2V13.2H5.45L6.3 15.2H4.375L3.525 13.2H2.7V15.2ZM2.7 11.3H4.3V10.7H2.7ZM17.8 15.2V8.8H23.2V13.2H19.7V15.2ZM19.7 11.3H21.3V10.7H19.7ZM6.8 15.2V13.3H9.8V12.95H6.8V8.8H11.7V10.7H8.7V11.05H11.7V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialRsvpSharpW700Filled;
