import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveOutlinedW100Filled'
      short_name='Archive'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V8Q4.3 7.775 4.338 7.587Q4.375 7.4 4.5 7.25L5.7 5.85Q5.85 5.7 6.062 5.65Q6.275 5.6 6.5 5.6H17.5Q17.725 5.6 17.938 5.625Q18.15 5.65 18.3 5.85L19.45 7.25Q19.6 7.4 19.65 7.587Q19.7 7.775 19.7 8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.4 7.3H18.6L17.75 6.3H6.25ZM12 16.95 15.1 13.85 14.6 13.35 12.35 15.6V10.75H11.65V15.6L9.4 13.35L8.9 13.85Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveOutlinedW100Filled;
