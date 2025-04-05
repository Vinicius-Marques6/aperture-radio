function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', fontFamily: 'Inter', lineHeight: '1.6em', pointerEvents: 'none' }}>
        <p>
          Click on the radio to turn it on/off
        </p>
        <p>
          Click and drag to rotate the camera
        </p>
    </div>
  )
}

export default Overlay