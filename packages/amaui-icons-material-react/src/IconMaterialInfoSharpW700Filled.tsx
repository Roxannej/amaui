import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInfoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoSharpW700Filled'
      short_name='Info'

      {...props}
    >
      <path d="M12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM12 9.5Q12.65 9.5 13.075 9.062Q13.5 8.625 13.5 8Q13.5 7.35 13.075 6.925Q12.65 6.5 12 6.5Q11.375 6.5 10.938 6.925Q10.5 7.35 10.5 8Q10.5 8.625 10.938 9.062Q11.375 9.5 12 9.5ZM10.625 17.375H13.375V11H10.625Z"/>
    </Icon>
  )
});

export default IconMaterialInfoSharpW700Filled;
