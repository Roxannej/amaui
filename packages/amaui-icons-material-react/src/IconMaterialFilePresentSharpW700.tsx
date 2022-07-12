import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilePresentSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentSharpW700'
      short_name='FilePresent'

      {...props}
    >
      <path d="M20.85 22.85H3.15V1.15H14.85L20.85 7.15ZM17.7 19.7V8H14V4.3H6.3V19.7ZM12 18.7Q13.65 18.7 14.825 17.525Q16 16.35 16 14.7V10.8H14V14.7Q14 15.525 13.413 16.113Q12.825 16.7 12 16.7Q11.175 16.7 10.588 16.113Q10 15.525 10 14.7V9.3Q10 9.075 10.137 8.938Q10.275 8.8 10.5 8.8Q10.725 8.8 10.863 8.938Q11 9.075 11 9.3V14.7H13V9.3Q13 8.25 12.275 7.525Q11.55 6.8 10.5 6.8Q9.45 6.8 8.725 7.525Q8 8.25 8 9.3V14.7Q8 16.35 9.175 17.525Q10.35 18.7 12 18.7ZM6.3 4.3V8V4.3V8V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialFilePresentSharpW700;
