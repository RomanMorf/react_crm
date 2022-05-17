import { useEffect, useCallback, useState, useRef } from "react";

const useTooltip = (key) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [targetData, setTargetData] = useState(null)
  const wrapperEl = useRef(null)

  function searchDataAttrByKey (e, dataKey, cb) {
    const node = e.target

    function findNodeData(node, dataKey) {
      if (  node.localName === "body" || 
            node.localName === "html" ||
            node.parentNode === null) {
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

  function ContextMenuTrigger({ children }) {
    useEffect(() => {
      if (wrapperEl.current) {
        document.addEventListener("click", handleClick);
        wrapperEl.current.addEventListener("contextmenu", handleContextMenu);
      }

      return () => {
        if (wrapperEl.current) {
          document.removeEventListener("click", handleClick);
          wrapperEl.current.removeEventListener("contextmenu", handleContextMenu);
        }
      };
    });
  
    return (
      <div ref={wrapperEl} >
        { children }
      </div>
    )
  }

  return { anchorPoint, showContextMenu, targetData, ContextMenuTrigger };
};


export { useTooltip };