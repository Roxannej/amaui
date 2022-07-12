import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoRoundedW700Filled'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M6.875 14H12.425Q13.075 14 13.538 13.537Q14 13.075 14 12.425V8.875Q14 8.225 13.538 7.763Q13.075 7.3 12.425 7.3H6.875Q6.225 7.3 5.763 7.763Q5.3 8.225 5.3 8.875V12.425Q5.3 13.075 5.763 13.537Q6.225 14 6.875 14ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialFeaturedVideoRoundedW700Filled;
