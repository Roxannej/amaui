import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlockOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlockOutlinedW700Filled'
      short_name='Block'

      {...props}
    >
      <path d="M4.3 11.95Q4.3 13.075 4.613 14.15Q4.925 15.225 5.55 16.175L16.2 5.5Q15.25 4.875 14.188 4.587Q13.125 4.3 12 4.3Q8.8 4.3 6.55 6.525Q4.3 8.75 4.3 11.95ZM7.75 18.375Q8.65 19.075 9.75 19.387Q10.85 19.7 12 19.7Q15.2 19.7 17.45 17.438Q19.7 15.175 19.7 11.95Q19.7 10.825 19.388 9.75Q19.075 8.675 18.425 7.725ZM1.15 11.95Q1.15 9.7 2 7.737Q2.85 5.775 4.325 4.312Q5.8 2.85 7.775 2Q9.75 1.15 12 1.15Q14.25 1.15 16.225 2Q18.2 2.85 19.675 4.312Q21.15 5.775 22 7.737Q22.85 9.7 22.85 11.95Q22.85 14.2 22 16.188Q21.15 18.175 19.675 19.65Q18.2 21.125 16.225 21.988Q14.25 22.85 12 22.85Q9.75 22.85 7.775 21.988Q5.8 21.125 4.325 19.65Q2.85 18.175 2 16.188Q1.15 14.2 1.15 11.95Z"/>
    </Icon>
  )
});

export default IconMaterialBlockOutlinedW700Filled;
