import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoLibraryOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibraryOutlinedW100Filled'
      short_name='PhotoLibrary'

      {...props}
    >
      <path d="M9.2 13.6H17.5L14.95 10.2L12.45 13.3L10.85 11.45ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V6.8H4.65V17.9Q4.65 18.2 4.9 18.45Q5.15 18.7 5.45 18.7H16.55V19.4Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoLibraryOutlinedW100Filled;
