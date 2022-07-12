import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterOutlinedW100'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H15.2V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V8.8H19.7V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM12 15.05 11.05 12.95 8.95 12 11.05 11.05 12 8.95 12.95 11.05 15.05 12 12.95 12.95ZM17.2 8.975 16.5 7.525 15.05 6.825 16.5 6.125 17.2 4.675 17.9 6.125 19.35 6.825 17.9 7.525Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFilterOutlinedW100;
