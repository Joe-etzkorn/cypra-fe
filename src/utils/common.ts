export const randomColor = () => {
  const colors = ["#59C9A5", "#57B2C4", "#EF6F6C"]
  return colors[Math.floor(Math.random() * colors.length)]
}
