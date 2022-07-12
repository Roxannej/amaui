import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationRoundedW700Filled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M9.8 16.2Q10.3 16.2 10.65 15.85Q11 15.5 11 15V9Q11 8.5 10.65 8.15Q10.3 7.8 9.8 7.8Q9.3 7.8 8.963 8.15Q8.625 8.5 8.625 9V15Q8.625 15.5 8.963 15.85Q9.3 16.2 9.8 16.2ZM14.2 16.2Q14.7 16.2 15.038 15.85Q15.375 15.5 15.375 15V9Q15.375 8.5 15.038 8.15Q14.7 7.8 14.2 7.8Q13.7 7.8 13.35 8.15Q13 8.5 13 9V15Q13 15.5 13.35 15.85Q13.7 16.2 14.2 16.2ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPausePresentationRoundedW700Filled;