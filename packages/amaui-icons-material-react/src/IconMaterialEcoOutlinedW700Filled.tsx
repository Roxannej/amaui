import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEcoOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoOutlinedW700Filled'
      short_name='Eco'

      {...props}
    >
      <path d="M11.375 22.8Q10.5 22.8 9.637 22.638Q8.775 22.475 7.95 22.15Q8.025 18.9 9.5 16.037Q10.975 13.175 13.35 10.95Q10.45 12.45 8.425 14.987Q6.4 17.525 5.35 20.65Q5.225 20.525 5.088 20.413Q4.95 20.3 4.825 20.175Q3.55 18.9 2.85 17.262Q2.15 15.625 2.15 13.875Q2.15 12.025 2.888 10.375Q3.625 8.725 4.925 7.425Q7.175 5.175 10.788 4.475Q14.4 3.775 20.625 4.425Q21.275 10.65 20.6 14.225Q19.925 17.8 17.675 20.075Q16.375 21.4 14.75 22.1Q13.125 22.8 11.375 22.8Z"/>
    </Icon>
  )
});

export default IconMaterialEcoOutlinedW700Filled;
