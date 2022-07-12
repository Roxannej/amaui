import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardRoundedW700'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="m15.425 9.8-7.9 7.9q-.475.475-1.112.475-.638 0-1.113-.475t-.475-1.113q0-.637.475-1.112l7.9-7.9H7q-.65 0-1.112-.463Q5.425 6.65 5.425 6q0-.65.463-1.113Q6.35 4.425 7 4.425h10q.65 0 1.113.462.462.463.462 1.113v10q0 .65-.462 1.112-.463.463-1.113.463-.65 0-1.112-.463-.463-.462-.463-1.112Z"/>
    </Icon>
  )
});

export default IconMaterialArrowOutwardRoundedW700;