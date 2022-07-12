import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOutlinedW100Filled'
      short_name='Subtitles'

      {...props}
    >
      <path d="M6.75 11.8H7.45V11.1H6.75ZM6.75 15.25H14.55V14.55H6.75ZM16.55 15.25H17.25V14.55H16.55ZM9.45 11.8H17.25V11.1H9.45ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialSubtitlesOutlinedW100Filled;
