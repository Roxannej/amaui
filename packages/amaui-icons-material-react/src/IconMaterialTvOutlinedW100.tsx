import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOutlinedW100'
      short_name='Tv'

      {...props}
    >
      <path d="M9.3 19.7V17.7H4.8Q4.15 17.7 3.725 17.275Q3.3 16.85 3.3 16.2V5.8Q3.3 5.15 3.725 4.725Q4.15 4.3 4.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V16.2Q20.7 16.85 20.275 17.275Q19.85 17.7 19.2 17.7H14.7V19.7ZM4.8 17H19.2Q19.5 17 19.75 16.75Q20 16.5 20 16.2V5.8Q20 5.5 19.75 5.25Q19.5 5 19.2 5H4.8Q4.5 5 4.25 5.25Q4 5.5 4 5.8V16.2Q4 16.5 4.25 16.75Q4.5 17 4.8 17ZM4 17Q4 17 4 16.775Q4 16.55 4 16.2V5.8Q4 5.45 4 5.225Q4 5 4 5Q4 5 4 5.225Q4 5.45 4 5.8V16.2Q4 16.55 4 16.775Q4 17 4 17Z"/>
    </Icon>
  )
});

export default IconMaterialTvOutlinedW100;
