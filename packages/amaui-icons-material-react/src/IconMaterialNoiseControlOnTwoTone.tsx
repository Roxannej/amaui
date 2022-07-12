import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoiseControlOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOnTwoTone'
      short_name='NoiseControlOn'

      {...props}
    >
      <path d="M13 18.25q1.375 0 2.325-.95.95-.95.95-2.3H13.75q0 .275-.212.5-.213.225-.538.225-.2 0-.4-.15t-.275-.35q-.175-.5-.412-.938-.238-.437-.588-.787L9.95 12.125q-.325-.325-.5-.738-.175-.412-.175-.887 0-.95.663-1.6.662-.65 1.562-.65.8 0 1.413.475.612.475.812 1.2h2.525q-.2-1.825-1.55-3.013-1.35-1.187-3.2-1.187-1.95 0-3.35 1.387Q6.75 8.5 6.75 10.5q0 .95.363 1.85.362.9 1.062 1.575L9.55 15.3q.125.125.225.312.1.188.15.413.325 1 1.175 1.612.85.613 1.9.613Zm.5-4.325q.625 0 1.038-.413.412-.412.412-1.012 0-.625-.412-1.038-.413-.412-1.038-.412-.6 0-1.012.412-.413.413-.413 1.038 0 .6.413 1.012.412.413 1.012.413ZM12 22.6q-2.225 0-4.15-.837-1.925-.838-3.35-2.263-1.425-1.425-2.262-3.35Q1.4 14.225 1.4 12q0-2.225.838-4.15Q3.075 5.925 4.5 4.5t3.35-2.263Q9.775 1.4 12 1.4q2.225 0 4.15.837 1.925.838 3.35 2.263 1.425 1.425 2.263 3.35.837 1.925.837 4.15 0 2.225-.837 4.15-.838 1.925-2.263 3.35-1.425 1.425-3.35 2.263-1.925.837-4.15.837Zm0-3.025q3.2 0 5.388-2.2 2.187-2.2 2.187-5.375 0-3.2-2.187-5.388Q15.2 4.425 12 4.425q-3.175 0-5.375 2.187Q4.425 8.8 4.425 12q0 3.175 2.2 5.375t5.375 2.2Z"/>
    </Icon>
  )
});

export default IconMaterialNoiseControlOnTwoTone;