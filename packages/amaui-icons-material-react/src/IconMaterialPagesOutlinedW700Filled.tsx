import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesOutlinedW700Filled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 17 13.55 13.55 17 12 13.55 10.45 12 7 10.45 10.45 7 12 10.45 13.55ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPagesOutlinedW700Filled;
