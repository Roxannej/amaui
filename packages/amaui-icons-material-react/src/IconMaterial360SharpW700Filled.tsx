import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial360SharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='360SharpW700Filled'
      short_name='360'

      {...props}
    >
      <path d="M8.875 20.65 7.225 18.975 8.65 17.525Q4.975 17.05 3.063 15.588Q1.15 14.125 1.15 12Q1.15 9.225 4.263 7.687Q7.375 6.15 12 6.15Q16.625 6.15 19.738 7.675Q22.85 9.2 22.85 12Q22.85 14.075 20.962 15.55Q19.075 17.025 16 17.45V14.275Q17.925 13.9 18.812 13.237Q19.7 12.575 19.7 12Q19.7 11.15 17.763 10.225Q15.825 9.3 12 9.3Q8.175 9.3 6.238 10.225Q4.3 11.15 4.3 12Q4.3 12.6 5.275 13.287Q6.25 13.975 8.6 14.4L7.225 13.025L8.875 11.35L13.525 16Z"/>
    </Icon>
  )
});

export default IconMaterial360SharpW700Filled;
