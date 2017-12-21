const Health = startingHealth => {
  const healthBarHeight = 10
  const healthBarStrokeWidth = 2
  let health = startingHealth

  const updateHealth = amount => {
    health = Math.max(0, Math.min(health + amount, startingHealth)) // Health min 0 max 100
  }

  const renderHealthBar = (ctx, playerPos) => {
    // Fill
    ctx.beginPath()
    ctx.fillStyle = getFillColor(health)
    ctx.fillRect(
      playerPos.x + healthBarStrokeWidth,
      playerPos.y - healthBarHeight * 2,
      playerPos.width * (health / startingHealth) - healthBarStrokeWidth,
      healthBarHeight
    )

    // Stroke
    ctx.beginPath()
    ctx.lineWidth = healthBarStrokeWidth
    ctx.strokeStyle = "#000"
    ctx.strokeRect(
      playerPos.x + healthBarStrokeWidth / 2,
      playerPos.y - healthBarHeight * 2,
      playerPos.width - healthBarStrokeWidth / 2,
      healthBarHeight
    )
  }

  const getFillColor = health => {
    if (health > startingHealth * 0.67) return "#0f0"
    if (health > startingHealth * 0.33) return "#FF8300"
    return "#f00"
  }

  return {
    getHealth: () => health,
    hurt: amount => updateHealth(-amount),
    heal: amount => updateHealth(amount),
    renderHealthBar
  }
}

export { Health }
