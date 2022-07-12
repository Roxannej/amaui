import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShapeLineSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineSharpW700Filled'
      short_name='ShapeLine'

      {...props}
    >
      <path d="M6 11.5q-2.275 0-3.888-1.613Q.5 8.275.5 6q0-2.3 1.612-3.9Q3.725.5 6 .5q2.3 0 3.9 1.6T11.5 6q0 2.275-1.6 3.887Q8.3 11.5 6 11.5Zm7.5 12v-10h10v10Zm4.35-15.125-9.475 9.45q.1.275.15.575.05.3.05.6 0 1.475-1.037 2.525Q6.5 22.575 5 22.575q-1.475 0-2.525-1.05-1.05-1.05-1.05-2.525 0-1.5 1.05-2.538Q3.525 15.425 5 15.425q.3 0 .6.05t.575.15l9.45-9.475q-.1-.275-.15-.562-.05-.288-.05-.588 0-1.5 1.05-2.538Q17.525 1.425 19 1.425q1.5 0 2.538 1.037Q22.575 3.5 22.575 5q0 1.475-1.037 2.525Q20.5 8.575 19 8.575q-.3 0-.587-.05-.288-.05-.563-.15Z"/>
    </Icon>
  )
});

export default IconMaterialShapeLineSharpW700Filled;
