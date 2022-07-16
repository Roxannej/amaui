import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetRoundedW100'
      short_name='Dataset'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19ZM5 5Q5 5 5 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5 18.775Q5 19 5 19Q5 19 5 18.775Q5 18.55 5 18.2V5.8Q5 5.45 5 5.225Q5 5 5 5ZM7.65 10.35H10.35V7.65H7.65ZM13.65 10.35H16.35V7.65H13.65ZM7.65 16.35H10.35V13.65H7.65ZM13.65 16.35H16.35V13.65H13.65Z"/>
    </Icon>
  );
});

export default IconMaterialDatasetRoundedW100;