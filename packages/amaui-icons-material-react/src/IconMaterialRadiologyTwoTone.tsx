import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadiologyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadiologyTwoTone'
      short_name='Radiology'

      {...props}
    >
      <path d="M5.4 22.6q-1.275 0-2.15-.875t-.875-2.15v-13.2q0-1.275.875-2.15T5.4 3.35h.825v-2h2.45v2h6.65v-2h2.45v2h.825q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Zm3.25-3.025h2.525v-1.65q0-.375-.325-.875L9.1 14.975q0-.025-.012-.063-.013-.037.037-.087h-.012.012q.65 0 1.213-.25.562-.25.962-.65.125-.15.313-.213.187-.062.387-.062.225 0 .4.075.175.075.325.2.425.45 1 .675.575.225 1.15.225h.025q.025.05.025.087 0 .038-.025.063l-1.75 2.075q-.125.175-.212.388-.088.212-.088.487v1.65h2.525v-1.25L17.1 16.3q.3-.35.538-.862.237-.513.237-1.188 0-.325-.063-.65-.062-.325-.187-.6.125-.275.175-.588.05-.312.05-.637 0-.55-.187-1.087-.188-.538-.563-.963l-1.725-2.05v-1.3H12.85v1.7q0 .375.138.613.137.237.212.312l1.975 2.35q.075.1.113.2.037.1.037.225 0 .2-.125.375t-.325.175q-.05 0-.15-.013-.1-.012-.175-.112-.525-.55-1.187-.813-.663-.262-1.363-.262t-1.362.262q-.663.263-1.188.813-.075.075-.175.1-.1.025-.15.025-.225 0-.35-.188-.125-.187-.125-.387 0-.125.05-.225t.125-.2L10.85 8.95q.125-.175.212-.388.088-.212.088-.487v-1.7H8.625V7.65l-1.7 2.025q-.3.35-.55.862-.25.513-.25 1.213 0 .325.075.65t.2.6q-.125.275-.2.6-.075.325-.075.65 0 .7.25 1.2t.55.85l1.725 2.025Z"/>
    </Icon>
  )
});

export default IconMaterialRadiologyTwoTone;