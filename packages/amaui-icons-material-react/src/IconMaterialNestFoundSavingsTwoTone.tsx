import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestFoundSavingsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsTwoTone'
      short_name='NestFoundSavings'

      {...props}
    >
      <path d="M11.975 14.6q2.175 0 3.6-1.5Q17 11.6 17 9.6V4.575h-5.025q-2 0-3.5 1.425t-1.5 3.6q0 .7.213 1.4.212.7.562 1.275l-.4.4q-.325.325-.325.7 0 .375.325.725.35.325.725.325T8.8 14.1l.35-.35q.625.4 1.35.625.725.225 1.475.225ZM12 12.575q-.35 0-.675-.088-.325-.087-.65-.237l2.575-2.575q.35-.35.35-.737 0-.388-.35-.713-.325-.35-.7-.35-.375 0-.725.35L9.25 10.8q-.1-.3-.162-.612-.063-.313-.063-.588 0-1.3.888-2.15Q10.8 6.6 12 6.6h3v3q0 1.225-.887 2.1-.888.875-2.113.875Zm0 9.9L8.725 19.2H5.4q-1.275 0-2.15-.875t-.875-2.15v-13.2q0-1.275.875-2.15T5.4-.05h13.2q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875h-3.325Z"/>
    </Icon>
  )
});

export default IconMaterialNestFoundSavingsTwoTone;
