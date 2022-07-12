import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandMoreRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreRoundedW700'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 15.5Q11.7 15.5 11.413 15.387Q11.125 15.275 10.9 15.05L6.275 10.425Q5.825 9.975 5.838 9.337Q5.85 8.7 6.3 8.25Q6.75 7.8 7.4 7.8Q8.05 7.8 8.5 8.25L12 11.75L15.525 8.225Q15.975 7.775 16.613 7.787Q17.25 7.8 17.7 8.25Q18.15 8.7 18.15 9.35Q18.15 10 17.7 10.45L13.1 15.05Q12.875 15.275 12.588 15.387Q12.3 15.5 12 15.5Z"/>
    </Icon>
  )
});

export default IconMaterialExpandMoreRoundedW700;