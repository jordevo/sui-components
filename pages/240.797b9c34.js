(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{"L/o9":function(n,o){n.exports='const Icon = () => (\n  <svg viewBox="0 0 24 24">\n    <path d="M17.25 2.83V2.5a.75.75 0 1 0-1.5 0v.25h-7.5V2.5a.75.75 0 0 0-1.5 0v.33a4.73 4.73 0 0 0-4 4.67v9a4.76 4.76 0 0 0 4.75 4.75h9a4.76 4.76 0 0 0 4.75-4.75v-9a4.73 4.73 0 0 0-4-4.67zm2.5 6.42v7.25a3.25 3.25 0 0 1-3.25 3.25h-9a3.25 3.25 0 0 1-3.25-3.25V9.25h15.5zm0-1.75v.25H4.25V7.5A3.25 3.25 0 0 1 7.5 4.25h9a3.25 3.25 0 0 1 3.25 3.25zM14.5 18.25a2.75 2.75 0 0 1-2.75-2.75v-1a2.75 2.75 0 0 1 2.75-2.75h1a2.75 2.75 0 0 1 2.75 2.75v1a2.75 2.75 0 0 1-2.75 2.75h-1zm-1.25-3.75v1a1.25 1.25 0 0 0 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25h-1c-.69 0-1.25.56-1.25 1.25z" />\n  </svg>\n)\n\nconst CloseIcon = () => (\n  <svg viewBox="0 0 24 24">\n    <path\n      id="a"\n      d="M13.42 12l4.79-4.8a1 1 0 0 0-1.41-1.41L12 10.58 7.21 5.79A1 1 0 0 0 5.8 7.2l4.79 4.8-4.79 4.79a1 1 0 1 0 1.41 1.41L12 13.41l4.8 4.79a1 1 0 0 0 1.41-1.41L13.42 12z"\n    />\n  </svg>\n)\n\nreturn (\n  <div style={{float: \'left\'}}>\n    <h2>Standard Tags</h2>\n    <p>\n      <AtomTag label="Tag Structure" />{\' \'}\n      <AtomTag\n        label="Close Tag"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n      />\n      <AtomTag label="Icon Tag" icon={<Icon />} />\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n      />\n      <AtomTag label="Maximum Tag Width. Truncated text, without close nor icon" />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, no icon, close"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, icon, no close"\n        icon={<Icon />}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, with icon and close"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n      />\n      <AtomTag label="101 char length, truncated to 100 char890123456789012345678901234567890123456789012345678901234567890" />\n    </p>\n\n    <h2>Small Tags</h2>\n    <p>\n      <AtomTag label="Tag Structure" size={atomTagSizes.SMALL} />\n      <AtomTag\n        label="Close Tag"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag label="Icon Tag" icon={<Icon />} size={atomTagSizes.SMALL} />\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, without close nor icon"\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, no icon, close"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, icon, no close"\n        icon={<Icon />}\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, with icon and close"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.SMALL}\n      />\n      <AtomTag\n        label="101 char length, truncated to 100 char890123456789012345678901234567890123456789012345678901234567890"\n        size={atomTagSizes.SMALL}\n      />\n    </p>\n\n    <h2>Large Tags</h2>\n    <p>\n      <AtomTag label="Tag Structure" size={atomTagSizes.LARGE} />\n      <AtomTag\n        label="Close Tag"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag label="Icon Tag" icon={<Icon />} size={atomTagSizes.LARGE} />\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, without close nor icon"\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, no icon, close"\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, icon, no close"\n        icon={<Icon />}\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag\n        label="Maximum Tag Width. Truncated text, with icon and close"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.LARGE}\n      />\n      <AtomTag\n        label="101 char length, truncated to 100 char890123456789012345678901234567890123456789012345678901234567890"\n        size={atomTagSizes.LARGE}\n      />\n    </p>\n\n    <h2>Actionable Tag</h2>\n    <p>\n      <AtomTag label="Navigation Tag" onClick={() => alert(\'click!\')} />\n      <AtomTag\n        label="Anchor Tag"\n        href="https://www.google.com"\n        target="_blank"\n      />\n      <AtomTag\n        iconPlacement="right"\n        icon={<Icon />}\n        label="Icon placement right"\n        href="https://www.google.com"\n        target="_blank"\n      />\n      <AtomTag\n        icon={<Icon />}\n        label="Icon placement left"\n        href="https://www.google.com"\n        target="_blank"\n      />\n    </p>\n\n    <h2>Responsive Tags</h2>\n    <p>\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.SMALL}\n        responsive\n      />\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        responsive\n      />\n      <AtomTag\n        label="Icon & Close Tag"\n        icon={<Icon />}\n        onClose={() => alert(\'close!\')}\n        closeIcon={<CloseIcon />}\n        size={atomTagSizes.LARGE}\n        responsive\n      />\n      <AtomTag\n        iconPlacement="right"\n        icon={<Icon />}\n        label="Icon placement right"\n        href="https://www.google.com"\n        target="_blank"\n        responsive\n      />\n    </p>\n  </div>\n)\n'}}]);