import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSpeakerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeakerTwoTone'
      short_name='HomeSpeaker'

      {...props}
    >
      <path d="M9.45 21.975Q7.3 21.975 5.9 20.375Q4.5 18.775 4.775 16.65L6.225 5.825Q6.275 5.425 6.525 5.088Q6.775 4.75 7.2 4.575L15.5 1.25Q16.2 1 16.85 1.4Q17.5 1.8 17.6 2.55L19.3 16.725Q19.55 18.825 18.175 20.4Q16.8 21.975 14.65 21.975ZM8.55 11.575H15.625L14.8 4.825L9.1 7.075ZM9.45 18.95H14.65Q15.325 18.95 15.863 18.4Q16.4 17.85 16.3 17.075L16 14.6H8.125L7.8 17.05Q7.675 17.825 8.225 18.387Q8.775 18.95 9.45 18.95Z"/>
    </Icon>
  )
});

export default IconMaterialHomeSpeakerTwoTone;
