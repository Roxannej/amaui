import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressOutlinedW100Filled'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M19.625 12.325q-.275 0-.487-.213-.213-.212-.213-.487v-4.95q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v4.95q0 .275-.212.487-.213.213-.488.213Zm-11.95 7.5q-.15 0-.287-.063-.138-.062-.263-.187l-4.25-4.2.55-.55q.1-.1.213-.137.112-.038.237-.013l3.55.7v-9.75q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .187.025.088.025.163.075l3.05 1.5q.725.35 1.037 1.137.313.788.163 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressOutlinedW100Filled;
