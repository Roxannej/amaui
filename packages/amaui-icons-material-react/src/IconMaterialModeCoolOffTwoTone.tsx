import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCoolOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOffTwoTone'
      short_name='ModeCoolOff'

      {...props}
    >
      <path d="m18.775 17.45-4.35-4.325h-.575l-2.95-2.95V9.6L6.55 5.225q-.325-.475-.287-1.013.037-.537.437-.937.475-.475 1.063-.475.587 0 1.037.475l1.7 1.675V3q0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075v1.95L15.2 3.275q.475-.475 1.063-.475.587 0 1.037.475.475.45.475 1.05 0 .6-.475 1.075l-3.775 3.8v1.275H14.8L18.6 6.7q.475-.475 1.075-.475t1.05.475q.475.45.475 1.037 0 .588-.475 1.063l-1.675 1.675H21q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45h-1.95l1.675 1.7q.475.45.475 1.038 0 .587-.475 1.062-.4.4-.937.437-.538.038-1.013-.287Zm.425 7.4-5.675-5.7V21q0 .6-.45 1.05-.45.45-1.075.45-.6 0-1.05-.45-.45-.45-.45-1.05v-1.95l-1.7 1.675q-.45.45-1.037.45-.588 0-1.063-.45-.45-.475-.45-1.075t.45-1.05l3.125-3.15-1.275-1.275L5.4 17.3q-.45.45-1.05.45-.6 0-1.075-.45-.45-.475-.45-1.062 0-.588.45-1.038l1.675-1.7H3q-.6 0-1.05-.45Q1.5 12.6 1.5 12q0-.625.45-1.075.45-.45 1.05-.45h1.85L-.8 4.85l1.6-1.6 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialModeCoolOffTwoTone;