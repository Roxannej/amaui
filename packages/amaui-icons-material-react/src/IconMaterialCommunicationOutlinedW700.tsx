import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommunicationOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationOutlinedW700'
      short_name='Communication'

      {...props}
    >
      <path d="m10.1 13.5-1.325-1.325q.325-.5.325-1.15 0-.65-.325-1.15l1.325-1.35q.875.95.875 2.487 0 1.538-.875 2.488Zm2.675 2.7-1.325-1.35q1.4-1.4 1.4-3.825 0-2.425-1.4-3.825l1.325-1.35q.975.925 1.45 2.312.475 1.388.475 2.863t-.475 2.862q-.475 1.388-1.45 2.313Zm-7.975-4q-1.05 0-1.813-.762-.762-.763-.762-1.813 0-1.075.762-1.825.763-.75 1.813-.75 1.075 0 1.825.75t.75 1.825q0 1.05-.75 1.813-.75.762-1.825.762ZM.225 17.15V16q0-.75.425-1.4.425-.65 1.15-.975.675-.325 1.437-.475Q4 13 4.8 13q.8 0 1.575.15.775.15 1.45.475.725.325 1.138.975.412.65.412 1.4v1.15ZM19.2 12.2q-1.05 0-1.812-.762-.763-.763-.763-1.813 0-1.075.763-1.825.762-.75 1.812-.75 1.075 0 1.825.75t.75 1.825q0 1.05-.75 1.813-.75.762-1.825.762Zm-4.575 4.95V16q0-.75.413-1.4.412-.65 1.137-.975.675-.325 1.45-.475Q18.4 13 19.2 13q.8 0 1.563.15.762.15 1.437.475.725.325 1.15.975.425.65.425 1.4v1.15Z"/>
    </Icon>
  )
});

export default IconMaterialCommunicationOutlinedW700;
