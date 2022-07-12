import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWoman2RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2RoundedW700'
      short_name='Woman2'

      {...props}
    >
      <path d="M11.8 22.275q-.65 0-1.112-.463-.463-.462-.463-1.112v-4.325H8.95q-.825 0-1.3-.687-.475-.688-.175-1.463L9.9 8.1q.275-.65.85-1.025Q11.325 6.7 12 6.7t1.25.375q.575.375.85 1.025l2.425 6.125q.3.775-.175 1.463-.475.687-1.3.687h-1.275V20.7q0 .65-.463 1.112-.462.463-1.112.463ZM12 5.8q-.975 0-1.675-.7-.7-.7-.7-1.675 0-.975.7-1.675.7-.7 1.675-.7.975 0 1.675.7.7.7.7 1.675 0 .975-.7 1.675-.7.7-1.675.7Z"/>
    </Icon>
  )
});

export default IconMaterialWoman2RoundedW700;