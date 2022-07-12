import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApkInstallOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApkInstallOutlinedW700'
      short_name='ApkInstall'

      {...props}
    >
      <path d="M3.8 22.85q-1.325 0-2.238-.912Q.65 21.025.65 19.7V4.3q0-1.325.912-2.238.913-.912 2.238-.912h8.05l6.5 6.5v4.75H15.2V9.3h-5v-5H3.8v15.4h9.8v3.15Zm0-3.15V4.3v15.4Zm1-1q.1-1.075.663-1.975.562-.9 1.487-1.425l-.825-1.5q-.025-.025.075-.35.1-.05.2-.038.1.013.15.113l.875 1.55q.425-.2.875-.288.45-.087.9-.087t.9.087q.45.088.875.288l.875-1.55q.025-.05.325-.075.1.05.125.15.025.1-.025.2l-.825 1.5q.925.525 1.488 1.425.562.9.662 1.975Zm2.425-1.325q.2 0 .313-.113.112-.112.112-.312t-.112-.325q-.113-.125-.313-.125t-.325.125q-.125.125-.125.325t.125.312q.125.113.325.113Zm3.95 0q.2 0 .325-.113.125-.112.125-.312t-.125-.325q-.125-.125-.325-.125t-.312.125q-.113.125-.113.325t.113.312q.112.113.312.113Zm8 5.475-4.8-4.825 2.2-2.25L17.6 16.8v-3.35h3.15v3.35l1.025-1L24 18.025Z"/>
    </Icon>
  )
});

export default IconMaterialApkInstallOutlinedW700;
