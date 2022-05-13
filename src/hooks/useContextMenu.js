import { useEffect, useCallback, useState } from "react";

const useContextMenu = (key) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [targetData, setTargetData] = useState(null)

  function searchDataAttrByKey (e, dataKey, cb) {
    const node = e.target

    function findNodeData(node, dataKey) {
      if (  node.localName === "body" || 
            node.localName === "html" ) {
        return
      }

      if (node.dataset[dataKey]) {
        cb ? cb(node.dataset[dataKey]) : null
      } else {
        findNodeData(node.parentNode, dataKey)
      }
    }

    findNodeData(node, dataKey)
  }

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      setAnchorPoint({ x: e.pageX, y: e.pageY });
      searchDataAttrByKey(e, key, setTargetData)
      setShowContextMenu(true);
    },
    [setShowContextMenu, setAnchorPoint]
  );

  const handleClick = useCallback(() => (showContextMenu ? setShowContextMenu(false) : null), [showContextMenu]);

  function ContextMenuTrigger({children, id}) {
    useEffect(() => {
      document.addEventListener("click", handleClick);
      document.getElementById(`${id}`).addEventListener("contextmenu", handleContextMenu);
      return () => {
        document.removeEventListener("click", handleClick);
        document.getElementById(`${id}`).removeEventListener("contextmenu", handleContextMenu);
      };
    });
  
    return (
      <div id={id} >
        { children }
      </div>
    )
  }

  return { anchorPoint, showContextMenu, targetData, ContextMenuTrigger };
};


export { useContextMenu };