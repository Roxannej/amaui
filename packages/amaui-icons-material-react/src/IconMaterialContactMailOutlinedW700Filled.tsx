import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailOutlinedW700Filled'
      short_name='ContactMail'

      {...props}
    >
      <path d="M3.15 21.375Q1.825 21.375 0.913 20.462Q0 19.55 0 18.225V5.775Q0 4.45 0.913 3.537Q1.825 2.625 3.15 2.625H20.85Q22.175 2.625 23.087 3.537Q24 4.45 24 5.775V18.225Q24 19.55 23.087 20.462Q22.175 21.375 20.85 21.375ZM9.7 13.8Q11.05 13.8 11.963 12.887Q12.875 11.975 12.875 10.625Q12.875 9.275 11.963 8.35Q11.05 7.425 9.7 7.425Q8.35 7.425 7.425 8.35Q6.5 9.275 6.5 10.625Q6.5 11.975 7.425 12.887Q8.35 13.8 9.7 13.8ZM13.95 10.925H20.425V6.2H13.95ZM17.2 9.7 14.775 8V7L17.2 8.7L19.625 7V8ZM2.875 18.625H16.675Q15.625 16.75 13.775 15.688Q11.925 14.625 9.775 14.625Q7.625 14.625 5.775 15.688Q3.925 16.75 2.875 18.625Z"/>
    </Icon>
  )
});

export default IconMaterialContactMailOutlinedW700Filled;
