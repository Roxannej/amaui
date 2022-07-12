import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentRoundedW700Filled'
      short_name='Segment'

      {...props}
    >
      <path d="M10 19.35Q9.35 19.35 8.887 18.888Q8.425 18.425 8.425 17.775Q8.425 17.125 8.887 16.663Q9.35 16.2 10 16.2H20Q20.65 16.2 21.113 16.663Q21.575 17.125 21.575 17.775Q21.575 18.425 21.113 18.888Q20.65 19.35 20 19.35ZM4 7.8Q3.35 7.8 2.888 7.338Q2.425 6.875 2.425 6.225Q2.425 5.575 2.888 5.112Q3.35 4.65 4 4.65H20Q20.65 4.65 21.113 5.112Q21.575 5.575 21.575 6.225Q21.575 6.875 21.113 7.338Q20.65 7.8 20 7.8ZM10 13.575Q9.35 13.575 8.887 13.112Q8.425 12.65 8.425 12Q8.425 11.35 8.887 10.887Q9.35 10.425 10 10.425H20Q20.65 10.425 21.113 10.887Q21.575 11.35 21.575 12Q21.575 12.65 21.113 13.112Q20.65 13.575 20 13.575Z"/>
    </Icon>
  )
});

export default IconMaterialSegmentRoundedW700Filled;