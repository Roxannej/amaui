import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPieChartSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartSharpW700Filled'
      short_name='PieChart'

      {...props}
    >
      <path d="M13.625 10.425V1.3Q17.225 1.875 19.7 4.35Q22.175 6.825 22.75 10.425ZM10.475 22.675Q6.475 22.075 3.875 19.05Q1.275 16.025 1.275 12Q1.275 7.95 3.875 4.912Q6.475 1.875 10.475 1.3ZM13.625 22.675V13.575H22.75Q22.25 17.15 19.738 19.65Q17.225 22.15 13.625 22.675Z"/>
    </Icon>
  )
});

export default IconMaterialPieChartSharpW700Filled;
