import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer3Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3Sharp'
      short_name='Timer3'

      {...props}
    >
      <path d="M8.45 17Q7.25 17 6.4 16.337Q5.55 15.675 5.2 14.55L6.65 13.95Q6.8 14.675 7.275 15.087Q7.75 15.5 8.5 15.5Q9.175 15.5 9.688 15.113Q10.2 14.725 10.2 14Q10.2 13.2 9.588 12.85Q8.975 12.5 8.3 12.5H7.5V11.05H8.25Q8.9 11.05 9.375 10.737Q9.85 10.425 9.85 9.7Q9.85 9.05 9.413 8.75Q8.975 8.45 8.4 8.45Q7.875 8.45 7.438 8.762Q7 9.075 6.85 9.6L5.45 9Q5.75 8.025 6.588 7.512Q7.425 7 8.4 7Q9.575 7 10.488 7.662Q11.4 8.325 11.4 9.6Q11.4 10.35 11.1 10.837Q10.8 11.325 10.15 11.7V11.75Q10.9 12.05 11.325 12.675Q11.75 13.3 11.75 14.1Q11.75 15.45 10.762 16.225Q9.775 17 8.45 17ZM15.9 17Q14.925 17 14.025 16.538Q13.125 16.075 12.75 15.1L14.15 14.5Q14.425 15.1 14.863 15.35Q15.3 15.6 15.9 15.6Q16.275 15.6 16.763 15.45Q17.25 15.3 17.25 14.8Q17.25 14.35 16.812 14.137Q16.375 13.925 15.85 13.8Q14.9 13.65 13.975 13.137Q13.05 12.625 13.05 11.5Q13.05 10.4 13.938 9.925Q14.825 9.45 15.8 9.45Q16.675 9.45 17.462 9.787Q18.25 10.125 18.6 11L17.3 11.55Q17.075 11.125 16.7 10.938Q16.325 10.75 15.8 10.75Q15.45 10.75 15.025 10.9Q14.6 11.05 14.6 11.5Q14.6 11.925 15.025 12.112Q15.45 12.3 16.2 12.5Q17.1 12.7 17.95 13.162Q18.8 13.625 18.8 14.75Q18.8 15.875 17.837 16.438Q16.875 17 15.9 17Z"/>
    </Icon>
  )
});

export default IconMaterialTimer3Sharp;
