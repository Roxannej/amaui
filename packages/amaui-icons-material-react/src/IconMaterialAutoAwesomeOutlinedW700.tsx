import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeOutlinedW700'
      short_name='AutoAwesome'

      {...props}
    >
      <path d="M19.05 9.725 17.55 6.475 14.3 5 17.55 3.525 19.05 0.275 20.525 3.525 23.775 5 20.525 6.475ZM19.05 23.725 17.55 20.475 14.3 19 17.55 17.525 19.05 14.275 20.525 17.525 23.775 19 20.525 20.475ZM9.15 20.925 6.35 14.8 0.225 12 6.35 9.2 9.15 3.075 11.95 9.2 18.075 12 11.95 14.8ZM9.15 15.15 10.15 13 12.3 12 10.15 11 9.15 8.85 8.15 11 6 12 8.15 13ZM9.15 12Z"/>
    </Icon>
  )
});

export default IconMaterialAutoAwesomeOutlinedW700;