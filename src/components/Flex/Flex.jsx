function Flex({children}) {
    const flexStyle={
        display:'flex',
        flexWrap:"wrap",
        justifyContent:"center",
    }
  return (
    <div style={flexStyle}>{children}</div>
  )
}

export default Flex
