import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudyOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudyOutlinedW700'
      short_name='Cloudy'

      {...props}
    >
      <path d="M6.575 20.85q-2.625 0-4.488-1.8-1.862-1.8-1.862-4.4 0-2.2 1.213-3.962Q2.65 8.925 4.725 8.45 5.5 6.05 7.5 4.6q2-1.45 4.5-1.45 3.05 0 5.25 2.062 2.2 2.063 2.475 5.088 1.8.475 2.925 1.937 1.125 1.463 1.125 3.338 0 2.2-1.537 3.737Q20.7 20.85 18.5 20.85Zm0-3.15h11.85q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65h-1.8v-2.375q0-1.925-1.35-3.275Q13.925 6.3 12 6.3q-1.975 0-3.3 1.487Q7.375 9.275 7.375 11.3h-.8q-1.325 0-2.263.937-.937.938-.937 2.263t.937 2.262q.938.938 2.263.938ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialCloudyOutlinedW700;