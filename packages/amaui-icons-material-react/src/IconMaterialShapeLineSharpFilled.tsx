import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShapeLineSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapeLineSharpFilled'
      short_name='ShapeLine'

      {...props}
    >
      <path d="M6 11q-2.075 0-3.537-1.463Q1 8.075 1 6q0-2.1 1.463-3.55Q3.925 1 6 1q2.1 0 3.55 1.45Q11 3.9 11 6q0 2.075-1.45 3.537Q8.1 11 6 11Zm8 12v-9h9v9Zm3.725-15.3L7.7 17.7q.125.3.212.625Q8 18.65 8 19q0 1.25-.862 2.125Q6.275 22 5 22q-1.25 0-2.125-.875T2 19q0-1.275.875-2.137Q3.75 16 5 16q.35 0 .675.087.325.088.625.213l10-10.025q-.125-.3-.213-.613Q16 5.35 16 5q0-1.275.875-2.138Q17.75 2 19 2q1.275 0 2.138.862Q22 3.725 22 5q0 1.25-.862 2.125Q20.275 8 19 8q-.35 0-.662-.088-.313-.087-.613-.212Z"/>
    </Icon>
  );
});

export default IconMaterialShapeLineSharpFilled;