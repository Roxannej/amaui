import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromecastDeviceTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDeviceTwoTone'
      short_name='ChromecastDevice'

      {...props}
    >
      <path d="M21.175 14.8V9.175H24.4V14.8Zm-15.95 3.1q-2.125 0-3.875-1.263Q-.4 15.375-.4 13.7v-3.375q0-1.7 1.75-2.975Q3.1 6.075 5.225 6.075q1.175 0 2.013.275.837.275 1.537.55.525.25 1.025.412.5.163 1.075.163h9.375v9.05h-9.375q-.55 0-1.063.163-.512.162-1.037.387-.7.3-1.537.562-.838.263-2.013.263Zm-4-5.225h1.15q.275 0 .475-.2.2-.2.2-.475 0-.275-.2-.475-.2-.2-.475-.2h-1.15q-.275 0-.462.2-.188.2-.188.475 0 .275.188.475.187.2.462.2Z"/>
    </Icon>
  )
});

export default IconMaterialChromecastDeviceTwoTone;