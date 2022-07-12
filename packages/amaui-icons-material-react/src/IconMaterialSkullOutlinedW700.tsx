import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkullOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullOutlinedW700'
      short_name='Skull'

      {...props}
    >
      <path d="M5.475 22.5v-4.4q-.85-.475-1.575-1.225-.725-.75-1.262-1.675-.538-.925-.838-2-.3-1.075-.3-2.2 0-4.2 2.938-6.85Q7.375 1.5 12 1.5t7.562 2.65Q22.5 6.8 22.5 11q0 1.125-.3 2.2-.3 1.075-.837 2-.538.925-1.263 1.675-.725.75-1.575 1.225v4.4Zm3.15-3.15h.75v-2h2.25v2h.75v-2h2.25v2h.75v-3.075q.925-.375 1.663-.925.737-.55 1.25-1.238.512-.687.787-1.475.275-.787.275-1.637 0-2.85-2.038-4.6Q15.275 4.65 12 4.65q-3.275 0-5.312 1.75Q4.65 8.15 4.65 11q0 .85.275 1.637.275.788.788 1.475.512.688 1.25 1.238.737.55 1.662.925ZM10 15.95h4l-2-4Zm-1.5-2.7q.95 0 1.6-.663.65-.662.65-1.587 0-.95-.65-1.6-.65-.65-1.575-.65-.95 0-1.613.65-.662.65-.662 1.575 0 .95.662 1.612.663.663 1.588.663Zm7 0q.95 0 1.6-.663.65-.662.65-1.587 0-.95-.65-1.6-.65-.65-1.575-.65-.95 0-1.612.65-.663.65-.663 1.575 0 .95.663 1.612.662.663 1.587.663Zm-3.5 6.1Z"/>
    </Icon>
  )
});

export default IconMaterialSkullOutlinedW700;
