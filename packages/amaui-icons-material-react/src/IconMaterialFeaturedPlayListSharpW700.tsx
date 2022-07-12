import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListSharpW700'
      short_name='FeaturedPlayList'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM6 13H15V11H6ZM6 10H15V8H6ZM4.3 6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialFeaturedPlayListSharpW700;
