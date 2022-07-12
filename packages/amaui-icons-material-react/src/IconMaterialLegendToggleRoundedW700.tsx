import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleRoundedW700'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M9.9 7.4 5.825 9.875Q5.025 10.35 4.225 9.9Q3.425 9.45 3.425 8.525Q3.425 8.1 3.638 7.75Q3.85 7.4 4.2 7.175L10.025 3.625L15 7.15L18.1 4.95Q18.875 4.375 19.725 4.825Q20.575 5.275 20.575 6.225Q20.575 6.625 20.4 6.963Q20.225 7.3 19.925 7.525L15 11.025ZM5 15.575Q4.35 15.575 3.888 15.113Q3.425 14.65 3.425 14Q3.425 13.35 3.888 12.887Q4.35 12.425 5 12.425H19Q19.65 12.425 20.113 12.887Q20.575 13.35 20.575 14Q20.575 14.65 20.113 15.113Q19.65 15.575 19 15.575ZM5 20.15Q4.35 20.15 3.888 19.688Q3.425 19.225 3.425 18.575Q3.425 17.925 3.888 17.462Q4.35 17 5 17H19Q19.65 17 20.113 17.462Q20.575 17.925 20.575 18.575Q20.575 19.225 20.113 19.688Q19.65 20.15 19 20.15Z"/>
    </Icon>
  )
});

export default IconMaterialLegendToggleRoundedW700;