import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLayersRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersRoundedW700Filled'
      short_name='Layers'

      {...props}
    >
      <path d="M11.975 22.45Q11.475 22.45 10.975 22.3Q10.475 22.15 10.05 21.8L3.2 16.45Q2.6 15.975 2.6 15.212Q2.6 14.45 3.2 13.975Q3.625 13.65 4.162 13.637Q4.7 13.625 5.125 13.975L11.975 19.3Q11.975 19.3 11.975 19.3Q11.975 19.3 11.975 19.3L18.875 13.975Q19.3 13.65 19.837 13.637Q20.375 13.625 20.8 13.975Q21.425 14.45 21.425 15.212Q21.425 15.975 20.8 16.45L13.925 21.8Q13.5 22.15 12.988 22.3Q12.475 22.45 11.975 22.45ZM11.975 15.975Q11.475 15.975 10.975 15.812Q10.475 15.65 10.05 15.3L3.2 9.975Q2.9 9.725 2.75 9.4Q2.6 9.075 2.6 8.725Q2.6 8.375 2.75 8.062Q2.9 7.75 3.2 7.5L10.05 2.175Q10.475 1.825 10.975 1.662Q11.475 1.5 11.975 1.5Q12.475 1.5 12.988 1.662Q13.5 1.825 13.925 2.175L20.75 7.5Q21.05 7.75 21.212 8.062Q21.375 8.375 21.375 8.725Q21.375 9.075 21.212 9.4Q21.05 9.725 20.75 9.975L13.925 15.3Q13.5 15.65 12.988 15.812Q12.475 15.975 11.975 15.975Z"/>
    </Icon>
  )
});

export default IconMaterialLayersRoundedW700Filled;