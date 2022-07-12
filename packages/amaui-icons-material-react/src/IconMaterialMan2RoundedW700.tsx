import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan2RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2RoundedW700'
      short_name='Man2'

      {...props}
    >
      <path d="M10.225 20.7v-5.325H8.8q-.65 0-1.112-.463-.463-.462-.463-1.112V9.95q0-1.3.925-2.225t2.225-.925h3.25q1.3 0 2.225.925t.925 2.225v3.85q0 .65-.463 1.112-.462.463-1.112.463h-1.425V20.7q0 .65-.463 1.112-.462.463-1.112.463h-.4q-.65 0-1.112-.463-.463-.462-.463-1.112ZM12 5.8q-.975 0-1.675-.7-.7-.7-.7-1.675 0-.975.7-1.675.7-.7 1.675-.7.975 0 1.675.7.7.7.7 1.675 0 .975-.7 1.675-.7.7-1.675.7Z"/>
    </Icon>
  )
});

export default IconMaterialMan2RoundedW700;