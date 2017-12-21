const scale = 0.9

const detectCollision = item1 => item2 => {
  let [item1LeftEdge, item1RightEdge, item1TopEdge, item1BottomEdge] = item1
  let [item2LeftEdge, item2RightEdge, item2TopEdge, item2BottomEdge] = item2

  let overlapsX = item1RightEdge > item2LeftEdge && item1LeftEdge < item2RightEdge
  let overlapsY = item1BottomEdge > item2TopEdge && item1TopEdge < item2BottomEdge

  let hasCollided = overlapsY && overlapsX

  if (!hasCollided) return false

  let dir = {}
  let axis = 0

  let leftOverlap = Math.abs(item1RightEdge - item2LeftEdge)
  let rightOverlap = Math.abs(item1LeftEdge - item2RightEdge)
  let topOverlap = Math.abs(item1BottomEdge - item2TopEdge)
  let bottomOverlap = Math.abs(item1TopEdge - item2BottomEdge)

  dir.x = leftOverlap < rightOverlap ? -1 : 1
  dir.y = topOverlap < bottomOverlap ? -1 : 1

  axis = (dir.x < 0 ? leftOverlap : rightOverlap) < (dir.y < 0 ? topOverlap : bottomOverlap) ? "x" : "y"

  return {
    axis: axis,
    direction: dir[axis]
  }
}

export { detectCollision }
