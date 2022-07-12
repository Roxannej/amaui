import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvOutlined'
      short_name='ResetTv'

      {...props}
    >
      <path d="M8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8H20V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17H20Q20 17 20 17Q20 17 20 17V12Q20 12 20 12Q20 12 20 12H12.8L14.65 13.85L13.25 15.25L9 11L13.25 6.75L14.65 8.15L12.8 10H20Q20.825 10 21.413 10.587Q22 11.175 22 12V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V21ZM13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Q13 11 13 11Z"/>
    </Icon>
  )
});

export default IconMaterialResetTvOutlined;
