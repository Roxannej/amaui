import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwordsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsTwoTone'
      short_name='Swords'

      {...props}
    >
      <path d="m18.725 21.825-2.55-2.55-2.2 2.2-.525-.525q-.9-.9-.9-2.138 0-1.237.9-2.112l3.35-3.375q.9-.875 2.138-.875 1.237 0 2.112.875l.55.55-2.2 2.2 2.55 2.525q.45.475.45 1.1 0 .625-.45 1.075l-1.05 1.05q-.475.475-1.1.475-.625 0-1.075-.475Zm3.8-15.7L11.1 17.525l.075.075q.375.85.213 1.75-.163.9-.863 1.6l-.525.525-2.2-2.2-2.55 2.55q-.45.475-1.075.475t-1.1-.475l-1.05-1.05q-.45-.45-.45-1.075t.45-1.1l2.55-2.525-2.2-2.2.55-.55q.675-.675 1.6-.838.925-.162 1.75.213l.1.1 11.4-11.425h4.75ZM6.45 11.1 1.5 6.125v-4.75h4.725l5 5.025Z"/>
    </Icon>
  )
});

export default IconMaterialSwordsTwoTone;
