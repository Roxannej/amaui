import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvGenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenTwoTone'
      short_name='TvGen'

      {...props}
    >
      <path d="M3.5 21.7v-2.775l.95.725q-1.325-.025-2.187-.912-.863-.888-.863-2.113v-10.2q0-1.25.888-2.138.887-.887 2.137-.887h15.15q1.25 0 2.138.887.887.888.887 2.138v10.2q0 1.225-.862 2.1-.863.875-2.138.925l.925-.725V21.7h-1.9l-.65-2.05H6.05l-.675 2.05Z"/>
    </Icon>
  )
});

export default IconMaterialTvGenTwoTone;
