import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveOutlinedW700Filled'
      short_name='Archive'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V6.2Q2.15 5.675 2.325 5.213Q2.5 4.75 2.8 4.375L4.2 2.7Q4.55 2.325 5.025 2.087Q5.5 1.85 6 1.85H18Q18.5 1.85 18.975 2.087Q19.45 2.325 19.8 2.7L21.2 4.375Q21.5 4.75 21.675 5.213Q21.85 5.675 21.85 6.2V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM5.55 6H18.45L17.6 5H6.4ZM12 17.8 16.45 13.375 14.725 11.6 13.25 13.075V8.925H10.75V13.075L9.275 11.6L7.55 13.375Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveOutlinedW700Filled;
