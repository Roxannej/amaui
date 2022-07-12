import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharpW700'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.5 22.9 12.55 15.975 7.125 21.4H2.725V17.025L8.175 11.575L1.1 4.5L2.775 2.825L21.175 21.225ZM5.125 19.025H6.125L10.85 14.275L10.375 13.775L9.85 13.275L5.125 18.025ZM10.85 14.275 10.375 13.775 9.85 13.275 10.85 14.275ZM15.675 12.85 13.975 11.15 14.5 10.625 13.5 9.625 12.975 10.15 11.275 8.475 13.475 6.275 17.875 10.65ZM19.3 9.2 14.925 4.85 17.825 1.925 22.3 6.225ZM13.475 10.65Z"/>
    </Icon>
  )
});

export default IconMaterialEditOffSharpW700;
