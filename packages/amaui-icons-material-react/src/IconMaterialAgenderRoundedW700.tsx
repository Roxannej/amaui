import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAgenderRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgenderRoundedW700'
      short_name='Agender'

      {...props}
    >
      <path d="M12 22.575q-2.825 0-4.825-2t-2-4.825q0-2.425 1.488-4.275Q8.15 9.625 10.425 9.1v-7h3.15v7q2.275.525 3.762 2.362 1.488 1.838 1.488 4.288 0 2.825-1.988 4.825-1.987 2-4.837 2Zm0-3.15q1.15 0 2.05-.625.9-.625 1.325-1.6h-6.75q.425.975 1.338 1.6.912.625 2.037.625ZM8.625 14.3h6.75q-.425-1-1.325-1.612-.9-.613-2.05-.613-1.125 0-2.037.613-.913.612-1.338 1.612Z"/>
    </Icon>
  )
});

export default IconMaterialAgenderRoundedW700;