import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceResetTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceResetTwoTone'
      short_name='DeviceReset'

      {...props}
    >
      <path d="m14.6 16.275-3.675-3.7v-5.45h2.25v4.5l3.05 3.025Zm-2.675 5.35q-3.7 0-6.438-2.462Q2.75 16.7 2.4 12.975h3.05Q5.825 15.4 7.65 17q1.825 1.6 4.275 1.6 2.775 0 4.7-1.925Q18.55 14.75 18.55 12t-1.937-4.675Q14.675 5.4 11.925 5.4q-1.4 0-2.65.562-1.25.563-2.175 1.613h1.975v2.3h-6.4v-6.35h2.25v1.95q1.375-1.5 3.163-2.3 1.787-.8 3.837-.8 1.975 0 3.738.762 1.762.763 3.075 2.063 1.312 1.3 2.074 3.062.763 1.763.763 3.738t-.763 3.725q-.762 1.75-2.074 3.063-1.313 1.312-3.075 2.075-1.763.762-3.738.762Z"/>
    </Icon>
  )
});

export default IconMaterialDeviceResetTwoTone;