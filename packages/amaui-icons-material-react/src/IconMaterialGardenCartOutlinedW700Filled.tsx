import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGardenCartOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartOutlinedW700Filled'
      short_name='GardenCart'

      {...props}
    >
      <path d="M7.325 21.575q-1.125 0-1.975-.813-.85-.812-.85-1.962V9.45L2.9 5.575H.525v-3.15H5L6.7 6.5h14.125q.875 0 1.35.75.475.75.075 1.55l-2.5 4.875q1.35.325 2.213 1.4.862 1.075.862 2.5 0 1.65-1.162 2.825-1.163 1.175-2.813 1.175-1.675 0-2.837-1.175-1.163-1.175-1.163-2.825 0-.35.063-.687.062-.338.187-.663l-1.9-.175-2.425 3.6q-.725 1.1-1.537 1.513-.813.412-1.913.412Zm.225-2.55q.025 0 .125-.075l2.225-3.2q-.825-.1-1.45-.338-.625-.237-1.05-.562v4q0 .075.05.125t.1.05Zm11.275-.325q.475 0 .788-.325.312-.325.312-.775 0-.475-.312-.788-.313-.312-.788-.312-.45 0-.775.312-.325.313-.325.788 0 .45.325.775t.775.325Z"/>
    </Icon>
  )
});

export default IconMaterialGardenCartOutlinedW700Filled;
