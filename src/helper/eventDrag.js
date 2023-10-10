let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

const dragMouseDown = (e, dragRef) => {
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmousemove = (e) => elementDrag(e, dragRef);
  document.onmouseup = closeDragElement;
};

const elementDrag = (e, dragRef) => {
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  dragRef.current.style.top = (dragRef.current.offsetTop - pos2) + "px";
  dragRef.current.style.left = (dragRef.current.offsetLeft - pos1) + "px";
};

const closeDragElement = () => {
  // stop moving when mouse button is released:
  document.onmousemove = null;
}

export default dragMouseDown;
