import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieRoundedW700Filled'
      short_name='Movie'

      {...props}
    >
      <path d="M4.3 3.15 6.3 7.15H9.3L7.3 3.15H9.3L11.3 7.15H14.3L12.3 3.15H14.3L16.3 7.15H19.3L17.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85H4.3Q2.975 20.85 2.062 19.962Q1.15 19.075 1.15 17.775V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15Z"/>
    </Icon>
  )
});

export default IconMaterialMovieRoundedW700Filled;
