import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiningSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningSharpW700Filled'
      short_name='Dining'

      {...props}
    >
      <path d="M1.15 22.85V1.15H22.85V22.85ZM7.275 18.875H9.55V12.525Q10.2 12.25 10.713 11.662Q11.225 11.075 11.225 10.3V5.625H9.925V8.8H9.05V5.625H7.75V8.8H6.875V5.625H5.575V10.3Q5.575 11.075 6.1 11.662Q6.625 12.25 7.275 12.525ZM14.15 18.875H16.425V12.875Q17.25 12.375 17.712 11.438Q18.175 10.5 18.175 9.25Q18.175 7.7 17.337 6.662Q16.5 5.625 15.275 5.625Q14.05 5.625 13.225 6.662Q12.4 7.7 12.4 9.25Q12.4 10.5 12.863 11.438Q13.325 12.375 14.15 12.875Z"/>
    </Icon>
  )
});

export default IconMaterialDiningSharpW700Filled;
